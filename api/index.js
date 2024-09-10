require("dotenv").config();

const express = require("express");
const Mailjet = require("node-mailjet");
const cors = require("cors");
const ical = require("ical");


const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
const port = 3000;

app.get("/blocked-dates", async (req, res) => {
  const roomIcalMap = {
    sunny: process.env.ICAL_SUNNY,
    blue: process.env.ICAL_BLUE,
    boho: process.env.ICAL_BOHO,
    loft: process.env.ICAL_LOFT,
  };
  const room = req.query.room;
  const url = roomIcalMap[room];

  if (!url) {
    res.status(404).send("Room not found");
  }

  try {
    const response = await fetch(url);

    const bookingiCal = await response.text();
    const data = ical.parseICS(bookingiCal);
    const bookedDates = [];

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        var ev = data[k];
        if (data[k].type == "VEVENT") {
          console.log(ev.start, ev.end);
          const dateRange = getDatesBetween(ev.start, ev.end);
          //list of dates between start and end

          // for each date range element I need to add it to bookeddates
          dateRange.forEach((specificDate) => {
            bookedDates.push(specificDate);
          });
        }
      }
    }
    res.json(bookedDates);
  } catch (error) {
    console.error(error);
  }
});

function getDatesBetween(start, end) {
  const dates = [];
  const currentDate = new Date(start);

  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

app.post("/send-email", (req, res) => {
  const { name, email, message, room, reservationDates } = req.body;

  const senderEmail = process.env.EMAIL;

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: senderEmail,
          Name: "Contact Page",
        },
        To: [
          {
            Email: senderEmail,
            Name: "Pokoje 4 katy",
          },
        ],
        Subject: `Nowa wiadomośċ ze strony od ${name}!`,
        TextPart: `
            EMAIL: ${email}
            NAME: ${name}
            ROOM: ${room}
            RESERVATION DATES: From ${reservationDates.from} to ${reservationDates.to}
            MESSAGE:
            ${message}
        `,
      },
    ],
  });

  request
    .then((result) => {
      if (result.body.Messages[0].Status === "success") {
        return res.json("api_email_delivered");
      }

      console.log(result.body);
      res.status(500).json("api_email_not_delivered");
    })
    .catch((err) => {
      console.log(err.statusCode);
      res.status(500).json("api_email_not_delivered");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

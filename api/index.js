const express = require("express");
const Mailjet = require("node-mailjet");
const cors = require("cors");

require("dotenv").config();

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
const port = 3000;

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
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

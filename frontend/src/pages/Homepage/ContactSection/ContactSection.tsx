import React, { useEffect, useState } from "react";
import "./contactSection.scss";
import Map from "../../../components/Map/Map";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LabelledInput } from "../../../components/LabelledInput/LabelledInput";
import { LabelledSelect } from "../../../components/LabelledSelect/LabelledSelect";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";
import InfoBox from "../../../components/InfoBox/InfoBox";
import { LabelledTextarea } from "../../../components/LabelledTextarea/LabelledTextarea";
import ReactDayPicker from "../../../components/DatePicker/ReactDayPicker";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required("Please enter a valid email address"),
  message: yup.string().required(),
  room: yup.string().required(),
  reservationDates: yup
    .object()
    .shape({ from: yup.date().required(), to: yup.date().required() })
    .required(),
});

function ContactSection() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isBlockedDateLoading, setBlockedDatesLoading] = useState(false);
  const [apiEmailResponse, setApiEmailResponse] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [blockedDates, setBlockedDates] = useState([]);


  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const reservationDates = watch("reservationDates");
  const room = watch("room");

  useEffect(() => {
    setBlockedDatesLoading(true);
    fetch(`http://localhost:3000/blocked-dates?room=${room}`)
      .then((res) => res.json())
      .then((data) => setBlockedDates(data))
      .finally(() => setBlockedDatesLoading(false));
  }, [room]);

  const onSubmit = async (data: any) => {
    setLoading(true);

    const apiResponse = await (
      await fetch("http://localhost:3000/send-email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    setApiEmailResponse(apiResponse);
    setLoading(false);
  };

  return (
    <div id="contact" className="contactSection">
      <div className="topContact">
        <div className="contactForm">
          <form onSubmit={handleSubmit(onSubmit, () => {})}>
            <h1>{t("contact")}</h1>
            <LabelledInput label={t("name")} {...register("name")} />
            <LabelledInput label="Email" type="email" {...register("email")} />
            <LabelledSelect
              defaultValue={"sunny"}
              label={t("room")}
              options={[
                { value: "sunny", label: t("rooms_sunny_title") },
                { value: "blue", label: t("blue_title") },
                { value: "boho", label: t("boho_title") },
                { value: "loft", label: t("loft_title") },
              ]}
              {...register("room")}
            />
            <label>{t("reservation_date")}</label>
            <div
              className="dateRange"
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              {reservationDates?.from && reservationDates?.to
                ? `${reservationDates.from.toDateString()} - ${reservationDates.to.toDateString()}`
                : ""}
            </div>
            {showDatePicker && (
              <div className="datePickerDropdown">
                {isBlockedDateLoading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <Controller
                      control={control}
                      name="reservationDates"
                      render={({ field }) => (
                        <ReactDayPicker
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date);
                          }}
                          modifiers={{
                            disabled: blockedDates.map(
                              (date) => new Date(date)
                            ),
                          }}
                        />
                      )}
                    />
                    <div className="calendarBtnWrapper">
                      <button
                        className="calendarBtn"
                        onClick={() => setShowDatePicker(false)}
                      >
                        OK
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
            <LabelledTextarea
              label={t("message")}
              {...register("message")}
              rows={21}
            />
            <button className="contactButton" type="submit">
              {loading ? "Sending.." : t("send")}
            </button>
            <p>{apiEmailResponse && <span>{t(apiEmailResponse)}</span>}</p>
          </form>
        </div>
        <div className="mapContact">
          <Map />
        </div>
      </div>
      <div className="bottomContact">
        <div className="bottomDetails">
          <InfoBox
            icon={<LocationOnIcon />}
            name={t("address")}
            description="Ul. Szkolna 115, 32-641 Przeciszów, Polska"
          />

          <InfoBox
            icon={<PhoneIcon />}
            name={t("phone")}
            description="+48 966 333 1111"
          />
          <InfoBox
            icon={<EmailIcon />}
            name={t("contact_email")}
            description="pokoje4katy@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

import React, { useState } from "react";
import "./contactSection.scss";
import Map from "../../../components/Map/Map";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LabelledInput } from "../../../components/LabelledInput/LabelledInput";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";
import InfoBox from "../../../components/InfoBox/InfoBox";
import { LabelledTextarea } from "../../../components/LabelledTextarea/LabelledTextarea";

function ContactSection() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [apiEmailResponse, setApiEmailResponse] = useState("");

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required("Please enter a valid email address"),
    message: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    const apiResponse = await (
      await fetch("http://localhost:3000/send-email", {
        method: "POST",
        body: JSON.stringify(data),
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
            <LabelledTextarea
              label={t("message")}
              {...register("message")}
              rows={21}
            />
            <button type="submit">{loading ? "Sending.." : t("send")}</button>
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

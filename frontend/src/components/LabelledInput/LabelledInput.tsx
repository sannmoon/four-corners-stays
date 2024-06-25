import "./labelledInput.scss";
import React from "react";

type Props = {
  label: string;
  errors?: string;
} & React.PropsWithoutRef<JSX.IntrinsicElements["input"]>;

export const LabelledInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, errors, ...props }: Props, ref) => {
    return (
      <div className="labelled-input-wrapper">
        <label htmlFor={props.name}>{label}</label>
        <input className="form-input" {...props} ref={ref} />
        {errors && <p className="form-errors">{errors}</p>}
      </div>
    );
  }
);

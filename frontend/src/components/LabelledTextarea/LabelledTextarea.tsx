import "./labelledTextarea.scss";
import React from "react";

type Props = {
  label: string;
  errors?: string;
} & React.PropsWithoutRef<JSX.IntrinsicElements["textarea"]>;

export const LabelledTextarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ label, errors, ...props }: Props, ref) => {
    return (
      <div className="textarea-wrapper">
        <label htmlFor={props.name}>{label}</label>
        <textarea className="form-textarea" {...props} ref={ref} />
        {errors && <p className="textarea-errors">{errors}</p>}
      </div>
    );
  }
);

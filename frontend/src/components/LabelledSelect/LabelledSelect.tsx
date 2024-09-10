import "./labelledSelect.scss";
import React from "react";

type Props = {
  label: string;
  options: { value: string; label: string }[];
  errors?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const LabelledSelect = React.forwardRef<HTMLSelectElement, Props>(
  ({ label, options, errors, ...props }: Props, ref) => {
    return (
      <div className="labelled-select">
        <label htmlFor={props.id}>{label}</label>
        <select className="form-select" {...props} ref={ref}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors && <span className="select-errors">{errors}</span>}
      </div>
    );
  }
);

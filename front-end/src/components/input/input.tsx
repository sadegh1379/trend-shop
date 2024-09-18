import React, { forwardRef } from "react";
import { InputContainer } from "./input.style";
import { IInputProps } from "./types";

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      containerClassName,
      placeholder,
      required = false,
      onChange,
      value,
      title,
      type = "text",
      disabled = false,
      autoFocus = false,
      autoComplete,
      icon,
      inputMode,
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      onChange(newValue);
    };

    return (
      <InputContainer className={`${containerClassName || ""}`}>
        {title && (
          <p className="title">
            {title}
            {required && <span className="required">*</span>}
          </p>
        )}
        <div className="input_container">
          <input
            type={type}
            disabled={disabled}
            onChange={handleChange}
            autoFocus={autoFocus}
            className={`input ${className || ""}`}
            value={value}
            placeholder={placeholder || ""}
            ref={ref}
            inputMode={inputMode}
          />
          {icon && <span className="left_icon">{icon}</span>}
        </div>
      </InputContainer>
    );
  }
);

export { Input };

import { FC } from "react";
import Select from "react-select";
import { useTheme } from "styled-components";
import { SelectContainer } from "./select.style";
import { ISelectProps } from "./types";

export const SelectInput: FC<ISelectProps> = ({
  containerClassName,
  className,
  placeholder,
  title,
  disabled = false,
  options,
  onChange,
  value,
  isClearable,
  isLoading,
  isSearchable = true,
  required = false,
}) => {
  const { background, text } = useTheme();
  return (
    <SelectContainer className={`${containerClassName || ""}`}>
      {title && (
        <p className="title">
          {title}
          {required && <span className="required">*</span>}
        </p>
      )}

      <Select
        onChange={(selectedOption) =>
          onChange(selectedOption as IGSelectOption)
        }
        value={value}
        styles={{
          control: (styles, { isDisabled }) => ({
            ...styles,
            backgroundColor: background.black,
            borderRadius: "9px",
            borderColor: background.orange,
            boxShadow: "none",
            padding: "8px 16px 8px 5px",
            ":hover": {
              borderColor: background.orange,
            },

            "@media (max-width: 768px)": {
              padding: "5px 3px 4px 3px",
            },
          }),
          placeholder: (styles) => ({
            ...styles,
            fontSize: "12px",
            color: text.greyLight,
            whiteSpace: "nowrap",
          }),
          input: (styles) => ({
            ...styles,
            color: text.black,
            "::placeholder": {
              color: "red",
            },
          }),
          singleValue: (styles) => ({
            ...styles,
            color: text.black,
          }),
          option: (styles) => ({
            ...styles,
            backgroundColor: background.black,
            marginTop: 1,
            color: text.black,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: background.greyLight,
            },
          }),
          menu: (styles) => ({
            ...styles,
            backgroundColor: "#FAFAFA",
            padding: "3px 6px",
            animation: "MenuFadeIn 0.2s ease-in-out",
            fontSize: 14,
          }),
        }}
        className={`select ${className || ""}`}
        options={options}
        isDisabled={disabled}
        placeholder={placeholder || ""}
        isClearable={isClearable}
        isLoading={isLoading}
        isSearchable={isSearchable}
        noOptionsMessage={() => "موردی یافت نشد"}
        loadingMessage={() => "در حال دریافت..."}
      />
    </SelectContainer>
  );
};

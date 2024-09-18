import { FC } from "react";
import Select from "react-select";
import { useTheme } from "styled-components";
import { MultiSelectContainer } from "./multi-select.style";
import { IMultiSelectProps } from "./types";

export const MultiSelectInput: FC<IMultiSelectProps> = ({
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
    <MultiSelectContainer className={`${containerClassName || ""}`}>
      {title && (
        <p className="title">
          {title}
          {required && <span className="required">*</span>}
        </p>
      )}
      <Select
        onChange={(selectedOption) =>
          onChange(selectedOption as IGSelectOption[])
        }
        value={value}
        styles={{
          control: (styles, { isDisabled }) => ({
            ...styles,
            backgroundColor: background.white,
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
          input: (styles) => ({
            ...styles,
            color: text.black,
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
          }),
          menuList: (styles) => ({
            ...styles,
            "&::-webkit-scrollbar": {
              width: "3px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#e2e2e2",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#1a6edb",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#1a6edb",
            },
          }),
          multiValue: (styles) => ({
            ...styles,
            backgroundColor: "#e6e6e6",
            padding: "3px 6px",
          }),
          multiValueLabel: (styles) => ({
            ...styles,
            color: text.black,
          }),
        }}
        className={`select ${className || ""}`}
        options={options}
        isDisabled={disabled}
        placeholder={placeholder || ""}
        isClearable={isClearable}
        isMulti
        isLoading={isLoading}
        isSearchable={isSearchable}
        noOptionsMessage={() => "موردی یافت نشد"}
        loadingMessage={() => "در حال دریافت..."}
      />
    </MultiSelectContainer>
  );
};

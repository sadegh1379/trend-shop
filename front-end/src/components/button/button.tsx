import { DotLoader } from "components";
import { forwardRef } from "react";
import { ButtonContainer } from "./button.style";
import { IButtonProps } from "./types";

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      variant = "primary",
      className,
      children,
      onClick,
      disabled = false,
      isLoading = false,
      type = "button",
    },
    ref
  ) => {
    return (
      <ButtonContainer
        role="button"
        ref={ref}
        className={`${variant} ${disabled && "disabled"} ${className || ""}`}
        disabled={isLoading || disabled}
        onClick={() => (isLoading ? {} : onClick?.())}
        type={type}
      >
        {isLoading ? <DotLoader /> : children}
      </ButtonContainer>
    );
  }
);

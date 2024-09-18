interface IButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "outlined";
  colorType?: "orange";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

export type { IButtonProps };

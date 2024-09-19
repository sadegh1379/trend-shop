interface IButtonProps {
  variant?: "primary" | "outlined";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

export type { IButtonProps };

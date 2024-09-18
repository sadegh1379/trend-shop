import { ThemeProvider } from "styled-components";
import { appTheme } from "./app-theme";
import { ThemeProps } from "./types";

const AppThemeProvider = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;

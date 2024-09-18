interface IBgColorVariants {
  orange: string;
  black: string;
  greyDark: string;
  greyLight: string;
  white: string;
}

interface ITextColorVariants {
  orange: string;
  black: string;
  greyDark: string;
  greyLight: string;
  white: string;
}

interface IShadowVariants {
  sm: string;
  md: string;
  lg: string;
}

type Theme = {
  shadow: IShadowVariants;
  text: ITextColorVariants;
  background: IBgColorVariants;
};

interface ThemeProps {
  children: React.ReactNode;
}

interface IGlobalTheme extends Theme {}

export type { IGlobalTheme, Theme, ThemeProps };

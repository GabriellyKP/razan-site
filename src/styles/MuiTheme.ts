import { createTheme, Palette } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ptBR } from "@mui/material/locale";
import { TypographyOptions } from "@mui/material/styles/createTypography";

// tamanho da fonte do elemento html
// const htmlFontSize = 12.8
export const htmlFontSize = 16;

/**
 * Converte px para rem.
 * @param {number} size
 * @return {string}
 */
export function pxToRem(size: number): string {
  /**
   * Esse coeficiente é necessário devido ao cálculo
   * que o MUI faz por padrão na função pxToRem.
   *
   * https://github.com/mui-org/material-ui/blob/512896973499adbbda057e7f3685d1b23cc02de9/packages/mui-material/src/styles/createTypography.js#L44
   */

  return `${size * 0.0625}rem`;
}

export const palette = {
  common: {
    black: "#000",
    white: "#FFF",
  },
  action: {
    active: "#0000008A",
    hover: "#0000000A",
    selected: "#00000014",
    disabled: "#00000042",
    disabledBackground: "#0000001F",
    focus: "#0000001F",
  },
  primary: {
    main: "#184854",
    contrastText: "#FFF",
  },
  secondary: {
    main: "#FB8F10",
  },
  divider: "#0000001F",
  success: {
    main: "#4CAF50",
  },
  error: {
    main: "#EF5350",
  },
  warning: {
    main: "#FFC647",
  },
  info: { main: grey[600] },
  grey: {
    400: grey[400],
    300: grey[300],
    200: "#FAFAFA",
    100: "#F3F4F6",
  },
} as Palette;

export const typography = {
  pxToRem,
  fontFamily: ["Work Sans", "sans-serif"].join(","),
  h1: {
    fontWeight: 700,
    fontSize: pxToRem(42),
    letterSpacing: 0,
    color: palette.primary.main,
  },
  h2: {
    fontWeight: 700,
    fontSize: pxToRem(24),
    letterSpacing: 0,
    color: palette.primary.main,
  },
  h3: {
    fontWeight: 400,
    fontSize: pxToRem(24),
    letterSpacing: pxToRem(0.15),
    lineHeight: pxToRem(32),
    color: palette.primary.main,
  },
  h4: {
    fontWeight: 400,
    fontSize: pxToRem(20),
    letterSpacing: pxToRem(0.15),
    lineHeight: pxToRem(20),
    color: palette.primary.main,
  },
  h5: {
    fontWeight: 700,
    fontSize: pxToRem(16),
    letterSpacing: pxToRem(0.15),
    lineHeight: pxToRem(20),
    color: palette.primary.main,
  },
  body1: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
    letterSpacing: pxToRem(0.15),
    color: palette.primary.main,
  },
  body2: {
    fontWeight: 300,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
    letterSpacing: pxToRem(0.17),
    color: palette.primary.main,
  },
} as TypographyOptions;

export const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
};

export const MuiTheme = createTheme(
  {
    palette,
    typography,
    components,
  },
  ptBR
);

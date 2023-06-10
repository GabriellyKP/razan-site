import "normalize.css";
import { Global, css } from "@emotion/react";
import { grey } from "@mui/material/colors";

import { palette, htmlFontSize } from "../styles/MuiTheme";

export function GlobalStyle(): JSX.Element {
  const { common, primary } = palette;

  // transforma as cores do tema em variáveis CSS
  const colors = Object.entries(common)
    .map(([property, value]) => `--${property}: ${value};`)
    .join("\n");

  const globalStyle = css`
    * {
      box-sizing: border-box;
    }

    html {
      --fontSize: ${htmlFontSize}px;
      font-size: var(--fontSize);
      font-family: Roboto, sans-serif;
      --primaryColor: ${primary.main};

      ${colors}
    }

    body {
      background-color: var(--paper);
      color: ${grey[800]};
    }

    html,
    body,
    #__next {
      display: contents;
    }

    a,
    button,
    input {
      color: inherit;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    ul,
    ol {
      margin: 0;
      padding: 0;
    }

    li {
      list-style: none;
    }
  `;

  return <Global styles={globalStyle} />;
}

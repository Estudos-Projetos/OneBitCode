import { createGlobalStyle, css } from "styled-components";
import { colors, fonts } from "./variables/theme.style";

const reset = css`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   a {
      text-decoration: none;
   }
   input[type="number"]::-webkit-inner-spin-button,
   input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }
   input[type="number"] {
      -moz-appearance: textfield;
   }
`;

export const GlobalStyle = createGlobalStyle`
*{
    ${reset}
    color: ${colors.white};
    background-color: ${colors.black};
    font-family: ${fonts.primary};

    body{
      padding: 0 1.4rem;
    }
}
`;

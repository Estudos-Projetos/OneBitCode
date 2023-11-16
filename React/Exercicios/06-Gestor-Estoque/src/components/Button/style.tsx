import styled from "styled-components";
import { colors, shadows } from "../Theme/variables/theme.style";
import { ButtonType } from "./";

interface ButtonAttributes {
   typeBtn: ButtonType;
}

const chanceTypeButton = (type: ButtonType) => {
   switch (type) {
      case "primary":
         return colors.primary;
      case "secundary":
         return colors.white;
      case "delete":
         return colors.secudary;
      default:
         return colors.black;
   }
};

export const Button = styled.button<ButtonAttributes>`
   margin-left: 0.5rem;
   padding: 0.6rem 1.2rem;
   background-color: ${(props) => chanceTypeButton(props.typeBtn)};
   color: ${(props) =>
      props.typeBtn === "secundary" ? colors.black : colors.white};

   border: none;
   box-shadow: ${shadows.main};
   cursor: pointer;

   &:hover {
      opacity: 0.85;
   }
`;

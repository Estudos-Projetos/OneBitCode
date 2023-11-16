import styled from "styled-components";
import {
   colors,
   shadows,
} from "../../../components/Theme/variables/theme.style";

export const Wrapper = styled.section`
   margin: 2rem 6rem;
   form {
      width: 80%;
      margin: 0 auto;
      label {
         display: block;
         margin-bottom: 0.5rem;
      }
      input,
      select,
      textarea {
         width: 250px;
         height: 35px;
         border: 1px solid ${colors.black};
         background-color: ${colors["black-400"]};
         padding-left: 7px;

         border-radius: 4px;
         outline: none;
         box-shadow: ${shadows.main};
      }

      #row-1 {
         width: 100%;
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
      }

      #row-2 {
         width: 100%;
         margin-top: 2rem;
         textarea {
            padding-top: 5px;
            width: 100%;
            height: 250px;
            font-size: 0.9rem;
         }
      }

      button {
         margin-top: 1.7rem;
         padding: 8px 24px;
         border: 2px solid ${colors.primary};
         cursor: pointer;
         transition: all 250ms ease-in;

         &:hover {
            color: ${colors.white};
            background-color: ${colors.primary};
         }
         &:active {
            opacity: 0.6;
         }
      }
   }
`;

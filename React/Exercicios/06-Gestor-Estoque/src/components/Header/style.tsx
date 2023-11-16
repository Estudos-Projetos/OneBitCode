import styled from "styled-components";
import { colors } from "../Theme/variables/theme.style";

export const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;

   padding: 1.8rem 0;

   h1 {
      font-size: 1.27rem;
      font-weight: 500;
      text-transform: uppercase;
   }
`;

export const Nav = styled.nav`
   a {
      margin-left: 0.2rem;
      padding: 0.3rem;
      border: none;
      text-decoration: none;
      transition: all 200ms ease-in;
      &:hover {
         color: ${colors.primary};
         border-bottom: 2px solid ${colors.primary};
      }
   }
`;

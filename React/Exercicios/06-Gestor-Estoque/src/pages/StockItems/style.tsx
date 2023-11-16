import { styled } from "styled-components";

export const Conteiner = styled.main`
   h2 {
      font-size: 2.2rem;
      font-weight: 400;
      margin-bottom: 1.6rem;
   }
`;

export const Nav = styled.div`
   padding-bottom: 1.4rem;
   border-bottom: 2px solid #939393;

   a {
      padding: 0 1.1rem;

      &:active {
         padding-bottom: 1.3rem;
         border-bottom: 2px solid #545454;
      }
   }
`;

import styled from "styled-components";
import { colors } from "../../../components/Theme/variables/theme.style";

export const THeader = styled.div`
   display: grid;
   grid-template-columns: 15% 25% 10% 15% 35%;
   grid-template-rows: 1fr;

   padding: 0.9rem 1.2rem;

   &,
   & > span {
      background-color: ${colors["black-400"]};
      font-weight: 800;
   }
`;

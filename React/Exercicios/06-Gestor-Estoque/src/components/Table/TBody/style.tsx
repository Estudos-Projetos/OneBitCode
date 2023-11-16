import styled from "styled-components";

export const TBody = styled.div`
   display: grid;
   grid-template-columns: 15% 25% 10% 15% 35%;
   grid-template-rows: 1fr;

   & > span {
      padding: 1.5rem 1.3rem;
   }
`;

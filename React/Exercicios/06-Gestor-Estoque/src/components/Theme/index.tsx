import { ReactNode } from "react";
import { Header } from "../Header";
import { GlobalStyle } from "./global.style";

type Props = {
   children: ReactNode;
};

export default function Theme({ children }: Props) {
   return (
      <>
         <GlobalStyle />
         <Header />
         {children}
      </>
   );
}

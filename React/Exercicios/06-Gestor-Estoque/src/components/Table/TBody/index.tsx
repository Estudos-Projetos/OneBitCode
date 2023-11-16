import { ReactNode } from "react";
import * as SC from "./style";

type TheaderProps = {
   children: ReactNode;
};

export default function TBody({ children }: TheaderProps) {
   return (
      <>
         <SC.TBody>{children}</SC.TBody>
      </>
   );
}

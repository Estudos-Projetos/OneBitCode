import { ReactNode } from "react";
import * as SC from "./style";

type TheaderProps = {
   children: ReactNode;
};

export default function THeader({ children }: TheaderProps) {
   return (
      <>
         <SC.THeader>{children}</SC.THeader>
      </>
   );
}

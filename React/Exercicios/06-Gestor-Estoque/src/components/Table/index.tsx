import { ReactNode } from "react";
import THeader from "./THeader";
import Tclmn from "./Tclmn";
import * as SC from "./style";

type TableProps = {
   children: ReactNode;
};

function Table({ children }: TableProps) {
   return (
      <>
         <SC.Table>{children}</SC.Table>
      </>
   );
}

export { Table, THeader, Tclmn };

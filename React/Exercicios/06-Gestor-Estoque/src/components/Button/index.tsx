import { ReactNode } from "react";
import BtnEdit from "./BtnEdit";
import BtnRemove from "./BtnRemove";
import BtnView from "./BtnView";

import * as SC from "./style";

export type ButtonType = "primary" | "secundary" | "delete";

type ButtonProps = {
   children: ReactNode;
   onClick?: () => void;
   typeButton?: ButtonType;
};

function Button({ children, onClick, typeButton }: ButtonProps) {
   return (
      <>
         <SC.Button typeBtn={typeButton || "primary"} onClick={onClick}>
            {children}
         </SC.Button>
      </>
   );
}

export { Button, BtnEdit, BtnRemove, BtnView };

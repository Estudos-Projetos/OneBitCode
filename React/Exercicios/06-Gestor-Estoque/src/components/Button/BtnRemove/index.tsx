import { ReactNode } from "react";
import { Button, ButtonType } from "..";

type BtnProps = {
   children: ReactNode;
   onClick?: () => void;
   typeButton?: ButtonType;
};
export default function BtnRemove({ children, typeButton, onClick }: BtnProps) {
   return (
      <Button typeButton={typeButton || "delete"} onClick={onClick}>
         {children}
      </Button>
   );
}

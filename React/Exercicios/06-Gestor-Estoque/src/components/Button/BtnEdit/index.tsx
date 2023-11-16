import { ReactNode } from "react";
import { Button, ButtonType } from "..";

type BtnProps = {
   children: ReactNode;
   onClick?: () => void;
   typeButton?: ButtonType;
};
export default function BtnEdit({ children, typeButton, onClick }: BtnProps) {
   return (
      <Button typeButton={typeButton || "secundary"} onClick={onClick}>
         {children}
      </Button>
   );
}

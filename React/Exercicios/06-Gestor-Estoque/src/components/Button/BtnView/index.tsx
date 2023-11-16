import { ReactNode } from "react";
import { Button, ButtonType } from "..";

type BtnProps = {
   children: ReactNode;
   onClick?: () => void;
   typeButton?: ButtonType;
};
export default function BtnView({ children, typeButton, onClick }: BtnProps) {
   return (
      <Button typeButton={typeButton || "primary"} onClick={onClick}>
         {children}
      </Button>
   );
}

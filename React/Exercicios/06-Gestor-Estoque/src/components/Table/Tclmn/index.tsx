import { ReactNode } from "react";

type CollumnProps = {
   children: ReactNode;
};

export default function Tclmn({ children }: CollumnProps) {
   return (
      <>
         <span>{children}</span>
      </>
   );
}

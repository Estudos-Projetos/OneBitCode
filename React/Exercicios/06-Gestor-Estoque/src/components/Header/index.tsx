import * as SC from "./style";

import { Link } from "react-router-dom";

export const Header = () => {
   return (
      <>
         <SC.Header>
            <h1>React Stock</h1>
            <SC.Nav>
               <Link to={"/"}>Inicio</Link>
               <Link to={"/stockItems/all"}>Items</Link>
            </SC.Nav>
         </SC.Header>
      </>
   );
};

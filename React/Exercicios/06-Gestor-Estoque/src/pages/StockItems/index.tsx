import { Link, Outlet } from "react-router-dom";

import Theme from "../../components/Theme";
import * as SC from "./style";

export default function StockItems() {
   return (
      <>
         <Theme>
            <SC.Conteiner>
               <h2>Stock Items</h2>

               <SC.Nav>
                  <Link to={"all"}>Todos os Items</Link>
                  <Link to={"new"}>Novo Item</Link>
               </SC.Nav>

               <Outlet />
            </SC.Conteiner>
         </Theme>
      </>
   );
}

import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { StockProvider } from "./contexts/stockContext";

function App() {
   return (
      <>
         <StockProvider>
            <RouterProvider router={routers} />
         </StockProvider>
      </>
   );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import StockItems from "./pages/StockItems";
import AllItems from "./pages/StockItems/AllItems";
import NewItem from "./pages/StockItems/NewItem";
import EditItems from "./pages/StockItems/EditItems";

export const routers = createBrowserRouter([
   {
      path: "/",
      element: <Dashboard />,
   },
   {
      path: "/stockItems",
      element: <StockItems />,

      children: [
         {
            path: "edit",
            element: <EditItems />,
         },

         {
            path: "all",
            element: <AllItems />,
         },
         {
            path: "new",
            element: <NewItem />,
         },
      ],
   },
]);

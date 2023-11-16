/* eslint-disable react-refresh/only-export-components */
// Context, Reducer, Provider, Hook

import {
   ReactNode,
   createContext,
   useContext,
   useReducer,
   useState,
} from "react";

type StockItem = {
   id: number;
   name: string;
   quantity: number;
   price: number;
   category: string;
   description: string;
};

type Action = {
   type: StockActions;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   playload: any;
};

type StockProviderProps = {
   children: ReactNode;
};

type ContextType = {
   item: StockItem;
   dispatch: (action: Action) => void;
   storedStock: StockItem[];
   saveItem: (item: StockItem) => void;
   removeItem: (id: number) => void;
   editItem: (id: number) => void;
};

const initialData: StockItem = {
   id: 0,
   name: "",
   quantity: 0,
   price: 0,
   category: "",
   description: "",
};

// Context
const StockContext = createContext<ContextType | undefined>(undefined);

export enum StockActions {
   setId,
   setName,
   setQuantity,
   setPrice,
   setCategory,
   setDescription,
}
// Reducer
function stockReducer(items: StockItem, action: Action) {
   switch (action.type) {
      case StockActions.setName:
         return { ...items, name: action.playload };
      case StockActions.setQuantity:
         return { ...items, quantity: action.playload };
      case StockActions.setCategory:
         return { ...items, category: action.playload };
      case StockActions.setPrice:
         return { ...items, price: action.playload };
      case StockActions.setDescription:
         return { ...items, description: action.playload };
      case StockActions.setId:
         return { ...items, id: action.playload };
      default:
         return items;
   }
}

// Stock Provider
export function StockProvider({ children }: StockProviderProps) {
   const [item, dispatch] = useReducer(stockReducer, initialData);
   const [storedStock, setStoredStock] = useState<StockItem[]>(() => {
      const storedItem = localStorage.getItem("react-stock-items");
      if (storedItem) return JSON.parse(storedItem);
      return [];
   });

   function saveItem(newItem: StockItem) {
      const id = Math.floor(Math.random() * 10000);
      dispatch({
         type: StockActions.setId,
         playload: (newItem.id = id),
      });
      setStoredStock((currentStock) => {
         const newStock = [...currentStock, newItem];
         localStorage.setItem("react-stock-items", JSON.stringify(newStock));
         return newStock;
      });
   }

   function removeItem(id: number) {
      setStoredStock((currentStock) => {
         const newStock = currentStock.filter((item) => item.id !== id);
         localStorage.setItem("react-stock-items", JSON.stringify(newStock));
         return newStock;
      });
   }

   function editItem(id: number) {}

   const value = {
      item,
      dispatch,
      storedStock,
      saveItem,
      removeItem,
      editItem,
   };

   return (
      <>
         <StockContext.Provider value={value}>{children}</StockContext.Provider>
      </>
   );
}

// Stock Hooks
export function useStockItems() {
   const context = useContext(StockContext);
   if (context === undefined) {
      throw new Error("useStockItems precisa está dentro de StockProvider");
   }
   return context;
}

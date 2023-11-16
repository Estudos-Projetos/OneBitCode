import { FormEvent } from "react";

import * as SC from "./style.tsx";
import {
   StockActions,
   useStockItems,
} from "../../../contexts/stockContext.tsx";

export default function NewItem() {
   const { item, dispatch, saveItem } = useStockItems();

   function handleSaveItem(e: FormEvent) {
      e.preventDefault();

      saveItem(item);
   }
   return (
      <>
         <SC.Wrapper>
            <form onSubmit={handleSaveItem}>
               <div id="row-1">
                  <div className="input-grup">
                     <label htmlFor="name">Nome</label>
                     <input
                        type="text"
                        id="name"
                        autoComplete="no"
                        value={item.name}
                        onChange={(e) =>
                           dispatch({
                              type: StockActions.setName,
                              playload: e.target.value,
                           })
                        }
                     />
                  </div>
                  <div className="input-grup">
                     <label htmlFor="quantity">Quantidade</label>
                     <input
                        type="number"
                        min={0}
                        id="quantity"
                        value={`${item.quantity}`}
                        onChange={(e) =>
                           dispatch({
                              type: StockActions.setQuantity,
                              playload: +e.target.value,
                           })
                        }
                     />
                  </div>
                  <div className="input-grup">
                     <label htmlFor="price">Preço</label>
                     <input
                        type="number"
                        min={0}
                        step={"0.01"}
                        id="price"
                        value={`${item.price}`}
                        onChange={(e) =>
                           dispatch({
                              type: StockActions.setPrice,
                              playload: +e.target.value,
                           })
                        }
                     />
                  </div>
                  <div className="input-grup">
                     <label htmlFor="category">Categoria</label>
                     <select
                        value={item.category || "default"}
                        onChange={(e) =>
                           dispatch({
                              type: StockActions.setCategory,
                              playload: e.target.value,
                           })
                        }>
                        <option value="default" disabled>
                           Escolha...
                        </option>
                        <option value="food">Alimentos</option>
                        <option value="cleaning">Limpeza</option>
                        <option value="cold-cuts">Frios</option>
                     </select>
                  </div>
               </div>
               <div id="row-2">
                  <label htmlFor="description">Descrição</label>
                  <textarea
                     id="description"
                     value={item.description}
                     onChange={(e) =>
                        dispatch({
                           type: StockActions.setDescription,
                           playload: e.target.value,
                        })
                     }></textarea>
               </div>
               <button>Salvar</button>
            </form>
         </SC.Wrapper>
      </>
   );
}

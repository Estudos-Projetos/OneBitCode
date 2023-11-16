import { useNavigate } from "react-router-dom";
import { BtnEdit, BtnRemove, BtnView } from "../../../components/Button";
import { THeader, Table, Tclmn } from "../../../components/Table";
import TBody from "../../../components/Table/TBody";
import { useStockItems } from "../../../contexts/stockContext";

export default function AllItems() {
   const { storedStock, removeItem } = useStockItems();
   const navigate = useNavigate();

   function handleEdit() {
      navigate("/stockItems/edit");
   }

   return (
      <>
         <Table>
            <THeader>
               <Tclmn>Id</Tclmn>
               <Tclmn>Nome</Tclmn>
               <Tclmn>Em Estoque</Tclmn>
               <Tclmn>Categoria</Tclmn>
               <Tclmn>Ações</Tclmn>
            </THeader>

            {storedStock.map((item) => (
               <TBody key={item.id}>
                  <Tclmn>{item.id}</Tclmn>
                  <Tclmn>{item.name}</Tclmn>
                  <Tclmn>{item.quantity} und.</Tclmn>
                  <Tclmn>{item.category}</Tclmn>
                  <Tclmn>
                     <BtnView>Ver</BtnView>
                     <BtnEdit onClick={handleEdit}>Editar</BtnEdit>
                     <BtnRemove onClick={() => removeItem(item.id)}>
                        Excluir
                     </BtnRemove>
                  </Tclmn>
               </TBody>
            ))}
         </Table>
      </>
   );
}

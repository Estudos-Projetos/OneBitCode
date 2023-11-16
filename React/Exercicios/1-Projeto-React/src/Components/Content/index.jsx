import { LineBreak } from "../LineBreak";

export default function Content() {
   return (
      <div id="container">
         <div className="card-container">
            <h2>Criando Interface de Usuário com Componentes</h2>
            <p>
               React permite que você construa interfaces de usuario apartir de pedaços individuais chamados
               componentes
            </p>
         </div>
         <LineBreak></LineBreak>
         <div className="card-container">
            <h2>Escreva componentes como código e marcação</h2>
            <p>
               Componentes React são funções JavaScript. A sintaxe de marcação é chamada de JSX. É uma
               extensão da sintaxe JavaScript popularizada pelo React
            </p>
         </div>
         <LineBreak></LineBreak>
      </div>
   );
}

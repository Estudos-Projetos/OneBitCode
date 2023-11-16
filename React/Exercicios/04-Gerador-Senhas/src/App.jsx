import { useState } from "react";

function App() {
   const [password, setPassword] = useState("");
   const [textCopy, setTextCopy] = useState("Copiar");
   function gnr8Password() {
      const min = "abcdefghijklmnopqrstuvwxyz";
      const max = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const num = "0123456789";
      const sybs = "!@#$%^&*()_+-=[]{};:,./<>?";

      const all = min + max + num + sybs;
      const password = Array.from({ length: 10 }, () => all[Math.floor(Math.random() * all.length)]).join("");

      setPassword(password);
      setTextCopy("Copiar");
   }

   function copyToClipboard() {
      window.navigator.clipboard.writeText(password);
      setTextCopy("Copiado!");
   }

   return (
      <>
         <h1>Gerador de Senhas</h1>
         <div className="btn-grup">
            <button onClick={gnr8Password}>Gerar!</button>
            <button onClick={copyToClipboard}>{textCopy}</button>
            <div>{password}</div>
         </div>
      </>
   );
}

export default App;

import { useState } from "react";
import "./style.scss";

function App() {
   const [comments, setComments] = useState([]);
   const [emailUser, setEmailUser] = useState("");
   const [commentUser, setCommentUser] = useState("");

   function addComment({ email, comment }) {
      const id = comments.length + 1;
      const currentDate = new Date().toLocaleString();
      const newComment = { id, email, currentDate, comment };
      setComments((state) => [newComment, ...state]);
   }
   const saveComment = (ev) => {
      ev.preventDefault();
      addComment({ email: emailUser, comment: commentUser });
      setCommentUser("");
      setEmailUser("");
   };

   return (
      <div className="app">
         <h2 className="form-title">Seção de Comentários</h2>
         <form id="form-area" onSubmit={saveComment}>
            <label htmlFor="email">Email</label>
            <input
               type="email"
               id="email"
               value={emailUser}
               onChange={(ev) => setEmailUser(ev.target.value)}
            />
            <label htmlFor="comment">Comentário</label>
            <textarea
               id="comment-area"
               cols="30"
               rows="10"
               value={commentUser}
               onChange={(ev) => setCommentUser(ev.target.value)}></textarea>
            <button type="submit">Enviar Comentário</button>
         </form>
         <div className="feed-comments">
            {comments.map((cment) => (
               <div className="comment-wrapper" key={cment.id}>
                  <h4 className="email-user">{cment.email}</h4>
                  <p className="date">{cment.currentDate}</p>
                  <p className="comment">{cment.comment}</p>
               </div>
            ))}
         </div>
      </div>
   );
}

export default App;

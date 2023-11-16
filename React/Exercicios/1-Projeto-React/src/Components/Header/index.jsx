import reactLogo from "/react.png";
import style from "../styles/Scss/header/index.module.scss";

const Header = () => (
   <header className={style.header}>
      <div className="logo-container">
         <img src={reactLogo} alt="Logo do React" className="logo" />

         <h1 className="title">React</h1>
      </div>
      <nav id="nav-bar">
         <button>Aprenda React</button>
         <button>Referência da API</button>
      </nav>
   </header>
);

export { Header };

import "../Styles/scss/card.scss";

export const Card = () => {
   return (
      <main className="card">
         <div className="img-card">
            <img src="/public/capa-StarWars.jpg" alt="Poster do filme Star Wars" className="poster" />
         </div>
         <div className="content-card">
            <h2 className="title">Star Wars (1977)</h2>
            <p className="body">
               Você quer ter um pôster de Star Wars na sua parede? Então aproveite essa oferta incrível e leve
               para casa um pôster emoldurado em MDF e tamanho A3 do filme que iniciou a saga mais famosa do
               cinema. O pôster de Star Wars (1977) é uma peça única, impressa em alta qualidade e com um
               design impressionante. Você vai se sentir dentro da galáxia muito, muito distante com esse
               pôster na sua decoração. Compre já o seu pôster e faça parte da história!
            </p>
            <button className="cta-btn">Comprar Agora</button>
         </div>
      </main>
   );
};

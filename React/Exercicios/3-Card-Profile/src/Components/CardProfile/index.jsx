import Button from "../Button";
import InfoProfile from "../InfoProfile";
import PhotoProfile from "../PhotoProfile";
import "./style.scss";

// eslint-disable-next-line react/prop-types
export default function CardProfile({ urlImg, nameProfile }) {
   return (
      <div className="card">
         <PhotoProfile imgProfile={urlImg} name={nameProfile} />
         <InfoProfile
            nameProfile={"MOLINA MARIA CARMEN"}
            stack={"Entrenador deportivo"}
            phone={"+34 (992) 532-66-40"}
            email={"Keavaomk@meragor.com"}
         />
         <Button text={"Twitter"} />
         <Button text={"Linkdin"} />
         <Button text={"Instagram"} />
      </div>
   );
}

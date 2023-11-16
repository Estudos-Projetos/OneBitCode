import "./style.scss";
// eslint-disable-next-line react/prop-types
export default function PhotoProfile({ imgProfile, name }) {
   const photoAlt = `Uma foto de ${name}`;
   return <img src={imgProfile} alt={photoAlt} className="img-profile" />;
}

import "./style.scss";
// eslint-disable-next-line react/prop-types
export default function InfoProfile({ nameProfile, stack, phone, email }) {
   return (
      <div className="infos-profile">
         <h2 className="name-profile">{nameProfile}</h2>
         <div className="infos">
            <p className="stacks">{stack}</p>
            <p className="number-phone">{phone}</p>
            <p className="email">{email}</p>
         </div>
      </div>
   );
}

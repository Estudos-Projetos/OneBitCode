function sendSpaceShip(name: string, captain: string) {
   const spaceShip = {
      name,
      captain,
      speed: 20,
      inMisson: true,
      crew: [],
   };

   alert(`Nave ${spaceShip.name} lançada\nCapitão ${spaceShip.captain}`);

   return spaceShip;
}

function accelerate(speed: number, spaceShip: { name: string; speed: number }) {
   if (spaceShip.speed > speed) {
      alert(`Reduzindo velocidade da nave ${spaceShip.name} em ${speed}km/h`);
      spaceShip.speed -= speed;
   } else if (spaceShip.speed < speed) {
      alert(`Aumentado velocidade da nave ${spaceShip.name} em ${speed}km/h`);
      spaceShip.speed += speed;
   } else {
      alert(`Mantendo a velocidade...`);
   }
}
const spaceShipName = prompt("Qual o nome da nave a ser enviada?");
const captainName = prompt("Qual o nome do capitão da nave?");

const spaceShip = sendSpaceShip(spaceShipName, captainName);

const newSpeed = Number(prompt(`Alterar velocinade da nave em (km/s): `));
accelerate(newSpeed, spaceShip);

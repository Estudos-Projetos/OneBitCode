function sendSpaceShip(name, captain) {
    var spaceShip = {
        name: name,
        captain: captain,
        speed: 20,
        inMisson: true,
        crew: [],
    };
    alert("Nave ".concat(spaceShip.name, " lan\u00E7ada\nCapit\u00E3o ").concat(spaceShip.captain));
    return spaceShip;
}
function accelerate(speed, spaceShip) {
    if (spaceShip.speed > speed) {
        alert("Reduzindo velocidade da nave ".concat(spaceShip.name, " em ").concat(speed, "km/h"));
        spaceShip.speed -= speed;
    }
    else if (spaceShip.speed < speed) {
        alert("Aumentado velocidade da nave ".concat(spaceShip.name, " em ").concat(speed, "km/h"));
        spaceShip.speed += speed;
    }
    else {
        alert("Mantendo a velocidade...");
    }
}
var spaceShipName = prompt("Qual o nome da nave a ser enviada?");
var captainName = prompt("Qual o nome do capitão da nave?");
var spaceShip = sendSpaceShip(spaceShipName, captainName);
var newSpeed = Number(prompt("Alterar velocinade da nave em (km/s): "));
accelerate(newSpeed, spaceShip);

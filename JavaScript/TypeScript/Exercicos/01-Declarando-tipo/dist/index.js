let spaceShips = [
    {
        name: "Enterprise",
        pilotName: "James Kirk",
        crewLimit: 2,
        crew: [],
        inMission: false,
    },
    {
        name: "Millennium Falcon",
        pilotName: "Han Solo",
        crewLimit: 4,
        crew: [],
        inMission: false,
    },
    {
        name: "Serenity",
        pilotName: "Malcolm Reynolds",
        crewLimit: 9,
        crew: [],
        inMission: false,
    },
    {
        name: "Nostromo",
        pilotName: "Dallas",
        crewLimit: 7,
        crew: [],
        inMission: false,
    },
];
function addSpaceShip(name, pilotName, crewLimit) {
    const spaceShip = {
        name,
        pilotName,
        crewLimit,
        crew: [],
        inMission: false,
    };
    spaceShips.push(spaceShip);
    return spaceShip;
}
function findSpaceShip(spaceShipName) {
    return spaceShips.filter((s) => s.name === spaceShipName)[0];
}
function addCrew(crewName, spaceShip) {
    if (spaceShip.crew.length < spaceShip.crewLimit) {
        spaceShip.crew.push(crewName);
        alert(`Novo Tripulante da Nave ${spaceShip.name}\n\t${crewName}`);
    }
    else {
        alert("Limite de Tripulantes Exercido!");
    }
}
function sendSpaceShipInMission(spaceShip) {
    if (spaceShip.inMission === true) {
        alert(`A nave ${spaceShip.name} já esta em missão!`);
    }
    else if (spaceShip.crew.length > Math.floor(spaceShip.crew.length / 3)) {
        spaceShip.inMission = true;
        alert(`Status da Nave ${spaceShip.name} alterado para: Em Missão`);
    }
    else {
        alert(`Tripulantes insuficiente!\nA nave ${spaceShip.name} Não pode ser enviada em missão por falta de tripulantes!`);
    }
}
function listSpaceShips() {
    let listSpaceShips;
    spaceShips.forEach((spaceShip) => {
        listSpaceShips += `\n
        Nome da Nave: ${spaceShip.name}
        Piloto: ${spaceShip.pilotName}
        Tripulantes: ${spaceShip.crew}
        Limite de Tripulantes: ${spaceShip.crewLimit}
        Em Missão: ${spaceShip.inMission}
        `;
    });
    alert(listSpaceShips);
}
let optionUser;
let spaceShipName;
let spaceShip;
do {
    optionUser = Number(prompt(`
    [1] - Adicionar Nova Nave
    [2] - Adiconar Tripulante a uma Nave
    [3] - Enviar Nave em Missão
    [4] - Listar Naves
    [5] - Sair
    `));
    switch (optionUser) {
        case 1:
            const name = prompt("Nome da nave:");
            const pilotName = prompt("Nome do piloto:");
            const crewLimit = Number(prompt("Limite de tripulantes: "));
            addSpaceShip(name, pilotName, crewLimit);
            break;
        case 2:
            spaceShipName = prompt("Nome da nave que o tribulante está sendo recrutado");
            const crewName = prompt("Nome do Tripulante:");
            spaceShip = findSpaceShip(spaceShipName);
            addCrew(crewName, spaceShip);
            break;
        case 3:
            spaceShipName = prompt("Nome da nave");
            spaceShip = findSpaceShip(spaceShipName);
            sendSpaceShipInMission(spaceShip);
            break;
        case 4:
            listSpaceShips();
            break;
        case 5:
            break;
        default:
            alert("Opção Invalida!");
    }
} while (optionUser !== 5);

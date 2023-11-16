const planets = [
    {
        name: "Mercury",
        coordinates: [0, 0, 0, 0],
        situation: "Inabitável",
        satellites: [],
    },
    {
        name: "Venus",
        coordinates: [1, 1, 1, 1],
        situation: "Inabitável",
        satellites: [],
    },
    {
        name: "Earth",
        coordinates: [2, 2, 2, 2],
        situation: "Habitado",
        satellites: ["Moon"],
    },
    {
        name: "Mars",
        coordinates: [3, 3, 3, 3],
        situation: "Habitável",
        satellites: ["Phobos", "Deimos"],
    },
];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: [],
    });
    alert(`Planeta ${name}\nCoordenadas: ${coordinates}\nSituação: ${situation}\nRegistrado com sucesso!`);
}
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`Satélite ${name} registrado ao Planeta ${planet.name}`);
}
function rmvSatellite(name, planet) {
    const indexSatellite = planet.satellites.indexOf(name);
    if (indexSatellite !== -1) {
        planet.coordinates.splice(indexSatellite, 1);
        alert(`Satélite ${name} removido do Planeta ${planet.name}`);
    }
    else {
        alert(`Satélite ${name} não Removido! Pois não está registrado ao Planeta ${planet.name}`);
    }
}
function findPlanetForName(name) {
    var _a;
    return (_a = planets.filter((p) => p.name === name)[0]) !== null && _a !== void 0 ? _a : false;
}
function extractCoordinates(coordinates) {
    const matches = coordinates.match(/\d+/g);
    if (matches) {
        const [x, y, k, z] = matches.map(Number);
        return { x, y, k, z };
    }
    else {
        alert("Coordenadas Invalidas!");
        return null;
    }
}
function promptValidadeSituation(planetName) {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const option = prompt(`Situação do planeta ${planetName}:\n "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";`);
        switch (option) {
            case "Habitado":
                situation = "Habitado";
                validSituation = true;
                break;
            case "Habitável":
                situation = "Habitável";
                validSituation = true;
                break;
            case "Inabitável":
                situation = "Inabitável";
                validSituation = true;
                break;
            case "Inexplorado":
                situation = "Inexplorado";
                validSituation = true;
                break;
            default:
                alert("Situação Invalida! Tente novamente. . .");
        }
    }
    alert(`Situação do Planeta ${planetName} =>  ${situation}`);
    return situation;
}
function promptValidadePlanet(callback) {
    const namePlanet = prompt("Nome do Planeta: ");
    const planet = findPlanetForName(namePlanet);
    if (planet) {
        callback(planet);
    }
    else {
        alert(`Planeta ${namePlanet} não encontrado na base de dados!\nVoltando ao menu. . .`);
    }
}
function showAddPlanetMenu() {
    const name = prompt("Nome do Planeta:");
    const coordinates = extractCoordinates(prompt("Coordenadas separadas por virgula!\n Ex: xxxx, xxxx, xxxx, xxxx"));
    const situation = promptValidadeSituation(name);
    const [x, y, k, z] = [coordinates.x, coordinates.y, coordinates.k, coordinates.z];
    addPlanet(name, [x, y, k, z], situation);
}
function showUpdateSituationMenu() {
    promptValidadePlanet((planet) => {
        const newSituation = promptValidadeSituation(planet.name);
        planet.situation = newSituation;
    });
}
function showAddSatelliteMenu() {
    promptValidadePlanet((planet) => {
        const satelliteName = prompt("Nome do Satelite a ser Registrado");
        addSatellite(satelliteName, planet);
    });
}
function showRmvSattelliteMenu() {
    promptValidadePlanet((planet) => {
        const satelliteName = prompt("Nome do Satelite a ser Registrado");
        rmvSatellite(satelliteName, planet);
    });
}
function showListPlanets() {
    let list = `Lista de Planets`;
    planets.forEach((planet) => {
        list += `
    
         Nome do Planeta: ${planet.name}
         Coordenadas: ${planet.coordinates}
         N° Satelites: ${planet.satellites.length}
         Satelites:
      `;
        planet.satellites.forEach((satellite) => {
            list += `\t\t   - ${satellite}\n`;
        });
    });
    alert(list);
}
let optionUser;
do {
    optionUser = Number(prompt(`
        [1] - Registrar Planeta
        [2] - Atualizar Situação de um Planeta
        [3] - Registrar Satelite em um Planeta
        [4] - Remover Satelite
        [5] - Listar Planetas
        [6] - Sair
        `));
    switch (optionUser) {
        case 1:
            showAddPlanetMenu();
            break;
        case 2:
            showUpdateSituationMenu();
            break;
        case 3:
            showAddSatelliteMenu();
            break;
        case 4:
            showRmvSattelliteMenu();
            break;
        case 5:
            showListPlanets();
            break;
        case 6:
            alert("Saindo. . .");
            break;
        default:
            alert("Opção Invalida! Tente novamente. . .");
    }
} while (optionUser !== 6);

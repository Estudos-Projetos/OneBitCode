let player1;
let player2;
const btnJogar = document.querySelector("#submit");

btnJogar.addEventListener("click", () => {
  player1 = document.querySelector("input#player1").value;
  player2 = document.querySelector("input#player2").value;

  document.querySelector("h2#player1").innerText = player1;
  document.querySelector("h2#player2").innerText = player2;

  document.querySelector("section#cadastrar").classList.add("hidden");
});

const btnAreas = document.querySelectorAll(".btn-area");
const btnrestart = document.querySelector("#btn-restart");
let areaMarcada = Array(9).fill(null);

function criar_circulo() {
  const circle = document.createElement("i");
  circle.classList = "icon-circle";
  return circle;
}
function criar_x() {
  const x = document.createElement("i");
  x.classList = "icon-x";
  return x;
}

function area_marcada(_btnMarcado) {
  const index = parseInt(_btnMarcado.dataset.index);
  return areaMarcada[index] !== null;
}

function resetar_area_marcada(_btnMarcado) {
  const index = parseInt(_btnMarcado.dataset.index);
  return (areaMarcada[index] = null);
}
const combinacoesVencedoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function verificar_vencedor() {
  for (let combinacao of combinacoesVencedoras) {
    const [a, b, c] = combinacao;
    if (
      areaMarcada[a] !== null &&
      areaMarcada[a] === areaMarcada[b] &&
      areaMarcada[b] === areaMarcada[c]
    ) {
      return `${areaMarcada[a]} Ganhou!`;
    }
  }

  if (!areaMarcada.includes(null)) {
    return "Empate";
  }

  return null;
}

btnAreas.forEach((button) => {
  button.addEventListener("click", () => {
    const existeElemento = button.querySelector("i");
    if (area_marcada(button)) {
      return;
    }
    if (existeElemento === null) {
      const player = document.querySelectorAll(".turn");
      player.forEach((el) => {
        if (el.classList.contains("show") && el.id.includes("player-x")) {
          button.appendChild(criar_x());
          areaMarcada[parseInt(button.dataset.index)] = player1;
        }
        if (el.classList.contains("show") && el.id.includes("player-circle")) {
          button.appendChild(criar_circulo());
          areaMarcada[parseInt(button.dataset.index)] = player2;
        }
        el.classList.toggle("show");

        const vencedor = verificar_vencedor();
        if (vencedor !== null) {
          document.getElementById("resultado").innerText = `>> ${vencedor} <<`;

          for (let combinacao of combinacoesVencedoras) {
            const [a, b, c] = combinacao;
            if (
              areaMarcada[a] !== null &&
              areaMarcada[a] === areaMarcada[b] &&
              areaMarcada[b] === areaMarcada[c]
            ) {
              btnAreas[a].classList.add("winner");
              btnAreas[b].classList.add("winner");
              btnAreas[c].classList.add("winner");
            }
          }
        }
      });
    }
  });
});

btnrestart.addEventListener("click", () => {
  btnAreas.forEach((button) => {
    const existeElemento = button.querySelector("i");
    if (existeElemento !== null) {
      button.removeChild(existeElemento);
    }
    if (resetar_area_marcada(button)) {
      return;
    }
    const player = document.querySelectorAll(".turn");
    if (player[1].classList.contains("show")) {
      player[0].classList.add("show");
      player[1].classList.remove("show");
    }
    button.classList.remove("winner");
  });
});

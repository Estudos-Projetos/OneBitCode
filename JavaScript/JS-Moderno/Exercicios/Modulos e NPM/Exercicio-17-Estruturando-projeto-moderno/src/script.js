import "./styles/style.css";

const media_simples = (..._numbers) => {
  const allSum = _numbers.reduce((asnum, num) => asnum + num, 0);
  return allSum / _numbers.length;
};

const media_ponderada = (..._date) => {
  let multNumWeight = _date.reduce(
    (accum, { number, weight }) => accum + number * weight,
    0
  );

  let sumWeights = _date.reduce((accum, date) => accum + date.weight, 0);

  return multNumWeight / sumWeights;
};

const mediana = (..._numbers) => {
  let result = 0;
  const orderedNumbers = [..._numbers].sort();

  if (orderedNumbers.length % 2 === 0) {
    orderedNumbers.filter((num, index) => {
      if (orderedNumbers.length / 2 - 1 === index) {
        result = (orderedNumbers[index] + orderedNumbers[index + 1]) / 2;
      }
    });
  } else {
    orderedNumbers.filter((num, index) => {
      if (Math.ceil(orderedNumbers.length / 2 - 1) === index) {
        result = num;
      }
    });
  }
  return result;
};

const moda = (..._numbers) => {
  let frequency = {};

  for (let num in _numbers) {
    if (frequency[_numbers[num]] !== undefined) {
      frequency[_numbers[num]] += 1;
    } else {
      frequency[_numbers[num]] = 1;
    }
  }

  let moda;
  let maxFrequency = 0;

  for (let num in frequency) {
    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
      moda = num;
    }
  }
  return moda;
};

let option;
do {
  option = parseInt(
    prompt(`
    CALCULADORA DADOS ESTATISTICO

    [1] - Média Aritmética Simples
    [2] - Média Aritmética Ponderada
    [3] - Mediana 
    [4] - Moda
    [5] - Sair
    `)
  );
  let meanOption;

  switch (option) {
    case 1:
      do {
        let allNumbers = [];

        meanOption = prompt(
          `Digite os valores para calcular a média\n[S] - Sair`
        );
        if (meanOption !== "S" && meanOption !== "s") {
          for (let char of meanOption) {
            if (char !== " ") {
              allNumbers.push(parseInt(char));
            }
          }

          alert(
            `A média Aritmética dos números é: ${media_simples(...allNumbers)}`
          );
        }
      } while (meanOption !== "S" && meanOption !== "s");

      break;
    case 2:
      let allNumbers = [];

      do {
        let numWeight = {};
        meanOption = prompt(
          `Digite os valores para calcular a média ponderada\n\nInforme os dados da sequinte forma:\n\n num, peso\n\nO número separado por ','(virgula) do peso\n\n[S] - Sair`
        );

        if (meanOption !== "S" && meanOption !== "s") {
          let data = [];

          for (let char of meanOption) {
            if (char !== " " && char !== ",") {
              data.push(parseInt(char));
            }
          }

          numWeight.num = data[0];
          numWeight.peso = data[1];
          allNumbers.push(numWeight);
        }
      } while (meanOption !== "S" && meanOption !== "s");
      alert(`A média ponderada dos dados é: ${media_ponderada(...allNumbers)}`);
      break;

    case 3:
      do {
        let allNumbers = [];

        meanOption = prompt(
          `Digite os valores para calcular a mediana\n[S] - Sair`
        );
        if (meanOption !== "S" && meanOption !== "s") {
          for (let char of meanOption) {
            if (char !== " ") {
              allNumbers.push(parseInt(char));
            }
          }

          alert(`A Mediana dos números é: ${mediana(...allNumbers)}`);
        }
      } while (meanOption !== "S" && meanOption !== "s");
      break;

    case 4:
      do {
        let allNumbers = [];

        meanOption = prompt(
          `Digite os valores para calcular a moda\n[S] - Sair`
        );

        if (meanOption !== "S" && meanOption !== "s") {
          for (let char of meanOption) {
            if (char !== " ") {
              allNumbers.push(parseInt(char));
            }
          }

          alert(`A Moda dos números é: ${moda(...allNumbers)}`);
        }
      } while (meanOption !== "S" && meanOption !== "s");
      break;

    case 1:
      break;
  }
} while (option !== 5);

const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");

dayjs.extend(customParseFormat);

function calcule_age(_dateOfBirth) {
  const curentDate = dayjs();
  const dateOfNasc = dayjs(_dateOfBirth, "DD-MM-YYYY");

  const currentAge = curentDate.diff(dateOfNasc, "years");
  const nextBirthday = dateOfNasc.add(currentAge + 1, "years");
  const daysUntilBirthday = nextBirthday.diff(curentDate, "days");

  console.log(`Sua idade atual: ${currentAge} anos`);
  console.log(
    `Data do próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`
  );
  console.log(`Faltam ${daysUntilBirthday + 1} dia(s) para seu aniversário!`);
}

const inputUser = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// calcule_age("27-04-2004");
inputUser.question(
  `Diga sua data de nascimento (DD/MM/AAAA): `,
  (dateOfBirth) => {
    calcule_age(dateOfBirth);

    inputUser.close();
  }
);

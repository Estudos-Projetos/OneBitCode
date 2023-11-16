async function calculeIMC(weight, height) {
   if (typeof weight !== "number" || typeof height !== "number") {
      return Promise.reject("Os argumentos devem ser números!");
   }
   const imc = weight / (height * height);
   return imc.toFixed(2);
}

async function executeCalculeIMC(weight, height) {
   try {
      const resultIMC = await calculeIMC(weight, height);

      const tableIMC = {
         "Abaixo do Peso": [0, 18.5],
         "Peso Normal": [18.5, 25],
         "Sobrepeso ": [25, 29.9],
         "Obsidade ": [30, 39.9],
         "Obsidade Grave": [40, Infinity],
      };

      for (let status in tableIMC) {
         if (resultIMC >= tableIMC[status][0] && resultIMC <= tableIMC[status][1])
            console.log(`Status: ${status}\nIMC: ${resultIMC}`);
      }
   } catch (error) {
      console.log(`ERROR! ${error}`);
   }
}

executeCalculeIMC(70, 1.7);

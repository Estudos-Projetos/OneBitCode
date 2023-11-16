function calculeIMC(peso, altura) {
   const imc = peso / (altura * altura);
   return new Promise((resolve, reject) => {
      if (typeof peso === "number" && typeof altura === "number") resolve(imc.toFixed(2));
      else reject("Os argumento devem ser números");
   });
}

function executeCalculeIMC(peso, altura) {
   calculeIMC(peso, altura)
      .then((resultIMC) => {
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
      })
      .catch((error) => {
         console.log(`ERROR! ${error}`);
      });
}

executeCalculeIMC(70, 1.58);

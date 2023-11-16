const process = require("process");

process.stdin.on("data", (resposta) => {
   process.stdout.write(`Texto do Usuario: ${resposta}`);
   process.exit();

})

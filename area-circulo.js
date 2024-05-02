

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Informe o valor do raio em centímetros: ', (resposta) => {
  const raio = parseFloat(resposta);
  const PI = 3.14159;
  const areaDoCirculo = PI * (raio * raio);




  console.log('Área do Círculo = ', areaDoCirculo, "cm²");


  rl.close();
});


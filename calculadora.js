function calc(var1, var2, operador) {
    let resultado;
    switch (operador) {
        case '+':
            resultado = parseInt(var1) + parseInt(var2);
            break;
        case '-':
            resultado = parseInt(var1) - parseInt(var2);
            break;
        case '*':
            resultado = parseInt(var1) * parseInt(var2);
            break;
        case '/':
            resultado = parseInt(var1) / parseInt(var2);
            break;
        default:
            resultado = "Operador inválido";
    }
  
 
    return {
        var1,
        var2,
        operador,
        resultado
    };
  }
  
 
  const resultadoObj = calc(8, 2, "/");
  

  const variavel1 = resultadoObj.var1;
  const variavel2 = resultadoObj.var2;
  const operador1 = resultadoObj.operador;
  const resultadoFinal = resultadoObj.resultado;
  
  
  console.log('Resultado de ' + variavel1 + " " + operador1 + " "+ variavel2 + " = " + resultadoFinal);
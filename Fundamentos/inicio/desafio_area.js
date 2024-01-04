// CALCULAR AREA DE CIRCUNFERENCIA
// Pi * raio²

const PI = 3.14159265;
const raio = 10;
let areaCirc = PI * raio * raio;

console.log("O valor da área é:" + areaCirc + "m2") 
// O valor da área é:314.159265m2 // 
// OkOKOK //

/* // CORREÇÃO // 
 *  Math.PI = VALOR DE PI FORNeCIDO PELO JAVASCRIPT
 *  TRANSFORMOU areaCirc EM VARIAVEL DA Math.PI 
 * 
 *  ASSIM FICOU O RESULTADO
 * 
 *  const PI = 3.14159265;
 *  const raio = 10;
 *  areaCirc = Math.PI * raio * raio;
 *  console.log("O valor da área é:" + areaCirc + "m2") 
 *  O valor da área é:314.1592653589793m2
 */
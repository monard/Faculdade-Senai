/*1.	Durante uma análise de expressões lógicas e aritméticas foi lhe repassado a seguinte expressão a * b > 20 && c % 2
== 0 || (a + b) < 10. (1 ponto)
Qual o resultado da expressão lógica e aritmética da avaliação da expressão para os valores a=3, b=5, c=2 ?
*/

let a = 3,b = 5,c = 2
let resultado

resultado = a * b > 20 && c % 2 == 0 || (a + b) < 10

console.log(resultado)
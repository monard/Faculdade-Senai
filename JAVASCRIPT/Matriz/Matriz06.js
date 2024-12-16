/*6 – Escreva um algoritmo para armazenar valores inteiros em uma matriz (5,5).
 A seguir, calcular a média dos valores pares contidos na matriz e escrever seu conteúdo.
*/

let matriz = [];
let valorPar=0;
let somavaloresPares=0
    for (let i = 0; i < 2; i++) {
        matriz[i] = [];
        for (let j = 0; j < 2; j++) {
            matriz[i][j] = parseInt(Math.random()*10);
        }
    }
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
             if (matriz[i][j] % 2 == 0){
                valorPar+=matriz[i][j]
                somavaloresPares++ 
             } 
        }
        
    }  
    let media = valorPar/somavaloresPares

console.table(matriz)           
console.log('A soma dos valores pares são:' +valorPar);
console.log('A media dos valores pares são:' +media);


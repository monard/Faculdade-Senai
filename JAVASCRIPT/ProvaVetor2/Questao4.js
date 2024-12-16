/*4. Crie um programa que leia 15 números inteiros e construa um novo array 
onde cada elemento seja o dobro do número correspondente no array original.
*/

let numero = []
let vetor1 = 0
for (let i=0;i<5;i++){
   let vetor1 = Number(prompt('Digite 15 Números: '));
       numero.push(vetor1);
}
let vetor2 =[]
for (let i=0;i<5;i++){
    vetor2.push(numero [i] * 2)
}
console.log(vetor1)
console.log(vetor2)

/*	Escreva um programa que leia um número N e crie um array de tamanho N com números aleatórios entre 1 e 100.
 Em seguida, calcule e imprima a média dos números ímpares e a soma dos números pares.*/

let tamanhoArray=0;
let somaPares = 0;
let somaImpares = 0;
let Impares = 0;
let numeros = [];


tamanhoArray = Number(prompt("Digite o tamanho do array (N):"))
for (let i = 0; i < tamanhoArray; i++) {
    let numero = Math.floor(Math.random() * tamanhoArray) + 1;  
    numeros.push(numero);
}   

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        somaPares += numeros[i]; 
    } else {
        somaImpares += numeros[i]; 
        Impares++; 
    }
}
let mediaImpares = somaImpares / Impares

console.log("Array gerado:", numeros);
console.log("Soma dos números pares:", somaPares);
console.log("Média dos números ímpares:", mediaImpares); 

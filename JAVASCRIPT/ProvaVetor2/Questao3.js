/*
3.	Faça um programa que leia um array de 7 números e, em seguida, imprima todos os números que são maiores que 10.
*/

let numero =[]
let resultado

for (let i=0;i<7;i++){
   resultado = Number(prompt("Digite 7 numeros: "))
        numero.push(resultado)  
}

for (let i=0;i<numero.length;i++){
    if (numero[i]>10){
        console.log('Valore maiores que 10 são : ', numero[i])
    }
}
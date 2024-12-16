/*6 – Escreva um algoritmo para armazenar valores inteiros em uma matriz (5,5). 
A seguir, calcular a média dos valores pares contidos na matriz e escrever seu conteúdo. */

let matriz = []
soma=0,somaP=0

for (let i=0; i<2; i++){
    matriz[i]=[]
    for (let j=0; j<2; j++){
        matriz[i][j]=parseInt(Math.random()*10)
    }
}
for (let i=0; i<2; i++){
    for (let j=0; j<2; j++){
        if (matriz[i][j] % 2 == 0){
            soma += matriz[i][j]  
            somaP++      
        }
    }
}
let media = soma/somaP
console.table(matriz)
console.log('A soma dos valores pares é:',soma)
console.log("A media dos valores Pares é : " ,media)

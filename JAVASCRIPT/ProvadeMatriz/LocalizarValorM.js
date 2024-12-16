/*4-Escreva um programa que leia uma matriz 6 x 6 de inteiros. 
Leia também um valor inteiro x.
O programa deverá fazer uma busca desse valor na matriz e,
ao final escrever sua localização (linha e coluna) ou uma mensagem de “não encontrado”.*/

let matriz = []
let valor = 0
let encontrado = false

for (let i=0;i<6;i++){
    matriz[i]=[]
    for (let j=0; j<6; j++){
        matriz[i][j]=parseInt(Math.random()*10)
    }
}
console.table(matriz)
 valor = Number(prompt('Digite um valor a ser localizado'))
for (let i=0;i<6;i++){
    for (let j=0;j<6;j++){
        if (matriz[i][j]==valor){
            console.log (`Valor encontrado na posição ${i} e  ${j}` ) 
            encontrado = true
        }
    }
}
if (encontrado!=true){
    console.log("Valor não encontrado")
}
/*9 - Ler uma matriz 5X5 e gerar outra em que cada elemento é o 
cubo do elemento respectivo na matriz original.*/

let matriz = []
let cubo=[]

for (let i=0;i<5;i++){
    matriz[i]=[]
    cubo[i]=[]
    for (let j=0;j<5;j++){
    matriz[i][j] = parseInt(Math.random()*10)
    cubo[i][j] = matriz[i][j]*matriz[i][j]*matriz[i][j]
    }
}    
console.table(matriz)
console.table(cubo)
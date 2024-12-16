/*9 - Ler uma matriz 5X5 e 
gerar outra em que cada elemento é o cubo do elemento respectivo na matriz original. */

let matriz =[]
let matriz_cubos =[]

for (let i = 0; i < 5; i++) {
    matriz[i] = []
    matriz_cubos[i]=[]
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = parseInt(Math.random()*10)
        matriz_cubos[i][j] = (matriz[i][j])*3
    }
}
console.table(matriz)
console.table(matriz_cubos)

/*11 - Crie uma matriz 7X8 onde cada elemento é a soma dos índices de sua posição dentro da matriz;*/

let matriz=[]

for (let i = 0; i < 4; i++) {
    matriz[i] = []
    for (let j = 0; j < 4; j++) {
        matriz[i][j] = i + j
    }

}
console.table(matriz)
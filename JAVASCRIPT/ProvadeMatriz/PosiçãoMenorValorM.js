/*7 - Escrever um algoritmo para ler uma matriz (7,4) 
contendo valores inteiros (supor que os valores são distintos).
 Após, encontrar o menor valor contido na matriz e sua posição.
*/

let matriz = []
let menorV=Infinity

for (let i=0;i<2;i++){
    matriz[i]=[]
    for (let j=0;j<2;j++)
        matriz[i][j]=parseInt(prompt('Digite os valores Inteiros: '))
}
for (let i=0;i<matriz.length;i++){
    for (let j=0;j<matriz.length;j++){
        if (matriz[i][j]<menorV){
            menorV = matriz[i][j]
        }
    }
}
console.table(matriz)
console.log(menorV)

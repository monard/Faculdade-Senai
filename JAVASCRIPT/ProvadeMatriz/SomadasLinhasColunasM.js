/*8 - Escreva um algoritmo que lê uma matriz M(5,5) e calcula as somas:
a) da linha 4 de M.
b) da coluna 2 de M.
c) da diagonal principal.
d) da diagonal secundária.
e) de todos os elementos da matriz.
f) Escreva estas somas e a matriz
*/

let matriz = []
let somaL4=0, somaC2=0, somaDP=0,somaDS=0,somaMatriz=0
for (let i=1;i<5;i++){
    matriz[i]=[]
    for (let j=1;j<5;j++){
        matriz[i][j]=parseInt(Math.random()*10)
    }
}
for (let i=1;i<matriz.length;i++){
    for (let j=1;j<matriz.length;j++){
        if (i==4){
            somaL4+=matriz[i][j]
        }
        if (j==2){
           somaC2 +=matriz[i][j]
        }
        if (i==j){
            somaDP +=matriz[i][j]
         }
         if (i+j == matriz.length - 1 ){
            somaDS +=matriz[i][j]
         }
         somaMatriz+=matriz[i][j]
    }

}
console.table(matriz)
console.log('Soma da 4º linha: ',somaL4)
console.log('Soma da 2º coluna: ',somaC2)
console.log('Soma da Diagonal Principal: ',somaDP)
console.log('Soma da Diagonal Secundaria: ',somaDS)
console.log('Soma de todos os elementos da matriz: ',somaMatriz)
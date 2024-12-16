/*8 - Escreva um algoritmo que lê uma matriz M(5,5) e calcula as somas:
a) da linha 4 de M.
b) da coluna 2 de M.
c) da diagonal principal.
d) da diagonal secundária.
e) de todos os elementos da matriz.
f) Escreva estas somas e a matriz.
*/
let matriz =[]
let somaLinha4 = 0, somaMatriz=0, coluna2=0, diagonalP=0, diagonalS=0
for (let i=0;i<3;i++){
    matriz[i]=[]
    for(let j=0;j<3;j++){
        matriz[i][j] = parseInt (Math.random()*10)
    }
}
for (let i=0;i<matriz.length;i++){
    for(let j=0;j<matriz.length;j++){
        somaMatriz += matriz[i][j]
        if (i == 0){
            somaLinha4 += matriz[i][j]
        }
        if(j == 1){
            coluna2 += matriz[i][j]
        }
        if (i==j){
            diagonalP += matriz[i][j]
        }
        if (i+j == matriz.length - 1  ){
            diagonalS += matriz[i][j]  
        }
    }
}       

console.table(matriz)
console.log('Soma da Matriz ' +somaMatriz)
console.log('Soma da 4º linha ' +somaLinha4)
console.log('Soma da 2º coluna ' +coluna2)
console.log('Soma da diagonal Principal ' +diagonalP)
console.log('Soma da diagonal Secundario ' +diagonalS)

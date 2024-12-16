/*5- Criar um programa que leia os elementos de uma matriz inteira 4 x 4 e:
a) escreva os elementos da diagonal principal;
b) escreva todos os elementos, exceto os elementos da diagonal principal;
 */

let matriz = []
let diagonalP=[]

for (let i=0;i<4;i++){
    matriz[i]=[]
    diagonalP[i]=[]
    for (let j=0;j<4;j++){
        matriz[i][j]=parseInt(Math.random()*10)
        diagonalP[i][j]=matriz[i][j]
    }
}

for (let i=0;i<4;i++){
    for (let j=0;j<4;j++){
        if (i==j){
            matriz[i][j]=matriz[i][j]
        }else{
            matriz[i][j] = "X"
        }
    }

}for (let i=0;i<4;i++){
    for (let j=0;j<4;j++){
        if (i!=j){
            diagonalP[i][j]=diagonalP[i][j]
        }else{
            diagonalP[i][j] = "X"
        }
    }

}
console.table(matriz)
console.table(diagonalP)
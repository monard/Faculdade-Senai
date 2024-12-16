/*10 - Faça um algoritmo para ler uma matriz de 3×4 de números reais
e depois exibir o elemento do canto superior e do canto inferior esquerdo. */

let matriz=[]
let cantoS=0, cantoI=0

for (let i=1; i<=3; i++){
    matriz[i]=[]
    for (let j=1;j<=3;j++){
        matriz[i][j]=parseInt(Math.random()*10)
        if (i==1 && j==3){
            cantoS=matriz[i][j]
        }
        if (i==3 && j==1){
            cantoI=matriz[i][j]
        }
    }
}
 
console.table(matriz)
console.log(cantoS)
console.log(cantoI)
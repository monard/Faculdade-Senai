/*10 - Faça um algoritmo para ler uma matriz de 3×4 de números reais 
e depois exibir o elemento do canto superior e do canto inferior esquerdo.*/

let matriz = []
let cantoI=[], cantoS
for (let linha=0;linha<3;linha++){
    matriz[linha]=[]
    for (let coluna=0;coluna<4;coluna++){
        matriz[linha][coluna] = parseInt(Math.random()*10)
        if (linha == 0 && coluna == 3){
            cantoS = matriz[linha][coluna]
        }
        if (linha == 2 && coluna == 0 ){
            cantoI = matriz[linha][coluna]
        
        }
    }
}        

console.table(matriz)
console.log('Valor do Canto Superior: '+cantoS)
console.log('Valor do Canto inferior: '+cantoI)
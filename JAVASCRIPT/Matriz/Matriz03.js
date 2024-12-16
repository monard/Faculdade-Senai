/*3- Escreva um programa que leia uma matriz 4 x 4 de inteiros e 
atribua o valor 0 para os valores negativos,
 e mostre todos os valores da matriz.*/

let matriz = [], cont = 0, valorNeg = 0
for (let linha = 0;linha<4;linha++){
    matriz[linha] = []
    for(let coluna=0;coluna<4;coluna++){
        matriz[linha][coluna] = parseInt(prompt('Digite os numeros: '))
        if (matriz[linha][coluna]<0){
            (matriz[linha][coluna]=0)
        }
    } 
}
console.table(matriz)

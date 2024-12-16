/*3- Escreva um programa que leia uma matriz 4 x 4 de inteiros e atribua o valor 0 para os valores negativos,
 e mostre todos os valores da matriz. */

 let matriz=[]

 for (let i=0; i<2; i++){
    matriz[i]=[]
    for (let j=0; j<2; j++){
        matriz[i][j] = parseInt(prompt('Digite valores Positivos e Negativos: '))
        if (matriz[i][j] < 0){
            matriz[i][j] = 0
        }
    }
 }
 console.table(matriz)
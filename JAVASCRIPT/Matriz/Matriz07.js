/*7 - Escrever um algoritmo para ler uma matriz (7,4) contendo valores inteiros (supor que os valores são
distintos). Após, encontrar o menor valor contido na matriz e sua posição.
 */

let matriz = []
let menorValor=Infinity // Inicializa com o maior valor 
let plinha=0, pcoluna=0

for (let i=0;i<2;i++){
    matriz[i] = []
    for(let j=0;j<2;j++){
        matriz[i][j] = parseInt(prompt('Digite os Numeros: '))
    }
}
for (let i=0;i<matriz.length;i++){
    for (let j=0;j<matriz[i].length;j++){
        if ( matriz[i][j]<menorValor){
           menorValor = matriz[i][j]
           plinha=i
           pcoluna=j
        }          
        
    }
} 

console.table(matriz)
console.log('O menor valor da Matriz é : '+ menorValor)
console.log('Posição do menor valor:', { i: plinha, j: pcoluna });
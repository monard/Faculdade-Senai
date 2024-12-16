let matriz = [];
for (let linha=0;linha<4;linha++){
    matriz[linha] = [] // inicializa a linha
    for (let coluna = 0;coluna<5;coluna++){
        matriz[linha][coluna] = parseInt(Math.random()*100);
    }
}
console.log(matriz);
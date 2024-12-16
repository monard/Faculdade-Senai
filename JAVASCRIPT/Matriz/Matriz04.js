/*4-Escreva um programa que leia uma matriz 6 x 6 de inteiros. 
Leia também um valor inteiro x. O programa deverá fazer uma busca desse valor na matriz 
e, ao final escrever sua localização (linha e coluna) ou uma mensagem de “não encontrado”..*/

    let matriz = [] 
    let valor ;
    let encontrado = false
      for (let linha = 0; linha < 6; linha++) {
        matriz[linha] = [];
        for (let coluna = 0; coluna < 6; coluna++) {
            matriz[linha][coluna] = parseInt(Math.random()*10);
        }
    }
    valor = parseInt(prompt('Digite o valor inteiro que você deseja buscar na matriz: '));
    for (let linha = 0; linha < 6; linha++) {
        for (let coluna = 0; coluna < 6; coluna++) {
            if (matriz[linha][coluna] == valor) {
                console.log(`Valor encontrado na posição: Linha ${linha}, Coluna ${coluna}`);
                encontrado = true
            }
        }
    }
    console.table(matriz);

 if (encontrado !=true) {
    console.log('Valor não encontrado na matriz.');
}


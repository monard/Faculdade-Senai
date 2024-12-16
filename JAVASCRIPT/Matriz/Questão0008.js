/*8- Análise de Produção Semanal:
Uma empresa registra a produção semanal de 3 máquinas em uma matriz 3x7,3x7,3x7, 
onde cada linha representa uma máquina e cada coluna um dia.
Calcule a produção total semanal de cada máquina.
Determine o dia de maior produção da semana.*/

let maquina =[]
let somaT = []
let maior = 0 , dia = 0

for (let i=0;i<3;i++){
    maquina [i] = []
    somaT[i] = 0
    for (let j=0;j<3;j++){
      maquina[i][j] = Number(prompt(`Produção da máquina ${i + 1}, dia ${j + 1}:`))
         somaT[i] += maquina[i][j]
         if (maior <maquina[i][j]){
            maior = maquina[i][j]
            dia = j
         }
    }
    console.log(`A produção total da máquina ${i + 1} é: ${somaT[i]}`);
    console.log(`A maior produção da máquina ${i + 1} foi ${maior} no dia ${dia + 1}`);
}

/*let maquina = [];
let somaT = [];
let maior = 0, dia = 0;

for (let i = 0; i < 3; i++) {
    maquina[i] = [];
    somaT[i] = 0;  // Inicializando somaT[i] com 0 para cada máquina

    let maiorProdução = 0; // Variável para armazenar a maior produção por máquina
    let diaMaior = 0; // Variável para armazenar o dia da maior produção

    for (let j = 0; j < 3; j++) {
        maquina[i][j] = Number(prompt(`Produção da máquina ${i + 1}, dia ${j + 1}:`));
        somaT[i] += maquina[i][j]; // Somando a produção da máquina

        if (maiorProdução < maquina[i][j]) {
            maiorProdução = maquina[i][j];
            diaMaior = j;
        }
    }

    console.log(`A produção total da máquina ${i + 1} é: ${somaT[i]}`);
    console.log(`A maior produção da máquina ${i + 1} foi ${maiorProdução} no dia ${diaMaior + 1}`);
}
*/
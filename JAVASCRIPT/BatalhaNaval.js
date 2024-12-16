let tabuleiro = []
let posicaoL = 0, posicaoC = 0, tiroL=0, tiroC=0, totalAcertos=0

for (let i=0;i<8;i++){
    tabuleiro[i]=[]
    for(let j=0;j<8;j++){
        tabuleiro[i][j] = 0
    }
}

for (let contador =0;contador<5;contador++){ //zero quando não for navio e 1 quando for navio
    posicaoL = Number(prompt('Digite a posição da linha do barco: '))
    posicaoC = Number(prompt("digite a posição da coluna do barco: "))
    tabuleiro[posicaoL][posicaoC] = 1
}

for (let contador = 0; contador<10; contador++){
    tiroL= Number(prompt('Digite a linha em que deseja atirar: '))
    tiroC= Number(prompt('Digite a coluna em que deseja atirar: '))
   
            if (1 == tabuleiro[tiroL][tiroC]){
                console.log('Aceitou Mizeravel')
                totalAcertos++
                tabuleiro[tiroL][tiroC]=0
            }
 }
    
 console.log('Voce acertou ' + totalAcertos + ' ' + 'tiros')
if(totalAcertos == 5){
    console.log('Acertou todos os barcos')
}
console.table(tabuleiro)
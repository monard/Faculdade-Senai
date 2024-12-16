/*Criar uma matriz de 5x5 que mostre quando os índices forem iguais*/

let matriz = [], cont = 0
for (let linha = 0;linha<5;linha++){
    matriz[linha] = []
    for(let coluna=0;coluna<5;coluna++){
        matriz[linha][coluna] = parseInt(Math.random()*100)
    }
}
for (let linha=0;linha<5;linha++){
    for (let coluna = 0; coluna< 5; coluna++){
        for (let linha2=0;linha2<5;linha2++){
            for (let coluna2 = 0; coluna2< 5; coluna2++){
                cont++;
                if (matriz[linha][coluna] == matriz[linha2][coluna2] && coluna != coluna2 && linha != linha2){
                    console.log('A posição da linha' + " "+ linha + " " +'e coluna' + " " + coluna + " " + 'A posição da linha ' + " " + linha2 + " " + 'e coluna ' + " " + coluna2 )
                }
            }
        }


    }
}
console.table(matriz)
console.log(cont)
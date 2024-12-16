/*2- Criar uma matriz de 5x5 que mostre quando os índices forem iguais*/

let matriz = []

for (let i=0;i<3;i++){
    matriz[i] = []
    for (let j=0;j<3;j++){
        matriz[i][j]=parseInt(Math.random()*10)
    }
}

for (let i=0;i<3;i++){
    for (let j=0;j<3;j++){
        for (let i2=0;i2<3;i2++){
            for (let j2=0;j2<3;j2++){
                if (matriz[i][j]==matriz[i2][j2]){
                    console.log('A posição da linha' + " "+ i + " " +'e coluna' + " " + j + " " + 'A posição da linha ' + " " + i2 + " " + 'e coluna ' + " " + j2 )
                }
            }        
        }
    }
}
console.table(matriz)


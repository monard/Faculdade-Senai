/*1- Faça um menu para que o usuário opte por  
(1) – Somar  (2) – Subtrair  (3) – Multiplicar  (0) - Sair 
2. Prossiga com o programa, adicionando valores as matrizes A e B e calculando: 
  A soma das matrizes A e B, colocando o resultado na matrizSom. 
   A subtração das matrizes A e B, colocando o resultado na matrizSub.  
   A multiplicação das matrizes A e B, colocando o resultado na matrizMul.  
   Obs: o tamanho das matrizes Sub, Som e Mul será automaticamente programável. 
   Uma vez que o programa sabe qual o número de linhas da matriz A e B e qual o número 
   de colunas da matriz A e B, automaticamente se saberá qual o tamanho da matriz resultante  
   nos passos anteriores isso já foi feito
*/
let matrizA = []; matrizSom = []; matrizSu = [] ; matrizMul = []
let matrizB = [];
let linha = 0, coluna = 0;

linha = Number(prompt("Digite a quantidade de linhas da Matriz:"))
coluna = linha = Number(prompt("Digite a quantidade de coluna da Matriz:"))
 
for (let ilinha = 0; ilinha<linha;ilinha++){
    matrizA[ilinha] = []
    matrizB[ilinha] = []
    for (let icoluna=0;icoluna<coluna;icoluna++){
        matrizA[ilinha][icoluna] = parseInt (Math.random()*10);
        matrizB[ilinha][icoluna] = parseInt (Math.random()*10);
    }
}
 do{
    menu  = Number(prompt("Escolha a Opção : \n1-Somar\n  2-Subtrair\n  3-Multiplicar\n  0-Sair\n "))
    switch (menu){
        case 1:
            for (let ilinha=0;ilinha<linha;ilinha++){
                matrizSom[ilinha] = [];
                for (let icoluna=0;icoluna<coluna;icoluna++){
                    matrizSom[ilinha][icoluna]= matrizA[ilinha][icoluna]+matrizB[ilinha][icoluna]
                }
            }
            console.log("Resultado da Soma:");
            console.table(matrizSom);
            break;


            case 2:
                for (let ilinha=0;ilinha<linha;ilinha++){
                    matrizSu[ilinha] = [];
                    for (let icoluna=0;icoluna<coluna;icoluna++){
                        matrizSu[ilinha][icoluna]= matrizA[ilinha][icoluna]-matrizB[ilinha][icoluna]
                    }
                }  
                console.log("Resultado da Subtração:");
                console.table(matrizSu);
                break;    
                
                case 3:
                    for (let ilinha=0;ilinha<linha;ilinha++){
                        matrizMul[ilinha] = [];
                        for (let icoluna=0;icoluna<coluna;icoluna++){
                            matrizMul[ilinha][icoluna]= matrizA[ilinha][icoluna]*matrizB[ilinha][icoluna]
                            
                        }
                    } 
                    console.log("Resultado da Multiplicação:");
                    console.table(matrizMul);
                    break;  
                case 0:
                    console.log("Saindo...");
                break;
            
                default:
                    console.log("Opção inválida!");
                break;         
    }

 }while (menu !=0)
 




















/*
let matrizSomA = 0 ,matrizSomB = 0, matrizSub , matrizMul , tamanhoMatriz, resultadoMatrizSoma
let escolha = Number(prompt('Escolha a opção : (1)  Somar  (2)  Subtrair  (3)  Multiplicar  (0) - Sair 2'))
for (let linha=0;linha<4;linha++){
    matrizA[linha] = [] // inicializa a linha
    for (let coluna = 0;coluna<5;coluna++){
        matrizA[linha][coluna] = parseInt(Math.random()*10);
        matrizSomA += matrizA[linha][coluna]

    }
}
for (let linha=0;linha<4;linha++){
    matrizB[linha] = [] 
    for (let coluna = 0;coluna<5;coluna++){
        matrizB[linha][coluna] = parseInt(Math.random()*100);
        matrizSomB += matrizB[linha][coluna]

        resultadoMatrizSoma = matrizSomA+matrizSomB
    }
}
console.log(resultadoMatrizSoma);
console.log(matrizSub);
console.log(matrizMul);
*/
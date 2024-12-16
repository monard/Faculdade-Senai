/*1- Faça um menu para que o usuário opte por  (1) – Somar  (2) – Subtrair  (3) – Multiplicar  (0) - Sair 
2- A soma das matrizes A e B, colocando o resultado na matrizSom.  
3- A subtração das matrizes A e B, colocando o resultado na matrizSub.  
4- A multiplicação das matrizes A e B, colocando o resultado na matrizMul.  
Obs: o tamanho das matrizes Sub, Som e Mul será automaticamente programável. 
Uma vez que o programa sabe qual o número de linhas da matriz A e B e qual o número de colunas da matriz A e B, 
automaticamente se saberá qual o tamanho da matriz resultante nos passos anteriores isso já foi feito */

let matrizA=[], matrizB=[],matrizSom=[], matrizSub=[],matrizMul=[]

for (let i=0; i<3; i++){
    matrizA[i]=[]
    matrizB[i]=[]
    for (let j=0;j<4;j++){
        matrizA[i][j]=parseInt(Math.random()*10)
        matrizB[i][j]=parseInt(Math.random()*10)
    }   
}
do{

 opcao = Number (prompt("Escolha a Opção : \n1-Somar\n  2-Subtrair\n  3-Multiplicar\n  0-Sair\n "))
  switch(opcao){
        case 1:
            for (let i=0;i<3;i++){
                matrizSom[i] = [];
                for (let j=0;j<4;j++){
                    matrizSom[i][j]= matrizA[i][j]+matrizB[i][j]
                }
            }
            console.log("Resultado da Soma:");
            console.table(matrizSom);
            break;
            case 2:
                for (let i=0;i<3;i++){
                    matrizSub[i] = [];
                    for (let j=0;j<4;j++){
                        matrizSub[i][j]= matrizA[i][j]-matrizB[i][j]
                    }
                }
                console.log("Resultado da Subtração:");
                console.table(matrizSub);
                break;
                case 3:
                    for (let i=0;i<3;i++){
                        matrizMul[i] = [];
                        for (let j=0;j<4;j++){
                            matrizMul[i][j]= matrizA[i][j]*matrizB[i][j]
                        }
                    }
                    console.log("Resultado da Soma:");
                    console.table(matrizMul);
                    break;
                    case 0:
                        console.log("Saindo...");
                    break;
                
                    default:
                        console.log("Opção inválida!");
                    break;    
        }
} while (opcao != 0);


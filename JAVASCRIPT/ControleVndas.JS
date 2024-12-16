/*5- Controle de Vendas Simples:
Uma empresa registra as vendas de 4 produtos durante 7 dias em uma matriz 4x7.
Calcule o total de vendas por produto.
Determine o produto com maior total de vendas. */

let matriz=[]
let prod1=0,prod2=0,prod3=0,prod4=0

for(let i=0;i<7;i++){
    matriz[i]=[]
    for(let j=0;j<4;j++){
        matriz[i][j]=parseFloat(prompt('Digite o valor da venda do produto '+ (j+1) + ' no dia '+ (i+1)))
        if (i==0){
            prod1+=matriz[i][j]
        }else if(i==1){
            prod2+=matriz[i][j]
        }else if(i==2){
            prod3+=matriz[i][j]
        }else if(i==3){
            prod4+=matriz[i][j]
        }
    }
}
console.log('produto 1 venda' + prod1);
console.log('produto 2 venda' + prod2);
console.log('produto 3 venda' + prod3);
console.log('produto 4 venda' + prod4);
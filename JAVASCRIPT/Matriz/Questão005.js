/*5- Controle de Vendas Simples:
Uma empresa registra as vendas de 4 produtos durante 7 dias em uma matriz 4x74x74x7.
Calcule o total de vendas por produto.
Determine o produto com maior total de vendas.*/

let matriz = [], prod1 =0, prod2=0,prod3=0,prod4=0;
for (let i=0;i<4;i++){
    matriz[i]=[]
    for (let j=0;j<4;j++){
        matriz[i][j] = parseFloat(prompt("Digite o valor de venda do pronduto: " + (i+1)))
        if (i ==0){
            prod1 +=matriz[i][j]
        } else if (i ==1){
            prod2 +=matriz[i][j]
        }else if (i ==2){
            prod3 +=matriz[i][j]
        }else if (i ==3){
            prod4 +=matriz[i][j]
        }
    }
}

console.log('produto 1 venda' + prod1);
console.log('produto 2 venda' + prod2);
console.log('produto 3 venda' + prod3);
console.log('produto 4 venda' + prod4);

if (prod1>prod2 && prod1>3 && prod1>4 ){
    console.log('Produto 1 mais vendido')
}else if (prod2>prod1 && prod2>prod3 && prod2>prod4 ){
    console.log('Produto 2 mais vendido')
}else if (prod3>prod1 && prod3>prod2 && prod3>prod4 ){
    console.log('Produto 4 mais vendido')
}else {
    console.log('Produto 4 mais vendido')
}

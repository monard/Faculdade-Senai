let preco = Number(prompt('Qual o valor do produto'))
let desconto
if (preco > 100){
    desconto = preco - preco*0.1
    console.log ('O valor da sua compra com 10% de desconto é R$',desconto)

}else{
    console.log ("O valor da sua compra é R$",preco)
}
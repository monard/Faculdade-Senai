let valorCompra=0,nomecliente;

for (let contador = 0; contador < 2; contador++){
    nomecliente = prompt ('Digite seu nome: ');
    valorCompra = prompt ('Digite o valor da compra');

    if (valorCompra < 50000) {
        valorCompra = (valorCompra*10)/100;
        }
    else {
        valorCompra = (valorCompra*15)/100;
    }    
    console.log ('Seu bonus é de:  ',+valorCompra);
}
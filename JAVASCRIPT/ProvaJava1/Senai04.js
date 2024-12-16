
let servico = prompt('Avliação do Serviço: 1 - Pessimo ; 2 - regular ; 3 - Bom ; 4 - Exelente ')
let valortotal = prompt ('Qual o valor total da conta: ')
let gorgeta = 0
if (servico == 1){
    gorgeta = 0
    console.log ('Sua gorgeta é R$'+gorgeta)
}else if (servico == 2){
    gorgeta = (valortotal*0.05) 
    console.log ('Sua gorgeta é R$',gorgeta)
}else if (servico == 3){
    gorgeta =  valortotal*0.1
    console.log ('Sua gorgeta é R$',gorgeta)
}else if (servico == 4){
    gorgeta =  valortotal*0.2
    console.log ('Sua gorgeta é R$',gorgeta)
}else{
    console.log ('Invalido')
}

/*
var [a,...b] = [1, 2, 3] ;
console.log(a); // 1
console.log(b); // [2, 3]
*/
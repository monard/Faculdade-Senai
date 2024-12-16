let idade = Number(prompt("Qual a sua idade? "));
if (idade <= 12){
    console.log ('Criança')
} else if (idade >= 13 && idade <= 17){
    console.log ('Adolecente')
}else if (idade >= 18 && idade <= 64){
    console.log ('Adulto')
}else{
    console.log ('Idoso')
}

let dia = prompt('Qual o dia do seu Nascimento? ')
let mes = prompt('Qual o mes do seu Nascimento ')

if (dia > 21 || dia <= 19 && mes == 1 || mes == 2){
    console.log ('Aquario')
}else if (dia > 20 || dia <= 20 && mes == 2 || mes == 3){
    console.log ('Peixe')
}else if (dia > 20 || dia <= 20 && mes == 3 || mes == 4){
    console.log ('Aries')
}else if (dia > 21 || dia <= 20 && mes == 4 || mes == 5){
    console.log ('Touro')
}else if (dia > 21 || dia <= 20 && mes == 5 || mes == 6){
    console.log ('Gemeos')
} else if (dia > 21 || dia <= 20 && mes == 6 || mes == 7){
    console.log ('Cancer')
}else if (dia > 21 || dia <= 22 && mes == 7 || mes == 8){
    console.log ('Leao')
}else if (dia > 23 || dia <= 22 && mes == 8 || mes == 9){
    console.log ('virgem')
} else if (dia > 23 || dia <= 22 && mes == 9 || mes == 10){
        console.log ('libra')
}else if (dia > 23 || dia <= 22 && mes == 10 || mes == 11){
    console.log ('Escorpião')
}else if (dia > 23 || dia <= 21 && mes == 11 || mes == 12){
    console.log ('Sargitário')
}else if (dia > 22 || dia <= 20 && mes == 12 || mes == 1){
    console.log ('Capricornio')
}else{
    console.log ('Invalido')
}      
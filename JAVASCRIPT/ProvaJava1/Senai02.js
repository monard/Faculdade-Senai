let temp = prompt('Qual a temperatura? ')

if (temp < 0){
    console.log ('Muito frio')
}else if (temp >= 0 && temp <= 30){
    console.log('temperatura Agradável')
}else{
    console.log('Muito Quente')
}
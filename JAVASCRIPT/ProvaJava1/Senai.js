let nome = prompt('Qual o seu usuario? ')
let senha = Number(prompt('Qual a sua senha? '))

if (nome == "admin" && senha == "123"){
    console.log ('Login realizado com sucesso')
}else if (senha != "123" && nome == 'admin'){
    console.log('Senha Incoreta')
}else{
    console.log('Usuário não encotrado')
}
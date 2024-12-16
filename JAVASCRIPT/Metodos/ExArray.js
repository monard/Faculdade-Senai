let nome = [];
let idade = new Array ;

for (let contador = 0 ; contador < 2; contador++ ){
    nome [contador] = prompt('digite o seu nome: ');
    idade [contador] = Number(prompt('Digite sua idade: '));
}
for (let contador = 0 ; contador < idade.length; contador++){
    if(idade[contador]){
        console.log ('O cliente'+ " " + nome[contador] + " " + "tem" + " " + idade[contador] + " " + "anos");
}
    
    }
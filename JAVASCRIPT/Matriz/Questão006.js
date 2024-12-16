/*6-Estoque Mínimo:
Crie um programa que leia um array com o estoque de 8 produtos. O programa deve:
Exibir os produtos cujo estoque é inferior a 10 unidades.
Permitir ao usuário registrar a reposição de um produto específico.*/

let estoque=[]
for (let i=0;i<5;i++){
    estoque[i]=Number(prompt("digite o estoque do produto:"))
    while(estoque[i]<10){
        console.log('produto' + (i+1) + 'com estoque baixo')
        estoque[i]+=Number(prompt('Digite a quantidade que seja deseja adicionar nesse produto'))
    }
}
console.log('o estoque de cada produto é : ' ,estoque)
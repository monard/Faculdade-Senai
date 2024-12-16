let somaIpar =0

for (let i=0;i<=10;i++){
  let  numero = Number(prompt('Digite 10 numeros'))
    if (numero % 2 != 0){
        somaIpar += numero
    }   
}
console.log('A soma dos Impares é ',somaIpar);
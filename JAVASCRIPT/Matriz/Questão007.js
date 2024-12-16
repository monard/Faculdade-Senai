/*7- Relatório de Faturamento:
Escreva um programa que leia o faturamento mensal de uma empresa durante 12 meses e:
Exiba o mês com maior faturamento.
Calcule a média mensal.
Liste os meses com faturamento abaixo da média.*/


let maiorValor=[]
let faturamento=[]
let mediaM=[]

for (let i=0;i<3;i++){
   faturamento[i]= parseInt(prompt('Digite o valor do faturamento'))
   for(let i=0;i<faturamento.length;i++){
    if (faturamento[i]>maiorValor)
    maiorValor = faturamento[i]
    mediaM= faturamento[i]/12
   }
}
console.table(faturamento)
console.log(maiorValor)
console.log(mediaM)

/*let fat = []
let mediafat =0, maiorfat=0, mes=0
for (let i=0;i<12;i++){
   fat[i] = Number(prompt('Digite o faturamento do mes:' +(i+1))
   mediafat +=fat[i]
   if (maiorfat < fat[i]){
      maiorfat = fat[i]
      mes = i+1
   }
}
mediafat = mediafat/12
for (let i=0;i<12;i++){
   if (fat[i] < mediafat){
      console.log('mes:' + [i]+1 + 'abaixo da media' )
   }
}
console.log ('mes com mais faturamento' + mes)
console.log (mediafat)
console.log (fat)



*/
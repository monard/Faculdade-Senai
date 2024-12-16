/*10- Utilizando listas faça um programa que faça 5 perguntas
 para uma pessoa sobre um crime. As perguntas são: Telefonou 
 para a vítima?; Esteve no local do crime?; Mora perto da vítima?;
  Devia para a vítima?; Já trabalhou com a vítima? O programa deve no
   final emitir uma classificação sobre a participação da pessoa no crime.
    Se a pessoa responder positivamente a 2 questões ela deve ser classificada como
     "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, 
     ele será classificado como "Inocente".*/

     let perguntas = []
     let pessoa = 0
     let opcao = [`telefone para a vitima: `,`esteve no local do crime?`,`mora perto da vitima? `,
    `já trabalho com a vitima?`]
     pessoa = Number(prompt('Quantas pessoas irão participar da pesquisa'))
     for(let i=0;i<pessoa;i++){
        perguntas[i]=[]
        let sim =0
        for(let j=0;j<5;j++){
            perguntas[i][j] = Number(prompt(opcao[j]))
            if (perguntas[i][j] ==1){
                sim++
            }

        }
        if (sim == 2){
            console.log('Suspeito')
        }else if (sim > 2 && sim <5){
            console.log('cumplice')
        }else if (sim == 5){
            console.log('Assasino')
        }else {
            console.log('Inocente')
        }
     }
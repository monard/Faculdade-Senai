let i, idade,idade1 = 0,idade2 = 0,idade3 = 0,idade4 = 0,idade5 = 0

 	for(i = 1; i <= 10; i++) {
        idade = Number [prompt ('Qual a sua idade')]
        if (idade >= 15){
            idade1++;
        }
         else if (idade <= 30){
            idade2++;
    }
    else if (idade <= 45){
        idade3++;
}
else if (idade <= 60){
    idade4++;
}
else {
    idade5++;
}
    }
    console.log ('Até 15 anos '+idade1);
    console.log ('entre 16 e 30 '+idade2);
    console.log ('entre 31 e 45 anos '+idade3);
    console.log ('entre 16 e 60 anos '+idade4);
    console.log ('acima de 61 anos '+idade5);

    let porc15 = (idade1*100)/15
    console.log ('Percertual até 15 anos '+ perc15);

    let porc61 = (idade1*100)/15
    console.log ('Percertual até 61 anos '+ perc61);
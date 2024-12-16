/*
let expr = prompt ('Digite a fruta desejada: ')
console.log (expr)
switch (expr) {
    case "laranjas":
      console.log("As laranjas custam $0.59 o quilo.");
      break;
    case "Maçãs":
      console.log("Maçãs custam $0.32 o quilo.");
      break;
    case "Bananas":
      console.log("Bananas custam $0.48 o quilo.");
      break;
    case "Cerejas":
      console.log("Cerejas custam $3.00 o quilo.");
      break;
    case "Mangas":
    case "Mamões":
      console.log("Mangas e mamões custam $2.79 o quilo.");
      break;
    default:
     console.log("Desculpe, estamos sem nenhuma " + expr + ".");
  }
  
  console.log("Tem algo mais que você gostaria de levar?");
  */
  var Animal = prompt("Qual animal foi para Arca de Noé: ");
  console.log(Animal)
switch (Animal) {
  case "Vaca":
  case "Girafa":
  case "Cachorro":
  case "Porco":
    alert("Esse animal irá para Arca de Noé");
    break;
  case "Dinossauro":
  default:
    alert("Esse animal não vai.");
}
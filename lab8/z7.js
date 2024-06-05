console.log("wybierz odpowiednia figure ktorej pole chcesz policzyc: ");
console.log("1 - prostokat");
console.log("2 - trapez");
console.log("3 - rownoleglobok");
console.log("4 - trojkat");

const prompt = require('prompt-sync')();
const choice = prompt("");

switch(choice){
  
  case "1":
  var a = prompt("dl pierwszego boku: ");
  var b = prompt("dl drugiego boku: ");
  console.log("wynik: "+(a*b));
  break;

  case "2":
  var a = prompt("dl pierwszego boku: ");
  var b = prompt("dl drugiego boku: ");
  var h = prompt("wysokosc: ");
  console.log("wynik: "+(((a*b)*h)/2));
  break;

  case "3":
  var a = prompt("dl pierwszego boku: ");
  var h = prompt("wysokosc: ");
  console.log("wynik: "+(a*h));
  break;

  case "4":
  var a = prompt("dl podstawy: ");
  var h = prompt("wysokosc: ");
  console.log("wynik: "+((a*h)/2));
  break;
}

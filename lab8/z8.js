    var a = function(){
    var b1 = prompt("dl pierwszego boku: ");
    var b2 = prompt("dl drugiego boku: ");
    return b1*b2;
    }
    
  
    var b = function(){
    var b1 = prompt("dl pierwszego boku: ");
    var b2 = prompt("dl drugiego boku: ");
    var h = prompt("wysokosc: ");
    var suma = parseInt(b1)+parseInt(b2);
    return (((suma)*h)/2);
    }
  
    var c = function(){
    var a = prompt("dl pierwszego boku: ");
    var h = prompt("wysokosc: ");
    return a*h;
    }
  
    var d = function(){
    var a = prompt("dl podstawy: ");
    var h = prompt("wysokosc: ");
    return (a*h)/2;
    }
  
    function licz(choice){
       return eval(choice+"()");
    }


console.log("wybierz odpowiednia figure ktorej pole chcesz policzyc: ");
console.log("a - prostokat");
console.log("b - trapez");
console.log("c - rownoleglobok");
console.log("d - trojkat");

const prompt = require('prompt-sync')();
const choice = prompt("");

console.log("wynik to: "+licz(choice));
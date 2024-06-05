const prompt = require('prompt-sync')();
const first = prompt('podaj pierwsza liczbe: ');
const second = prompt('podaj druga liczbe: ');
const third = prompt('podaj trzecia liczbe: ');

var numbers = [first, second, third];
numbers.sort();

if( Math.pow(numbers[0],2)+ Math.pow(numbers[1],2) == Math.pow(numbers[2],2) ){
console.log("liczby tworza trojke pitagorejska");
}
else{
console.log("liczby nie tworza trojki pitagorejskiej");
}


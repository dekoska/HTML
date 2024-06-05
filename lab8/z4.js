function fibonacci(number){
var a=0;
var b=1;

for(var i=0;i<number;i++){
	process.stdout.write(b.toString()+" ");
	b += a;
	a = b-a;
}
console.log();
}

const prompt = require('prompt-sync')();
const number = prompt("podaj dlugosc ciagu: ");

fibonacci(number);



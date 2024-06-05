function tabliczka(liczba){
   for(var i=1; i<=liczba; i++){
	for(var j=1; j<=liczba; j++){
	    process.stdout.write((i*j).toString()+"\t");
}
console.log();		
}
}

const prompt = require('prompt-sync')();
const number = prompt("podaj liczbe do wymnozenia: ");
tabliczka(number);

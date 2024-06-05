const prompt = require('prompt-sync')();
const a = prompt("zakres od: ");
const b = prompt("do: ");
const c = prompt("podzielna przez: ");

for(var i=a; i<=b; i++){
 if(i%c==0){
	console.log(i);
}
}

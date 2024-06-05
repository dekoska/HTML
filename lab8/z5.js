function choinka(number){
     for(var i=1;i<=number;i++){
	 for(var j=0;j<i;j++){
              process.stdout.write("*"); }
         console.log(""); }
}

const prompt = require('prompt-sync')();
const height = prompt("podaj wysokosc choinki: ");
choinka(height);

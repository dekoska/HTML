function pascalTriangle(a, b) {
    if (b === 0 || b === a) {
        return 1;
    } else {
        return pascalTriangle(a - 1, b - 1) + pascalTriangle(a - 1, b);
    }
}
const prompt = require('prompt-sync')();
const length = parseInt(prompt("podaj dlugosc: "));

for (let i = 0; i < length; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += pascalTriangle(i, j) + ' ';
    }
    console.log(row);
}

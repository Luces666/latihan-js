const prompt = require('prompt-sync')({sigint: true});

let x = Number(prompt("Masukkan Nilai X: "));
let y = Number(prompt("Masukkan Nilai Y: "));
let z = Number(prompt("Masukkan Nilai Z: "));

let temp = x;
x = z;
z = temp;

console.log(x, y, z);

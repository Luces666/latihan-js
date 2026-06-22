const prompt = require('prompt-sync')({sigint: true});

let jarakCm = Number(prompt("Masukkan Jarak: "));
let sisa = jarakCm;

let km = Math.floor(sisa / 100000);
sisa = sisa % 100000;

let m = Math.floor(sisa / 100);
sisa = sisa % 100;

let cm = sisa

console.log(
    `${km} km + ${m} m + ${cm} cm`
)

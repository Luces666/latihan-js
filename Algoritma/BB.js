const prompt = require('prompt-sync')({sigint: true});

let tinggi = Number(prompt("Masukkan Tnggi Badan: "));

let hasil1 = tinggi - 100;
let hasil2 = 0.1 * hasil1;
let ideal = hasil1 - hasil2;

console.log(`Berat Badan Ideal: ${ideal.toFixed(0)} kg`)
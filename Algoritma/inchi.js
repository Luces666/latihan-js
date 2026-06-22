const prompt = require('prompt-sync')({sigint: true});

let meter = Number(prompt("Masukkan Satuan Meter: "));

let inchi = meter / 0.0254;
let kaki = meter / 0.3048;
let yard = meter / 0.9144;

console.log(
    `inchi = ${inchi.toFixed(2)}, kaki = ${kaki.toFixed(2)}, yard = ${yard.toFixed(2)}`
)
const prompt = require('prompt-sync')({sigint: true});

let sisi = prompt("Masukkan Panjang 3 Buah Sisi Segitiga: ").split(" ");
let a = Number(sisi[0]);
let b = Number(sisi[1]);
let c = Number(sisi[2]);

let aKuadrat = a * a;
let bKuadrat = b * b;
let cKuadrat = c * c;

if(a + b <= c){
    console.log("Tidak membentuk segitiga");
} else if(cKuadrat == aKuadrat + bKuadrat){
    console.log("Segitiga Siku-Siku");
} else if(cKuadrat < aKuadrat + bKuadrat){
    console.log("Segitiga Lancip");
} else {
    console.log("Segitiga Tumpul");
}
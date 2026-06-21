const prompt = require('prompt-sync')({sigint: true});

let d1 = Number(prompt("Masukkan Tanggal Pertama: "));
let m1 = Number(prompt("Masukkan Bulan Pertama: "));
let y1 = Number(prompt("Masukkan Tahun Pertama: "));

let d2 = Number(prompt("Masukkan Tanggal Kedua: "));
let m2 = Number(prompt("Masukkan Bulan Kedua: "));
let y2 = Number(prompt("Masukkan Tahun Kedua: "));

let total1 = y1 * 365 + m1 * 30 + d1;
let total2 = y2 * 365 + m2 * 30 + d2;

let selisih = Math.abs(total2 - total1);

let tahun = Math.floor(selisih / 365);
let bulan = Math.floor((selisih % 365) / 30);
let hari = Math.floor(selisih % 365) / 30;

console.log("Selisihnya: ");
console.log(hari + " Hari");
console.log(bulan + " Bulan");
console.log(tahun + " Tahun");
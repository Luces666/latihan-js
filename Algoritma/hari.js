const prompt = require('prompt-sync')({sigit: true});

let hari = Number(prompt("Masukkan angka hari ke-: "));

let minggu = hari / 7;
let bulan = hari / 30;
let tahun = hari / 365;

console.log(`
    ${hari} hari = ${minggu} minggu;
    ${hari} hari = ${bulan} bulan;
    ${hari} hari = ${tahun} tahun;
    `)
const prompt = require('prompt-sync')({sigint: true});

let tahun = Number(prompt("Masukkan Tahun: "));

if(tahun % 400 == 0 || tahun % 4 == 0 && tahun % 100 != 0){
    console.log("Tahun Kabisat");
} else {
    console.log("Bukan Tahun Kabisat");
}
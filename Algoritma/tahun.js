const prompt = require('prompt-sync')({sigint: true});

let tahun = Number(prompt("Masukkan Tahun: "));

if(tahun % 4 == 0){
    console.log(tahun + " adalah Tahun Kabisat");
} else {
    console.log(tahun + " Bukan Tahun Kabisat");
}
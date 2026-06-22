const prompt = require('prompt-sync')({sigint: true});

let nilaiU = Number(prompt("Masukkan Nilai Ujian: "));

if(nilaiU >= 80){
    console.log("Indeks Nilai A");
} else if(nilaiU >= 70){
    console.log("Indeks Nilai B");
} else if(nilaiU >= 55){
    console.log("Indeks Nilai C");
}else if(nilaiU >= 40){
    console.log("Indeks Nilai D");
} else {
    console.log("Indeks Nilai E");
}
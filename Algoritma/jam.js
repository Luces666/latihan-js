const prompt = require('prompt-sync')({sigint: true});

let waktu = prompt("Masukkan Waktu (hh:mm:ss): ").split(":");
let jam = Number(waktu[0]);
let menit = Number(waktu[1]);
let detik = Number(waktu[2]);

detik = detik + 1;

if(detik === 60){
    detik = 0;
    menit = menit + 1;
}

if(menit === 60){
    menit = 0;
    jam = jam + 1;
}

if(jam === 24){
    jam = 0;
}

let jamBaru = jam.toString().padStart(2, "0");
let menitBaru = menit.toString().padStart(2, "0");
let detikBaru = detik.toString().padStart(2, "0");

let hasil = `${jamBaru}:${menitBaru}:${detikBaru}`

console.log(`Jam Baru: ${hasil}`);
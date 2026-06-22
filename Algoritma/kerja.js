const prompt = require('prompt-sync')({sigint: true});

let jamKerja = Number(prompt("Masukkan Jam Kerja: "));

const upahNormal = 2000;
const upahLembur = 3000;
const batasJam = 48

let totalUpah;

if(jamKerja <= 48){
    totalUpah = jamKerja * 2000;
} else {
    let upahNormalTotal = batasJam * upahNormal;
    let jamLembur = jamKerja - batasJam;
    let upahLemburTotal = jamLembur * upahLembur;
    totalUpah = upahNormalTotal + upahLemburTotal;
} 

console.log("Total Upah: Rp" + totalUpah.toLocaleString());

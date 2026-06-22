const prompt = require('prompt-sync')({sigint: true});

function tampilkanPesan(pesan){
    console.log(pesan);
}

let nama = prompt("Masukkan Nama Karyawan: ");
let gol = prompt("Termasuk Golongan(A/B/C/D): ").toUpperCase();
let jamKerja = Number(prompt("Masukkan Jam Kerja: "));
let upah;
let gaji;
let valid = true;

switch(gol){
    case "A":
        upah = 4000;
        break;
    case "B":
        upah = 5000;
        break;
    case "C":
        upah = 6000;
        break;
    case "D":
        upah = 7500;
        break;
    default:
        tampilkanPesan(`${nama} Tidak termasuk Karyawan! Dikarenakan Golongannya tidak ada yaitu ${gol}`);
        valid = false;
}

if(valid){
    if(jamKerja <= 48){
        gaji = jamKerja * upah;
    } else if(jamKerja > 48){
        gaji = (48 * upah) + ((jamKerja - 48) * 3000);
    }

    tampilkanPesan(`${nama} termasuk Golongan ${gol}, dengan jam Kerja ${jamKerja} jam, Gajinya Rp${gaji.toLocaleString()}`);
}
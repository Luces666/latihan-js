const prompt = require('prompt-sync')({sigint: true});

let harga = Number(prompt("Masukkan Total Harga Belanja: "));

if(harga > 100000){
    let diskon = harga * 0.1;
    let hargaAkhir = harga - diskon;
    console.log(`Mendapatkan diskon 10%, Rp${diskon.toLocaleString()}`);
    console.log(`Harga Akhir: Rp${hargaAkhir.toLocaleString()}`);
} else {
    console.log(`Tidak mendapatkan diskon`);
    console.log(`Harga Akhir: Rp${harga.toLocaleString()}`);
}
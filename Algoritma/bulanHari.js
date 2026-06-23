const prompt = require('prompt-sync')({sigint: true});

let angkaBulan = Number(prompt("Masukkan Angka Bulan (1-12): "));
let tahun = Number(prompt("Masukkan Tahun: "));
let daftarBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
let namaBulan = daftarBulan[angkaBulan - 1];
let jumlahHari;

switch(angkaBulan){
    case 1:   
    case 3:   
    case 5:   
    case 7:   
    case 8:   
    case 10:  
    case 12:
        jumlahHari = 31;
        break;
    case 4:   
    case 6:   
    case 9:  
    case 11:
        jumlahHari = 30;
        break;
    case 2:
        if(tahun % 400 == 0 || (tahun % 4 == 0 && tahun % 100 != 0)){
            jumlahHari = 29;
        } else {
            jumlahHari = 28;
        }
        break;
    default:
        console.log("Angka bulan tidak valid (1-12)");
        jumlahHari = undefined;
}

if(jumlahHari !== undefined){
    console.log(`Bulan ${angkaBulan} (bulan ${namaBulan}), maka jumlah harinya adalah ${jumlahHari}`);
}

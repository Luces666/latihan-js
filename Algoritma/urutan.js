const prompt = require('prompt-sync')({sigint: true});

let bilangan = prompt("Masukkan 3 Bilangan Bulat: ").split(" ");
let a = Number(bilangan[0]);
let b = Number(bilangan[1]);
let c = Number(bilangan[2]);

if(a > b){
    let bil1 = a;
    a = b;
    b = bil1;
}

if(b > c){
    let bil1 = b;
    b = c;
    c = bil1
}

if(a > b){
    let bil1 = a;
    a = b;
    b = bil1;
}

console.log(`Urutan dari nilai terkecil ke terbesar: ${a}, ${b}, ${c}`);
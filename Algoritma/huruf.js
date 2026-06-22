const prompt = require('prompt-sync')({sigint: true});

let huruf = prompt("Masukkan Huruf: ").toLowerCase();

if(huruf == "a" || huruf == "i" || huruf == "u" || huruf == "e" || huruf == "o"){
    console.log("Huruf Vokal");
} else {
    console.log("Huruf Konsonan");
}
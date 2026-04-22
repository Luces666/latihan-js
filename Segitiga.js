const prompt=require("prompt-sync")({sigint: true})
let alas=prompt(Number('Masukkan Alas: '))
let tinggi=prompt(Number('Masukkan Tinggi: '))
let luas = 1/2 * alas * tinggi
let keliling = alas + tinggi + (Math.sqrt(alas^2 + tinggi^2))

console.log("---------------")
console.log("      HASIL     ")
console.log("===============")

console.log(
    `Luas Segitiga\t\t: ${luas.toFixed(2)} cm2
    Keliling Segitiga\t: ${keliling.toFixed(2)} cm`
)
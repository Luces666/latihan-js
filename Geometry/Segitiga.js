const prompt=require("prompt-sync")({sigint: true})
let alas=Number(prompt('Masukkan Alas: '))
let tinggi=Number(prompt('Masukkan Tinggi: '))
let luas = 0.5 * alas * tinggi
let keliling = alas + tinggi + (Math.sqrt(alas^2 + tinggi^2))

console.log("---------------")
console.log("      HASIL     ")
console.log("===============")

console.log(
    `Luas Segitiga\t\t: ${luas.toFixed(2)} cm2
    Keliling Segitiga\t: ${keliling.toFixed(2)} cm`
)
// Template literal || Template String
// Contoh sederhana : 
const nama = "Sofyan";
const umur = 16;
console.log(`Halo nama saia adalah ${nama} dan saya berumur ${umur} tahun`);
// Embedded Expression : 
let a,b;
a=10;
b=5;
console.log(`Hasil dari ${a} + ${b} adalah ${a+b} bukan ${2*a+b}`);
// Atau juga : 
console.log(`${nama === "Sofyan" ? "yes" : "no"}`);
// Atau juga :
console.log(`${alert("Hello")}`); 

// Multi line : 
console.log(`Ini adalah
Multi line string
menggunakan Template Literal`);
// Atau fragments HTML : 
const saya = {
    nama: "Sofyan",
    umur: (new Date().getFullYear() - 2004),
    email: "rizlisofyan54@gmail.com"
}
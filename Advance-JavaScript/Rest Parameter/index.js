// Rest Parameter
// Merupakan.... eh gatau lupa mau cek google males kalo dari pengertian gua nih ya jadi kan karena penggunaan
// rest parameter itu kaya spread operator tuh pake "..." tapi penggunaannya beda kan kalo
// rest parameter itu biasanya dugunain di fungsi buat nangkep "sisa" arguments yang masuk
// dan semua parameter itu dah nangkep semua argumen jadi, bisa disimpulin ya kalo rest parameter itu
// Menangkap sisa argument yang diberikan (kalo di function)

// Contoh-contoh penggunaan rest parameter
// Array destructuring
const myWaifu = ['Yoroizuka', 'Siesta', 'Isla', 'Kaori'];

const [hidup, ...mayat] = myWaifu;

console.log('Masuk ke variable hidup : ', hidup);
console.log('Masuk ke variable mayat : ', mayat);
// index array waiFu yang ke 0 yaitu Yoroizuka masuk ke variabel hidup dan sisanya
// masuk ke rest parameter mayat

// Object Destructuring

const kelompok = {
    ketua : 'Sofyan',
    wakilKetua : 'Bambang',
    gatauIniSiapa : 'Sumanti',
    sekretaris: 'unaina'
}
const { ketua, ...beban} = kelompok;
console.log('Masuk ke variable ketua : ', ketua);
console.log('Masuk ke variable beban : ', beban);
// Property objek yang pertama yaitu ketua yang isinya Sofyam masuk ke variabel ketua dan 
// sisanya masuk ke rest parameter mayat

// udah si gitu doang
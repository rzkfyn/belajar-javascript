// Destructuring function return value

// function penjumlahanPerkalian(a,b){
//     return [a+b,a*b];
// }
// Tanpa destructuring
// console.log(penjumlahanPerkalian(2,3)[0]);
// console.log(penjumlahanPerkalian(2,3)[1]);

// Dengan Destructuring
// const [jumlahTambah, jumlahKali] = penjumlahanPerkalian(2,4);

// console.log(jumlahTambah, jumlahKali);

// Bagaimana jika return nya banyak ?
//  Yauda bikin lagi variable destructuring yang banyak
// misal 
// function kalkulasi(a,b){
//     return [a+b,a-b,a*b,a/b,];
// }
// const [tambah,kurang,kali,bagi] = kalkulasi(4,5);
// console.log(tambah,bagi);

// Bisa juga return dengan object agar tidak perlu ngurut nama variabel nya
// function kalkulasi(a,b){
//     return {
//         tambah : a+b,
//         kurang : a-b,
//         kali : a*b,
//         bagi : a/b
//     };
// }
// const {bagi, kali, tambah, kurang} = kalkulasi(2,3);
// console.log(kali);

// Destructur Function Arguments
const saya = {
    nama : "Sofyan",
    umur : 17,
    email : 'rizkisofyan54@gmail.com',
    favoriteLanguages:[
        'javascript',
        'java',
        'php'
    ]
}

function showMyData({nama , umur, favoriteLanguages : [pertama, kedua, ketiga]}){
    return `Halo nama saya adalah ${nama}, saya berumur ${umur} tahun dan bahasa favorit pertama saya adalah ${pertama}`;
}

console.log(showMyData(saya));
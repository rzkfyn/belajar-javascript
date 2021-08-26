//  Higher order function merupakan function yang mereturn function didalamnya
// atau function yang menggunakan function sebagai argument (callback function)
// Contoh Sederhana : 
// function bangunTidur(jam, bangun){
//     console.log(`Bangun pada puku ${jam}`);
//     bangun();
// };

// function bangun(){
//     alert('Telah Bangun');
// }
// bangunTidur(8, bangun);
// // atau : 
// function sapa(waktu){
//     return function(nama){
//         return console.log(`Selamat ${waktu}, ${nama}!`);
//     }
// }

// const selamatPagi = sapa('pagi');
// selamatPagi('Sofyan');

// Kenapa Menggunakan Higher order function ? YNTKTS
/**
 * 1.Abstraksi
 * 2.Pendekatan Pada Functional Programming
 */
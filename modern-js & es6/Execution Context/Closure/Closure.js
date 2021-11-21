// Closure merupakan kombinasi antara function dan lexical scope dalam function tersebut -Mdn
// Closure merupakan sebuah function ketika memiliki akses ke parent scope nya, walaupun eksekusi parent scope nya telah selesai di eksekusi -W3cschool

// contoh closure : 
// function init(){
//     return function(nama){
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Sofyan');

// Kenapa mengunakan Closure ?
// untuk membuat private methods
// membuat factory function

// Factory function
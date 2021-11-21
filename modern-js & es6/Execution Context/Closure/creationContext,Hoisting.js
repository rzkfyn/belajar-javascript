//Ececution Context, Hoisting & Scope
// Pada JavaScript pertama tama, akan terjadi proses Creation Phase
// console.log(nama);
// var nama = "Sofyan";
// console.log(nama);
// Execution Context Creation Phase(Global)
// JavaScript pertama tama akan mencari apakah ada fungsi, atau variabel pada source code
// Pada proses itu setiap variabel akan diisi undefined dan fungsi akan diisi fungsi itu sendiri
// Ini dinamakan Hoisting
// window = global object
// this = window
// console.log(sayHello());

// var nama = "Sofyan";
// var umur = 17;

// function sayHello(){
//     return (`Hello nama saya adalah ${nama} dan saya berumur ${umur} tahun`);
// }

// Function membuat local execution context
// disana Java Script akan mencari apakah ada variabel atau ada fungsi pada fungsi tersebut
// jadi akan tetap ada creation phase, dan hoisting tapi terjadi secara local
// var nama = 'Rizki Sofyan';
// var userName = '@sofyan.1212';

// function createIgUrl(){
//     console.log(arguments[0]);
//     return `https://www.intagram.com/users/${userName}`;
// }

// console.log(createIgUrl('fal'));

// function println(){
//     if(!arguments[0]) return;
//     return console.log(arguments[0]);
// }
// function a(){
//     console.log('ini a');

//     function b(){
//         console.log('ini b');

//         function c(){
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();
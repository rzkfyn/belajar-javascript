'use strict'
// Spread Operator
// Memecah Iterable objek menjadi satu satu elemen
// contoh : 
// const waifuku = ['yoroizuka', 'Nezuko', 'Tsumugi'];
// console.log(...waifuku);
// Fungsinya ?

// 1. Menyatukan Array
// const murid = ['Sofyan', 'Rizki', 'Refal'];
// const guru = ['Bayu', 'Candra', 'Mulki'];
// const gabung = [...murid, ...guru];

// 2. Mengcopy array
// const arr = [1,2,true,'hehe'];
// const copyArr = [...arr];
// console.log(arr);
// console.log(copyArr);

// 3. Mengubah nodelist menjadi array
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);
// const liNamaArr = [...liNama];
// console.log(liNamaArr);

// document.querySelector('.nama')
//     .innerHTML = [...document.querySelector('.nama').textContent].map(e => `<span>${e}</span>`).join('');
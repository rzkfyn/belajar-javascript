'use strict'
const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// Contoh-contoh Higher Order Function
// 1 Filter
// 1.1 Menggunakan for untuk menfilter array
// Kasus : ingin membuat array berdasar dari array angka dengan nilai nilai lebih dari 3 saja
// let a = []
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3) a.push(angka[i]);
// };
// console.log(a);
// 1.2 Menggunakan Salah satu Higher Order Function yaitu Filter()
// Function biasa
// const newAngka = angka.filter(function(e){
//     return e>= 3;
// });
// arrow function
// const newAngka = angka.filter(e => e>=3);
// 2. Map
// kasus : ingin membuat array berdasar pada array angka tapi berisi yang sudah dikalikan 2
// Function biasa
// const newAngka = angka.map(function(e){
//     return e *2;
// });
// Arrow function
// const newAngka = angka.map(e => e*2);
// console.log(newAngka);
// 3.reduce
// Kasus : ingin menggabungkan array dengan cara ditambahkan
// Function biasa
// const newAngka = angka.reduce(function(nilaiSebelumnya, nilaiSaatIni){
//     nilaiSebelumnya+nilaiSaatIni;
// }, 0/*nilai awal (bisa dikonsogkan jika 0)*/);
// Arrow functiom
// const newAngka = angka.reduce((previousValue,CurentValue) => previousValue + CurentValue, 1);
// console.log(newAngka);
// chaining method
// Kasus : 
// Ingin memfilter array hanya > 5;
// masing2 elemen dikali 3
// dijumlahkan 
// maka : 
// const newAngka = angka.filter(e => e>5)
//     .map(e => e*3)
//     .reduce((a,b) => a+b);

// console.log(newAngka);
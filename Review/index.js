// 'use strict';

/* ============================================================ Object ============================================================ */
// Object Literal
// let mahasiswa = {
//     nama : "Nama Mahasiswa",
//     energi : 10,
//     makan : function(porsi){
//         this.energi = this.energi += porsi;
//         console.log(`Selamat makan ${this.nama} !`);
//     }
// }

// Function Declaration
// const methodMahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`)
//     },
//     main : function(jam){
//         this.energi -= jam;
//         console.log(`${this.nama} selamat makan`);
//     }
// }
// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }
// let nama = Mahasiswa("Nama", 10);
// nama.makan(1);

// Constructor Function
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`)
//     }
//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`${this.nama} selamat main!`);
//     }
// }

// let Sandhika = new Mahasiswa("Sandhika", 10);

// Prototype
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
// }
// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Hai ${this.nama}, selamat makan! Sekarang kamu memiliki energi sebesar ${this.energi}`;
// }
// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Hai ${this.nama}, Selamat Bermain! Sekarang kamu memiliki ${this.energi} energi tersisa`;
// }
// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `Hai ${this.nama}, Selamat Tidur! Sekarang kamu memiliki energi sebesar ${this.energi}`;
// }
// let Sofyan = new Mahasiswa("Sofyan", 10);

// class Mahasiswa{
//     constructor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }
//     makan(porsi){
//         this.energi += porsi;
//         return `Hai ${this.nama}, selamat makan! Sekarang kamu memiliki energi sebesar ${this.energi}`;
//     }
//     main(jam){
//         this.energi -= jam;
//         return `Hai ${this.nama}, Selamat Bermain! Sekarang kamu memiliki ${this.energi} energi tersisa`;
//     }
//     tidur(){
//         this.energi += jam * 2;
//         return `Hai ${this.nama}, Selamat Tidur! Sekarang kamu memiliki energi sebesar ${this.energi}`;
//     }
// }

// const sofyan = new Mahasiswa("Sofyan", 10);
// const methodMahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi;
//         return console.log(`${this.nama} Sekarang memiki energi sebesar ${this.energi}`);
//     },
//     tidur : function(jam){
//         this.energi += jam*2;
//         return console.log(`${this.nama} Sekarang memiki energi sebesar ${this.energi}`);
//     }
// }
// const Mahasiswa = (nama, energi) => {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }
// let sofyan = Mahasiswa("Sofyan", 10);
// sofyan.makan(12);
// console.log("https://www.rzkfyn.my.id/justyui.png");

// ============================================================ Execution Context, Hoisting & scope ============================================================
/*
Dalam pengeksekusian Java Script terdapat 3 tahap yang pertama adalah hoisting
dimana JS akan mencari apakah ada variable dan fungsi pada baris kode jika ada
variable akan diisi terlebih dahulu dengan undefined dan fungsi akan diisi oleh
isi fungsi tersebut dan mulai meng eksekusi kode dari atas ke bawah
 */
// var nama = undefined;
// console.log(nama);


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

// var username = 'rzkfyn';

// function cetakUrl(username){

//     var instagramUrl = 'https://instagram.com/';
//     return instagramUrl+username;

// }

// console.log(cetakUrl("mamang"));
// function satu(){
//     let nama = 'Sofyan';
//     console.log(nama);
// }
// function dua(){
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('Dody');
// console.log(nama);

/* ======================================================== Closures =========================================================== */
// Contoh Closure
// function init(){
//     let nama = "Sofyan";
//     function tampilNama(){
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();
// 
// function init(){
//     function tampilNama(nama){
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let tampilNama = init();
// tampilNama("Sofyan");
// Function Factories
// function sapa(){
//     return function selamat(waktu){
//         console.log(`Halo! selamat ${waktu}`);
//     }
// }

// const sapaPagi = sapa();
// sapaPagi('pagi');

// function sapaa(){
//     let nama = "Sofyan";
//     return function kegiatan(kegiatan){
//         console.log(`Halo ${nama}! selamat ${kegiatan}`);
//     }
// }

// const sapaMain = sapaa();
// const sapaMakan = sapaa();
// const sapaSekolah = sapaa();
// const sapaPergi = sapaa();
// sapaMain('Main');
// sapaMakan('Makan');
// sapaPergi('pergi');

// (function sayHello(nama){
//     console.log("Halo "+nama);
// })("Sofyan");
// let add = (function(){
//     let counter = 0;
//     return () => {
//         return counter++;
//     }
// })();
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

/* ============================================================ Arrow Function ============================================================ */
// Contoh : 
// const tampilNama = function(nama){
//     return `Halo ${nama}`;
// }
//Bisa diringkas menjadi : 
// const tampilNama = (nama) => {
//     return `Halo ${nama}`;
// }
// Bisa diringkas lagi : 
// const tampilNama = nama => `Halo ${nama}`;
// Wajib menggunakan () jika parameter lebih dari 1
// This pada Arrow Function

// const Mahaiswa = function(nama, umur){
//     this.nama = "Sofyan";
//     this.umur = 33;
//     console.log(this);
// }
// this.alert("Hello");
// Konsep this pada arrow function
const arrowFunction = (() => console.log(this))();
(function Biasa(){
    console.log(this);
})();
function Mahasiswa(){
    this.nama = 'Sofyan';
    this.thisItuApa = () => {
        console.log(this);
    }
}
new Mahasiswa().thisItuApa();
const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let size = 'size';
    let caption = 'caption';
    let temp;

    if(this.classList.contains('size')){
        temp = size;
        size = caption;
        caption = temp;
    }
    this.classList.toggle(size);
    setTimeout(() => {
        this.classList.toggle(caption);
    },600)
});
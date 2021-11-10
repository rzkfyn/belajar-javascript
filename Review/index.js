'use strict';

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

/* ============================================================ Execution Context, Hoisting & scope ============================================================ */
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
// const arrowFunction = (() => console.log(this))();
// (function Biasa(){
//     console.log(this);
// })();
// function Mahasiswa(){
//     this.nama = 'Sofyan';
//     this.thisItuApa = () => {
//         console.log(this);
//     }
// }
// new Mahasiswa().thisItuApa();
// const box = document.querySelector('.box');
// box.addEventListener('click', function(){
//     let size = 'size';
//     let caption = 'caption';
//     let temp;

//     setInterval(() => {
//         if(this.classList.contains('size')){
//             temp = size;
//             size = caption;
//             caption = temp;
//         };
//         this.classList.toggle(size);
//         setTimeout(() => {
//             this.classList.toggle(caption);
//         },600);
//     }, 600);
// });
// const add = function(){
//     let i = 0;
//     return function(){
//         return i, i+=1;
//     }
// };

// let a = add();

// setInterval(() => {
//     document.write(`${new Date().getDay()}`);
// }, 1000);

/* ======================================================== Higher Order Function =========================================================== */

/**
 * Higher order function merupakan fungsi yang menggunakan fungsi lain sebagai argumen(callback) ataupun 
 * fungsi yang return value nya fungsi lain
 */

/* Contoh - contoh Higher Order Function */
// const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// 1. filter
// const newAngka = angka.filter(e => e >= 3);
// console.log(newAngka);
// console.log(' ');

// 2. map
// const newAngka1 = angka.map(e => e*2);
// console.log(newAngka1);
// console.log(' ');

// 3. reduce
/* 
rumus : namaArray.reduce(function(acumulator, currentvalue){
    kode disini, nilai-awal(opt, default = 0);
}) 
*/
// const newAngka2 = angka.reduce((a,cv) => a+cv);
// console.log(newAngka2);
// console.log(" ");

/* Chaining Method */
// Menyatukan beberapa method
// const newAngka3 = angka.filter(e => e>5)
//     .map(e => e*3)
//     .reduce((a,b) => a+b, 10)
//     .toString();
// console.log(newAngka3);


/* Latihan Higher Order Function */
// 'use strict';
// const list = document.querySelectorAll('li');
// const videoJavaScript = [];
// for(const daftar of list){
//     if(daftar.innerText.toString().startsWith("JAVASCRIPT")) videoJavaScript.push((daftar.getAttribute('data-duration').split(":")));
// }

// let totalMenit = 0;
// let totalDetik = 0;
// for(let vid of videoJavaScript){
//     totalMenit += (vid[0]*1);
//     totalDetik += (vid[1]*1);
// }
// console.log(totalDetik);
// let totalKeseluruhanDetik = ((totalMenit*60) + totalDetik);
// console.log(totalDetik);
// const jam = (totalKeseluruhanDetik - totalKeseluruhanDetik % 3600) / 3600;
// const menit = (((totalKeseluruhanDetik % 3600) - ((totalKeseluruhanDetik % 3600) % 60)) / 60);
// const detik = ((totalKeseluruhanDetik % 3600) % 60);
// console.log(jam, menit, detik);

// document.querySelector('.total-durasi').innerText = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
// document.querySelector('.jumlah-video').innerText = videoJavaScript.length;

/* The Right Way */
// const videos = Array.from(document.querySelectorAll('[data-duration]'));
// const jsVideos = videos.filter(e => e.textContent.includes('JAVASCRIPT LANJUTAN'))
//     .map(e => e.getAttribute('data-duration'))
//     .map(e => e.split(":"))
//     .map(e => {
//         return (e[0] * 60) + parseInt(e[1]);
//     })
//     .reduce((a,b) => a+b);

// const jam = Math.floor(jsVideos / 3200);    
// const menit = Math.floor((jsVideos - jam*3600) / 60);
// const detik = jsVideos - ((jam*3600) + (menit*60));
// console.log(jam, menit, detik);

/* ======================================================== Template Literals || Template String=========================================================== */
// const nama = "Sofyan";
// const umur = 10;
// console.log(`Halo nama saya adalah ${nama} dan saya berumur ${umur} tahun`);

// Expression
// const x = 10;
// console.log(`${x === 10 ? 'ya' : 'tidak'}`);

// // HTML Fragment
// const mhs = {
    //     nama : 'Mohamad Rizki Sofyan',
    //     umur : 17,
    //     nrp : 1237347,
    //     email : 'rzkfyn@gmail.com'
    // };
    // const el = `
    // <div class="mhs">
    //     <ul>
    //         <li>Nama : ${mhs.nama}</li>
    //         <li>umur : ${mhs.umur}</li>
    //         <li>nrp : ${mhs.nrp}</li>
    //         <li>email : ${mhs.email}</li>
    //     </ul>
    // </div>`;
    // console.log(el);
    // document.querySelector('body').innerHTML = el;

/* ======================================================== Latihan Template Literals || Template String=========================================================== */
// 1. Loping

// const mhs = [
//     {
//         nama : 'Rizki',
//         email : 'rzkfyn@gmail.com'
//     },
//     {
//         nama : 'Dodi',
//         email : 'rzkfyn@gmail.com'
//     },
//     {
//         nama : 'Erik',
//         email : 'rzkfyn@gmail.com'
//     }
// ];
// const el = `
// <div class="mhs"> 
//     ${mhs.map( e => `<h3 class="nama">${e.nama}</h3><span class="email">${e.email}</span>`).join(" ")}
// </div>`;
// console.log(el);
// document.body.innerHTML = el;   






/* ======================================================== Tagged Template Literals=========================================================== */
// let nama = "Sofyan";
// let umur = new Date().getFullYear() - 2004;
// const email = 'rzkfyn@gmail.com';
// function iniFungsi(strings, ...values){
//     let str = '';
//     let i = 0;
//     strings.forEach(element => {
//        return str += `${element} <span class="elemen">${values[i] || ''}</span>`, i ++;;
//     });
//     return document.body.innerHTML = str;
// }
// console.log(iniFungsi`Halo nama saya adalah ${nama}, dan saya berumur ${umu

// document.querySelector('button').addEventListener('mouseover', function(){
//     this.parentElement.parentElement.style.transition = '0.5s';
//     this.parentElement.parentElement.style.transform =`translateY(${Math.floor(Math.random() * ((window.outerHeight - 250) - 10) + 10)}px) translateX(${Math.floor(Math.random() * ((window.innerWidth - 250) - 10) + 10)}px)`;
// })

/* ======================================================== Destructuring Assignment =========================================================== */
/* Destrycturing Array || Variable */
// const perkenalan = "Halo nama saya Sofyan"
// const array = perkenalan.split(" ");
// console.log(array);
// const[satu, dua, tiga, empat] = array;
// console.log(satu);

// Skipping Item(s)
// const angka = [1,2,3,4,5];
// const [satu1,dua2, , ,lima] = angka;
// console.log(satu1,dua2,lima);

// swap item(s)
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Rest Parameter
// const myWaifu = ['Yoroizuka Mizore', 'Isla', 'Siesta'];
// const [hidup, ...mayat] = myWaifu;
// console.log(hidup);
// console.log(mayat);
// console.log(`Hidup : ${hidup}`);
// console.log(`Mayat : ${mayat}`);

// directly destructuring array from return value
// const coba = function(){
//     return [1, 2];
// }
// const [m, k] = coba();
// console.log(m,k);

/* Destructuring Object */
// const saya = {
//     nama : "Mohamad Rizki Sofyan",
//     umur : 17
// }
// const {nama, umur} = saya;  
// console.log(nama, umur);

// Directly destructure an object without declaration
// ({nama, umur} = {nama : "Mohamad Rizki Sofyan", umur : 17});

// assign to a different variable name

// const saya = {
//     nama : "Mohamad Rizki Sofyan",
//     umur : 17
// }
// const {nama : n, umur : u} = saya;  
// console.log(n, u);

// Default Value
// const saya = {
//     nama : "Mohamad Rizki Sofyan",
//     umur : 17,
//     "email sekolah" : "rzkfyn@rfalfyan.tech"
// }
// const {nama, umur, ["email sekolah"] : e = 'default@rfalfyan.tech'} = saya;  
// console.log(nama, umur, e);

// Rest parameter
// const saya = {
//     nama : "Mohamad Rizki Sofyan",
//     umur : 18,
//     hobi : ['nafas', 'makan', 'minum']
// }
// const {nama, ...values} = saya;
//  console.log(nama);
//  console.log(values);

//  Directly Destructure Object to a function as an argument
// const mhs = {
//     nama : "Mohamad Rizki Sofyan",
//     umur : 17,
//     matKul : ['Bahasa Indonesia', 'Matematika', 'Sejarah'],
//     jurusan : 'Teknik Informatika',
//     nim : '12332211'
// }
// const getNim = function({nim : n = null}){
//     console.log(n);
// }
// getNim(mhs);
/* ======================================================== Destructuring Function =========================================================== */
// const kalkulasi = (a, b) =>{
//     return [a*b, a-b, a/b, a+b];
// }
// const [perkalian, pengurangan, pembagian, pertambahan] = kalkulasi(2,3);
// console.log(pertambahan);

// const kalkulasi = (a, b) =>{
//     return {
//         pertambahan : a+b,
//         pengurangan : a-b,
//         perkalian : a*b,
//         pembagian : a/b
//     };
// }
// const {pembagian, pertambahan }  = kalkulasi(12,10)
// console.log(pertambahan)

// const mhs = {
//     nama : 'Mohamad Rizki Sofyan',
//     umur : 17,
//     nim : '1122113445',
// }

// const salam = async ({nama, umur}) => {
//     return console.log(`Halo nama saya adalah ${nama}, dan umur saya adalah ${umur}`);
// }
// salam(mhs);

// const mhs = {
//     nama : 'Mohamad Rizki Sofyan',
//     umur : 17,
//     nim : '1122113445',
//     nilai : {
//         uts : 89,
//         uas : 90
//     }
// }
// const salam = async ({nama, umur, nilai : {uts, uas}}) => {
//     return console.log(`Halo nama saya adalah ${nama}, dan umur saya adalah ${umur} dan nilai uas saya : ${uas}`);
// }
// salam(mhs);

/* ======================================================== For of VS For In =========================================================== */
// For of bisa digunakan untuk tipe data iterable (String, Array, NodeList, arguments)

// const str = "bla bla bla";
// for(const huruf of str){
//     console.log(huruf);
// }

// const arr = [1,2,3,4,5];
// let i = 0;
// for(const a of arr){
//     i += a;
//     console.log(i);
// }

// const lists = document.querySelectorAll('li');
// console.log(lists);
// for(const list of lists){
//     list.innerHTML = `<s>${list.innerText}</s>`;
// }

// function tambahin(){
//     let hasil = 0;
//     for(let angka of arguments){
//         hasil += angka;
//     }
//     return hasil;
// }
// console.log(tambahin(1,2,3,4,5,6,7,8));

// For in bisa digunakn untuk looping data yang none iterable
// const mhs = {
//     nama : 'Mohamad Rizki Sofyan',
//     umur : 17,
// }
// for(const m in mhs){
//     console.log(mhs[m]);
// }

/* ======================================================== Spread Operator =========================================================== */
// Spread operator menggunakan sintaks ... berguna untuk memecah data iterable 

// Menyatukan Array
let arr1 = [1,2,3];
let arr2 = [5,6,7];
let arr3 = [...arr1, 4,...arr2]
console.log(arr3);

// Meng copy array
let mhs = ['Bambang', 'Ghuna', 'Nimning'];
let mhs2 = [...mhs];
console.log(mhs);
console.log(mhs2);

// Mengubah NodeList menjadi Array
const lists = document.getElementsByTagName('li');
const arrLists = [...lists];
console.log(arrLists);
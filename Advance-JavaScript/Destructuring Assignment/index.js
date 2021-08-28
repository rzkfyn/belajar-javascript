// Destucturing Variable / Assignment
// Merupakan Expression yang dapat "membongkar" nilai array atau properti pada objek

// Destructuring Array 
// const arr = [1,2,3,4];
// const [a,b,c,d] = arr;
//  Nah kek gini nih jadi array nya tuh dipecah
// Maksudnya dipecah tuh ada a yang jadi index ke 0, b jadi index ke 1
// Nah disana nama variable na boleh bebas 
// Disana aink pake abc males ngetik doang
// Jadi intinya kalo mau nge destructur Array jadi deklarasiin variable 
// nya tuh pake [] kek array lagi ya. Dan itu ngurut bre variable nya misal
// const [a,b,c] = angka; nah, a isinya 1 b isinya 2 dan seterusnya
// gimana kalo lu mau ngeskip? karena  mungkin kan nati g semua array lu pecah karena ga butuh
// Nah itu ada caranya bre

//  Skipping Array Elements
// Nah kek gini jadi yang lu gabakal pake tinggal pake koma terus kosongin
// Gk usah isi nama variable
// const [a, , ,d] = arr;
// console.log(a,d);
// nah disini keluarnya pastinya 1 sama 4 karena yang 2 ama 3 kita skip

// Swap items
// Nah bre ada yang keren lagi nih dari destructuring 
// kita bisa swap or tuker isi variable tanpa variable ketiga aseek
// Caranya keren dan gampang banget bre kek gini nih : 
// let a = 7;
// let b = 8;
// [a,b] = [b,a];
// console.log(a);
// nah pas a dipanggil dah pasti dong nilainya 8 karena dah kita swap

// Destructuring function return value
// Ini sama aja kaya array biasa cuma pake fungsi doang
// const ceritanyaIniFungsi = () => {
//     return [1,2,3,4];
// }

// const [a,b,f,g] = ceritanyaIniFungsi();
// console.log(a,f);

// Rest Parameter
// const angka = [1,2,3,4,5,6,7];
// const [a, ...b] = angka;
// console.log(a);
// console.log(b);

// Destructuring object
// Nah sekarang Destructuring object yang sintaksnya pasti beda sama sintaks mecah array 
// kalo array pake [] nah kalo object pake {} kaya bikin object
// Nah kalo di Array bebas kan lu mau ngasih nama apa variable nya
// Kalo di object tuh ga bisa kek gitu man
// Jadi nama variable nya itu harus sama kaya properti di object nya
// let saya = {
//     nama : "Rizki Sofyan",
//     umur : new Date().getFullYear() - 2004,
// }

// Nah kek gini nih 
// const { nama, umur } = saya;
// console.log(nama);
// ini kalo gua deklarasinya kaya const {a,b} = saya
// terus dipanggil gitu kek console.log(a);
// Nah itu tuh bakal gak error tapi muncul undefined bre karena kenapa ya karna 
// kata gua tadi mecah object itu ga sama kaya mecah array
// nama variable nya ga bebas

// Memberikan nilai default
// let saya = {
//     nama : "Rizki Sofyan",
//     umur : new Date().getFullYear() - 2004,
//     email : "rizkisofyan54@gmail.com"
// }

// const { nama, umur, email = "defaultemail@gmail.com" } = saya;
// Jadi akan mencari dulu apakah ada email dalam object saya jika tidak ada maka 
// akan diisi default@gmail.com tapi jika ada properti email di objek saya maka yang akan 
// dikeluarkan saat dipanggil adalah email pada properti;
// console.log(email);
// yang akan keluar adalah rizkisofyan54@gmail.com bukan nilai defaultnya;
// anjas bahasanya rada baku gua disini xixi

// Asign pada variable lain
// let saya = {
//     nama : "Rizki Sofyan",
//     umur : new Date().getFullYear() - 2004,
//     email : "rizkisofyan54@gmail.com"
// }
// Jadi gini bre ya kan kalo di Array kita bebas pake nama apapun di variable nya
// beda sama objek harus sama misal kan disana ada nama umur nah pas make destructuring variable
// jadinya gini const { nama, umur } = saya;
// Gakbisa bebas kaya array namanya kaya const {a,b} = saya
// nah Kalo kek gitu ntar keluarnya "undefined"
// tapi ada cara buat ngubah namanya kek gini nih 
// const { nama: n, umur : u, emai : e} = saya; // nah jadi itu ngubah variable nama ke n, umur ke u, dan seterusnya.
// console.log(n); 
//nah pas dipanggil yang keluar bakal nama dan tapi nih tapi
// pas kita ngeconsole.log nya kaya gini
// console.log(nama);
// nah bakal ada error kek gini 
/**
 * index.js:71 Uncaught ReferenceError: nama is not defined
    at index.js:71
(anonymous) @ index.js:71
 */
// Nah bakal error ya ges ya karena variabel nama udah kita ubah ke n jadi nama udah gak dikenal lagi sama js nya

// Memecah object saat dijadikan argument di function
// Nah disini contohnya kek gini nih
// Biasanya kan kita kalo bikin fungsi ambil nama misal
// Nah parameter nya argument
// let saya = {
//     nama : "Rizki Sofyan",
//     umur : new Date().getFullYear() - 2004,
//     email : "rizkisofyan54@gmail.com"
// }
// Kek gini nih : 
// function getNama(object){
//     return object.nama;
// }
// console.log(getNama(saya));
// Nah yang keluar nama kan 
// Tapi nih tapi di fungsi itu kita cuma mau ngambil nama kan 
// tapi pas object saya dijadiin argument / isi parameter dfungsinya
// Semua propertinya masuk nah gimana dong caranya biar nama doang yang masuk kan
// kita cuma butuh negeluarin nama.
// Caranya ya pecah kek gini nih

// function getNama({nama}){
//     return nama;
// }
// console.log(getNama(saya));

// Nah yang keluar tetep "Rizki Sofyan"

// Aneh bet gua wkwk padahal buat catatn pribadi tapi kata katany kaya buat ngajarin orang
// Hadeh dasar Sofyan ("_>")
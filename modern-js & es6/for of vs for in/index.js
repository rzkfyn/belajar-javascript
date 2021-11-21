// Jadi gini for ..of sama for ..in ini tuh pengulangan / looping baru di moderen js
// Masing masing punya fungsi yang cukup sama ya gitu kaya for yang lain
// buat ngulang

// 1. FOR ...OF
// for ...of merupakaan pengulangan yang dapat menelusuri objek objek yang iterable
// for ..of array
// const mhs = ["Bambang", "Bimbing", "Bumbung"];

// for(const mahasiswa of mhs){
//     console.log(mah)
// }

// method entries
// for(const mahasiswa of mhs.entries()){
//     const [i, m] = mahasiswa;
//     console.log(`${m} merupakan mahasiswa ke ${i+1}`);
// }
// Nah gini jadi method entries itu fungsinya pas kita negluarin variable 
// mahasiswa diatas ntar yang keluar itu array, bukan cuma element nya aja tapi ada juga indexnya
// Nah ini digunain kalo misal lu butuh indexnya y kan kalo do for each itu gampang 
// di call back function nya tinggal ngasih argument buat indexnya tapi kalo di For of g bisa
// nah jadi, makelah alternatif method entries

// for ..of String
// const nama = "Sofyan";
// for(n of nama){
//     console.log(n);
// }
// ini kalo nge for of string yang dibalikin pasti huruf huruf nya y 

// for ..of NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(e => console.log(e));
// for(let a of liNama){
//     console.log(a.textContent);
// }
// Inimah ez lah yang dikembaliin pasti element2 html di node list nya 
// Nah ini tuh guna banget gaes karena nodelist tuh bukan array murni jadi g bisa 
// pake for each pake for biasa bisa sih tapi males kan panjang (kalo gua sih gitu karena pemalas)
// jadi pakenya for of

// for ..of arguments
// function jumlahAngka(){
//     let hasil = 0;
//     for(let angka of arguments) hasil += angka;
//     console.log(arguments);
//     return hasil;
// }

// console.log(jumlahAngka(1,3,4,5,6,7,8,9));


// 2. FOR ..IN
// for of object?
// const saya = {
//     nama : "Sofyan",
//     umur : 16,
//     email : "rizkisofyan54@gmail.com"
// }

// for(const o of saya){
//     console.log(o);
// }
// ya gabisa bakalan error 
// Uncaught  TypeError: saya is not iterable
// at index.js:44
// (anonymous) @ index.js:44
// Karena object bukan iterable 
// Nah sebagai gantinya bisa pake for in

// for(let s in saya){
//     console.log(`${s}: ${saya[s]}`);
// }


// Jadi gini intinya for ..of itu cuman bisa ngulang semua iterable objek
// Tapi guna banget nih kaya di function, itu kita g bisa tuch pake kek foreach
// reduce atau yang lain karena arguments itu bukan array murni nah jadi guna banget
// asli g boong gunanya pake banget.
// nah buat non iterable object kita kalo mau ngulang pakenya for ..in ya ges ya
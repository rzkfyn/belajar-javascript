// Method Pada Array

// 1. length (mengembalikan jumlah array);
// contoh :
// const arr = [1,2,3,4,5];
// console.log(arr.length);
// output : 5

// 2. Method pop dan push
// 2.1. Pop (menghapus nilai yang berada di index akhir)
// contoh : 
// let arr = [1,true,'Siesta','Fyan'];
// arr.pop();
// console.log(arr);
// output : [1, true, "Siesta"]
// 2.2 Push (Menambah isi array baru di bagian akhir (bisa lebih dari 1))
// contoh :
// let arr = [1,2,true,false,];
// arr.push("maman", 1, 3);
// console.log(arr);
// output : [1, 2, true, false, "maman", 1, 3]

// 3. Method shift dan unshift
// 3.1 shift (menghapus nilai array di index awal)
// contoh : 
// let arr = [1,"fyan",true,123];
// arr.shift();
// console.log(arr);
// output : ["fyan", true, 123]

// 4. Splice (menambah isi array pada index yang diinginkan)
// Rumus :
// namaArray.slice(indexke, jumlahYangInginDihapus(opt), elemenBaru);
// Contoh : 
// let arr = [1, "Sofyan", true];
// arr.splice(0/*Ditambah dari index berapa*/, 0/*Berapa jumlah yang ingin dihapus*/, "Refal", 12, false/*Elemen - elemen baru*/);
// console.log(arr);
// output :  ["Refal", 12, false, 1, "Sofyan", true]

// 5.Splice (mengembalikan potongan array dari index yang di tentukan ke index yang ditentukan juga)
// Rumus :
// namaArray.splice(indexAwal, indexAkhir);
// contoh : 
// let arr = ["Siesta", 1, true, "Yoroizuka", "Hanami"];
// let a = arr.splice(0, 3);
// console.log(a);
// output : ["Siesta", 1, true]

// 6.Map (Mengembalikan array juga tapi sudah kita modifikasi/adajuga lainnya tapi aing males jelasin);
// Rumus : namaArray.map(fungsiUntukMemodifikasiArraynya);
// contoh : 
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arr1 = arr.map(function(elemen){
//     return elemen*2;
// });
// console.log(arr1);
// output : [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 7.Filter dan Find
// 7.1 Filter (memfilter sesuai anuan yang ditentukan)
// Contoh :
// let arr = [1,2,4,5,6,10,89,2432,445,34,22,12];
// let arr1 = arr.filter(function(elemen){
//     return elemen < 10;
// });
// console.log(arr1);
// output : [1, 2, 4, 5, 6]
// 7.2 Find (Mirip filter tapi yang dikembalikan hanya satu dan yang pertama ditemukan);
// contoh :
// let arr = [1,2,4,5,6,10,89,2432,445,34,22,12];
// let arr1 = arr.find(function(elemen){
//     return elemen < 10;
// });
// console.log(arr1);
// output : 1

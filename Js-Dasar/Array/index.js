/*  =============== Array =============== */
// Array merupakan tipe data yang bisa menyimpan banyak data dan disimpan dalam index
// index array selalu dimulai dari 0
let arr = [1,"Sofyan",true,89.7];
console.log(arr.length); // Output 4;
console.log(arr);
console.log(" ");
/*  =============== Method Pada Array =============== */
// pop (Menghapus elemen array terakhir)
arr.pop();
console.log(arr);
console.log(" ");
// push (Menambahkan elemen array pada posisi akhir)
arr.push("Sofyan", "Bambang");
console.log(arr);
console.log(" ");
// shift (Menghapus elemen array pertama)
arr.shift();
console.log(arr);
console.log(" ");
// unshift (Menambahkan elemen array pada posisi awal)
arr.unshift(1, false);
console.log(arr);
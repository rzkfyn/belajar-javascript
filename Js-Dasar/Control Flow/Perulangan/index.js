/* =============== Perulangan =============== */ 

// 1. for
console.log("Perulangan for : ");
for(let i = 0/*Insisialisasi nilai awal (determinasi)*/; i < 10 /*Terminasi (penghentian)*/; i++){
    console.log(`Hello World ${i+1}`);
}
console.log(" ");

// do while
console.log("Perulangan do while : ");
let i = 0;/*Insisialisasi nilai awal (determinasi)*/
do{
    console.log(`Hello World ${i+1}`);
    i++;
}while(i<10);/*kondisi penghentian (terminasi)*/
console.log(" ");

// while
console.log("Perulangan while : ");
let j = 0;/*Insisialisasi nilai awal (determinasi)*/
while(j < 10)/*Terminasi (penghentian)*/{
    console.log(`Hello World ${j+1}`);
    j++;
}
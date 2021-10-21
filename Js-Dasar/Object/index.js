/*  =============== Object ===============*/

// Object Literal
let siswa = {
    nama : "Mohamad Rizki Sofyan",
    umur : new Date().getFullYear() - 2004,
    nisn : 123444,
    energi : 10,
    makan : function(porsi){
        this.energi += porsi;
        return `${this.nama} Sekarang memiliki energi sebesar ${this.energi}`;
    }
}
console.log(siswa.makan(2));

// Object Function Expression
function siswa2(nama, umur, nisn) {
    let siswa = {};
    siswa.nama = nama;
    siswa.umur = umur;
    siswa.nisn = nisn;
    siswa.energi = 10;
    siswa.makan = function (porsi) {
        this.energi += porsi;
        return `${this.nama} Sekarang memiliki energi sebesar ${this.energi}`;
    };
    return siswa;
}
console.log(siswa2("Sofyan", 17, 12334).makan(2));

// constructor function
let Siswa = function(nama, umur, nisn){
    this.nama = nama;
    this.umur = umur;
    this.nisn = nisn;
    this.energi = 10;
    this.makan = function(porsi){
        this.energi += porsi;
        return `${this.nama} Sekarang memiliki energi sebesar ${this.energi}`;
    }
}
const sofyan = new Siswa("Sofyan", 17, 1890);
console.table(sofyan);
sofyan.makan(2);
console.table(sofyan);

//ES6 class
class Mahasiswa{
    constructor(nama, umur, nisn){
        this.nama = nama;
        this.umur = umur;
        this.nisn = nisn;
        this.energi = 10;
        this.makan = function(porsi){
            this.energi += porsi;
            return `${this.nama} Sekarang memiliki energi sebesar ${this.energi}`;
        }
    }
}

console.log(new Mahasiswa("Sofyan", 17, 12334).makan(3));
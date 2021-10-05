'use strict';

// Object Literal
const saya = {
    nama : "Mohamad Rizki Sofyan",
    umur : new Date().getFullYear() - 2004,
    alamat : {
        Negara : "Indonesia",
        Provinsi : "Jawa Barat",
        Kabupaten : "Bandung"
    }
};

// function object
const saya1 = (nama, umur) => {
    const saya = {}
    saya.nama = nama;
    saya.umur = umur;
    return saya;
}
//Class Object
const saya2 = function(nama, umur){
    this.nama = nama;
    this.umur = umur;
}
saya2.prototype.makan = function(){
    return this.nama.concat(" Sedang makan");
}

class Saya3{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
}
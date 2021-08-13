//1.Objek Literal
// let saya = {
// 	nama : "Mohamad Rizki Sofyan",
// 	umur : new Date().getFullYear() - 2004,
// 	hoby : "-"
// }

//2.function object
// /**
//  * 
//  * @param {String} nama 
//  * @param {Number} umur 
//  * @param {Array} hobi 
//  */
// let mahasiswa = (nama,umur,hobi) => {
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.umur = umur;
// 	mahasiswa.hobi = hobi;

// 	return mahasiswa;
// }

// const sofyan = mahasiswa("Mohamad Rizki Sofyan", 15, ['playing rhythm game']);

//3.1 Constructor function version
// /**
//  * 
//  * @param {String} nama 
//  * @param {Number} umur 
//  * @param {Array} hobi 
// */
// function Mahasiswa(nama,umur,hobi){
// 	this.nama = nama;
// 	this.umur = umur;
// 	this.hobi = hobi;
// }

// const sofyan = new Mahasiswa("Mohamad Rizki Sofyan", 17, ['Playing Rhythm Game']);
//3.2 Contructor Class Version
// class Mahasiswa{
// 	/**
// 	 * 
// 	 * @param {String} nama 
// 	 * @param {Number} umur 
// 	 * @param {Array} hobi 
// 	 */
// 	constructor(nama,umur,hobi){
// 		this.nama = nama;
// 		this.umur = umur;
// 		this.hobi = hobi;
// 	}
// }
// const sofyan = new Mahasiswa("Mohamad Rizki Sofyan", 17, ['Playing Rhythm Game']);

// // 4.Object.create
// let methodMahasiswa = {
// 	/**
// 	 * 
// 	 * @param {Number} porsi 
// 	 */
// 	makan : function(porsi){
// 		this.energi += porsi;
// 		return `Selamat makan, ${this.nama}!`;
// 	},
// 	/**
// 	 * 
// 	 * @param {Number} jam 
// 	 */
// 	main : function(jam){
// 		this.energi -= jam;
// 		return `Selamat main, ${this.nama}`;
// 	},
// 	/**
// 	 * 
// 	 * @param {Number} jam 
// 	 */
// 	tidur : function(jam){
// 		this.energi += (jam * 2);
// 		return `Selamat main, ${this.nama}`;
// 	}
// }
// /**
//  * 
//  * @param {String} nama 
//  * @param {Number} umur 
//  * @param {Number} energi 
//  */
// let mahasiswa = (nama,umur,energi) => {
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.umur = umur;
// 	mahasiswa.energi = energi;

// 	return mahasiswa;
// }
// const sofyan = mahasiswa("Mohamad Rizki Sofyan", 17, 10);
// console.log(sofyan);

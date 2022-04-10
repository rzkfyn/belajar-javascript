/* DOM Manipulation */

/* Manipulasi Element */
const judul = document.getElementById('judul');
// innerText, mengubah isi text dari sebuah element.
judul.innerText = '<i>Ini Judul</i>';

// innerHtml, mengubah isi text dari sebuah element. *DI PARSE MENJADI HTML JIKA MENULISKAN TAG HTML
judul.innerHTML = '<i>Ini Judul</i>';

// style.propertyCss, mengubah style dari sebuah element. *Penulisan dengan gaya camel case jika properi css lebih dari satu kata.
judul.style.color = 'blue';
judul.style.fontSize = '20px';

// setAttribute(), set atau mengisi atribut pada sebuah element seperti id, href, class, dll.
judul.setAttribute('name', 'Judul');

// getAttribute(), mengambil isi atribut pada sebuah element.
console.log(judul.getAttribute('name'));

// removeAtribute(), menghapus atribut pada sebuah element.
judul.removeAttribute('name');

// classList.add(), menambah class.
// classList.remove(), menghapus class.
// classList.replace(), mengganti class.
// classList.contains(), mengganti class.
// classList.item(), mengambil class berdasar index yang diberikan.
// judul.classList.toggle(), menambah class jika tidak ada dan menghapus nya jika tidak ada.

/* Manipulasi Node */

// 1. Menambah node dengan appendChild();

// Membuat element baru
const p = document.createElement('p');
const text = document.createTextNode('Paragraf baru');

// simpan tulisan dalam paragraf
p.appendChild(text);

// simpan paragraf baru ke section A
document.querySelector('section#a').appendChild(p); // Bisa juga dengan parentNode.append();

// 2. Menambah node dengan insertBefore();

const li = document.createElement('li');
const liText = document.createTextNode('LI Baru');
li.appendChild(liText);
const ul = document.querySelector('section#b ul');

ul.insertBefore(li, ul.querySelector('li:nth-child(2)'));

// 3. Menghapus dan Mengganti Child, removeChild(element); replaceChild(node, childNode);

// Menghapus child
const link = document.getElementsByTagName('a')[0];

// Bisa juga dengan node.remove();
document.querySelector('section#a').removeChild(link);

// Mengganti child
const p4 = document.querySelector('#b p');
const h2 = document.createElement('h2');
const textH2 = document.createTextNode('Text H2');
h2.appendChild(textH2);

// Bisa juga dengan node.replaceWith();
document.querySelector('#b').replaceChild(h2, p4);

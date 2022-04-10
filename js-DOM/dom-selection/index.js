/* DOM Selection */

/* DOM Selectionn method */
/*
- getElementById(); => element
- getElementsByTagName(); => HTMLCollection
- getElementsByClassName(); => HTMLCollection
- querySelector(); => element
- querySelectorAll(); => NodeList
*/

/*
// getElementById();
// Mengambil elemen berdasarkan id, return: element
const judul = document.getElementById('judul');
judul.style.color = 'Blue'
judul.style.backgroundColor = 'Lime'


// getElementsByTagName();
// Mengambil elemen - elemen berdasarkan nama tag, return: HTMLCollection
// Tetap mengembalikan HTMLCollection meski elemen berjumlah 1
const p = document.getElementsByTagName('p');
for(const a of p) {
    a.style.backgroundColor = 'lightblue';
}

// getElementsByClassName();
// Mengambil elemen - elemen berdasarkan nama class, return: HTMLCollection
// Tetap mengembalikan HTMLCollection meski elemen berjumlah 1
const p1 = document.getElementsByClassName('p1');
p1[0].innerText = 'Hewwo';
*/

/*
// querySelector();
const judulv2 = document.querySelector('ul li:nth-child(2)');
judulv2.style.backgroundColor = 'lime';

// querySelector();
// Mengambil elemen - elemen berdasarkan selector yang kita berikan sama seperti pada css, return: nodeList
const p = document.querySelectorAll('p');
setInterval(() => {
    const colors = ['red', 'blue', 'green'];
    p.forEach(el => {
        el.style.color = colors[Math.floor(Math.random() * (p.length - 0) + 0)];
    });
}, 500);
*/

// Mengubah node root
// const b = document.getElementById('b');
// const p4 = b.getElementsByTagName('p')[0];
// p4.innerText = 'Hello World';
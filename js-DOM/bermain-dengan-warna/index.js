// const inputs = document.getElementsByTagName('input');
// const redInput = document.querySelector('.red input');
// const greenInput = document.querySelector('.green input');
// const blueInput = document.querySelector('.blue input');

// for(const input of inputs) {
//     input.max = 255;
// }

// document.querySelector('.red .color').style.backgroundColor = `rgb(${redInput.value}, 0, 0)`;
// redInput.addEventListener('input', function(){
//     document.querySelector('.red .color').style.backgroundColor = `rgb(${this.value}, 0, 0)`;
//     document.body.style.backgroundColor = `rgb(${this.value}, ${greenInput.value}, ${blueInput.value})`;
// });

// document.querySelector('.green .color').style.backgroundColor = `rgb(0, ${document.querySelector('.green input').value}, 0)`;
// document.querySelector('.green input').addEventListener('input', function(){
//     document.querySelector('.green .color').style.backgroundColor = `rgb(0, ${this.value}, 0)`;
//     document.body.style.backgroundColor = `rgb(${redInput.value}, ${this.value}, ${blueInput.value})`;
// });

// document.querySelector('.blue .color').style.backgroundColor = `rgb(0, 0, ${document.querySelector('.blue input').value})`;
// document.querySelector('.blue input').addEventListener('input', function(){
//     document.querySelector('.blue .color').style.backgroundColor = `rgb(0, 0, ${this.value})`;
//     document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${this.value})`;
// });

/* The Right Way */

const tombolUbah = document.getElementById('tUbahWarna');
const body = document.body;

const tombolRandom = document.createElement('button');
const textTombol = document.createTextNode('Acak Warna');
tombolRandom.setAttribute('type', 'button');

tombolRandom.append(textTombol);
tombolUbah.after(tombolRandom);

tombolUbah.addEventListener('click', () => {
    // body.style.backgroundColor = 'lime';
    body.classList.toggle('biru-muda');
});

tombolRandom.addEventListener('click', () => {
    body.style.backgroundColor = `rgb(${Math.floor(Math.random() * (255 - 0) + 0)}, ${Math.floor(Math.random() * (255 - 0) + 0)}, ${Math.floor(Math.random() * (255 - 0) + 0)})`;
});

const sred = document.querySelector('input[name=sred]');
sred.addEventListener('input', function() {
    body.style.backgroundColor = `rgba(${this.value}, 100, 100)`;
});

document.addEventListener('mousemove', function(ev){
    const postX = Math.floor((ev.clientX / window.innerWidth) * 255);
    const postY = Math.floor((ev.clientY / window.innerWidth) * ev.clientY);
    console.log(postX, postY);
    body.style.backgroundColor = `rgb(${postX}, ${postY}, 50)`;
});
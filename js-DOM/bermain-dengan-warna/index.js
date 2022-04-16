const inputs = document.getElementsByTagName('input');
const redInput = document.querySelector('.red input');
const greenInput = document.querySelector('.green input');
const blueInput = document.querySelector('.blue input');

for(const input of inputs) {
    input.max = 255;
}

document.querySelector('.red .color').style.backgroundColor = `rgb(${redInput.value}, 0, 0)`;
redInput.addEventListener('input', function(){
    document.querySelector('.red .color').style.backgroundColor = `rgb(${this.value}, 0, 0)`;
    document.body.style.backgroundColor = `rgb(${this.value}, ${greenInput.value}, ${blueInput.value})`;
});

document.querySelector('.green .color').style.backgroundColor = `rgb(0, ${document.querySelector('.green input').value}, 0)`;
document.querySelector('.green input').addEventListener('input', function(){
    document.querySelector('.green .color').style.backgroundColor = `rgb(0, ${this.value}, 0)`;
    document.body.style.backgroundColor = `rgb(${redInput.value}, ${this.value}, ${blueInput.value})`;
});

document.querySelector('.blue .color').style.backgroundColor = `rgb(0, 0, ${document.querySelector('.blue input').value})`;
document.querySelector('.blue input').addEventListener('input', function(){
    document.querySelector('.blue .color').style.backgroundColor = `rgb(0, 0, ${this.value})`;
    document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value}, ${this.value})`;
});
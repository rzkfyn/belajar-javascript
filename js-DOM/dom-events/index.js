/* Event */
/* Event pada js merepresentasikan kejadian yang terjadi pada DOM */


/* Cara mendengarkan atatu mehandle event pada DOM */
// Event Handler, onnamaevent = function().

// contoh : 
document.getElementsByClassName('p3')[0].onclick = function() {
    this.style.backgroundColor = 'lightblue';
}

// Method addEventListener(), element.addEventListener('namaEvent', callbackFunction());
// contoh :
document.querySelector('section#b p').addEventListener('click', function() {
    const li = document.createElement('li');
    const liText = document.createTextNode('List Baru!');

    li.append(liText);
    document.querySelector('section#b ul').append(li);
});
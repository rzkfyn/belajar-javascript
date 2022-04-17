/**
 * @type {HTMLButtonElement} closebtn
 */
const closebtn = document.querySelector('.close');

closebtn.addEventListener('click', function(){
    console.log(this.parentElement.previousElementSibling.remove());
    // return this.parentElement.parentElement.remove();
});
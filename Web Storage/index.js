const KEY = 'item';

const checkStorage = () => {
    return typeof(Storage) === 'undefined' ? false : true;
}

checkStorage() ? alert("Browser anda tidak mensupport web storage") : console.log('aman');

if(localStorage.getItem(KEY) === null) localStorage.setItem(KEY, 'item-pertama');
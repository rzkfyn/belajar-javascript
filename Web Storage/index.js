const KEY = 'item';


const checkStorage = () => {
    return typeof(Storage) === 'undefined' ? false : true;
}

if(!checkStorage()) alert("Browser anda tidak mensupport web storage");

if(localStorage.getItem(KEY) === null) localStorage.setItem(KEY, 'item-pertama');
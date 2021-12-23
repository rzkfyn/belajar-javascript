function getSiswaData(method, url, success, error){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState !== 4) return;
        if(xhr.status != 200) return error(xhr.response);
        return success(xhr.response);
    });
    
    xhr.open(method, url);
    xhr.send();
}
function success(response){
    const mhs = JSON.parse(response);
    for (const mh of mhs) {
        console.log(mh.nama);
    }   
    console.log(typeof(mhs));
    console.log(mhs.map(m => m.nama));
}
console.log('mulai');
getSiswaData('get', './siswa.json', success, error => {
    console.error(error);
});

const janji = function(waktu){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(waktu >= 5000) return reject('Kelamaan!');
            return resolve('Berhasil');
            }, waktu);
        });
} 

async function ambilJanji(){
    try{
        let a = await janji(1000);
        console.log(a);
    }catch(e){
        console.error(e);
    }finally{
        console.log('Berhasil Menunggu!');
    }
}
ambilJanji();
console.log('Selesai');
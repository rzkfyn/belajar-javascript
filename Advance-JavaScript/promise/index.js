let ditepati = true;

// const janji = new Promise((resolve, rejected) => {
//     if(ditepati) return resolve('Ditepati');
//     return rejected('Tidak ditepati');
// });

// janji
//     .then(res => console.log(res))
//     .catch(res => console.log(res));

const janji2 = new Promise((resolve, reject) => {
    if(ditepati){
        setTimeout(() => {
            resolve('Ditepati beberapa waktu');
        }, 2000);
    }else{
        setTimeout(() => {
            reject('Tidak di tepati beberapa waktu');
        }, 2000);
    }
});

janji2
    .then(res=> console.log(res))
    .catch(err => console.log(err))
    .finally(console.log('Selesai Menunggu'));
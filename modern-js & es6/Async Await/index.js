// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Selesai')
//     }, 2000);
// });

// promise.then(res => console.log(res));

function cobaPromise(){
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('Selesai');
            }, waktu);
        }else{
            reject('Kelamaan');
        }
    });
}

const coba = cobaPromise();
coba
    .then(res => console.log(res))
    .catch(err => console.error(err))
    .finally(console.log("Telah selesai"));

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (e) {
        console.error(e);
    } finally {
        console.log('Telah Selesai!');
    }
}
cobaAsync();
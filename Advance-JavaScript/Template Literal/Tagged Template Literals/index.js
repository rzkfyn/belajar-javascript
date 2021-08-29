// Tagged Template literals merupakan bentuk template literal yang lebih kompleks

// Contoh

const tag = function(Strings, ...property){
    // let result = "";
    // Strings.map((e,i) => {
    //     result += `${e}${property[i] || ''}`;
    // });
    // return result;

    return Strings.reduce((awal,komponen,i) => `${awal}${komponen}${property[i] || ''}`,"");
}
const nama = "Sofyan";
const umur = 16;
console.log(tag`Halo nama saya adalah ${nama}, dan saya berumur ${umur} tahun`);

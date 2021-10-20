/* =============== Pengkondisian =============== */

const nama = "Sofyan";

/* 1. Pengkondisian If, if else, dan if ifelse else. */
//if
if(nama === "Sofyan"){
    console.log("Halo "+nama);
}
//if else
if(nama !== "Sofyan"){
    console.log(`Halo ${nama}`);
}else{
    console.log("Nama Tidak Dikenali");
}
//if ifelse else
if(nama === "Sofyan"){
    console.log(`Halo ${nama}`);
}else if(nama === "Bambang"){
    console.log(`Halo ${nama}`);
}else{
    console.log("Nama Tidak Dikenali");
}

/* 2. Ternary*/
nama === "Sofyan" ? console.log("Ya") : console.log("Tidak");

/* 3. Switch*/
switch(nama){
    case "Sofyan":
        console.log(`Halo ${nama}`);
        break;
    case "Bambang":
        console.log(`Halo ${nama}`);
        break;
    default:
        console.log('Nama tidak dikenali');
}
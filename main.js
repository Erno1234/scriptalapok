window.addEventListener("load",init)
function init(){
    console.log("hahó");
    var valt1 ="2";
    let valt2 = 2.4;
    const VALT3 = 2;
    console.log("valt1", typeof valt1)
    console.log("valt2", valt2, typeof valt2)
    console.log("VALT3", valt2, typeof VALT2)
    
    let logikai = 3<5;
    console.log("logikai", logikai, typeof logikai)
    let eredmeny = valt1 + valt2;
    console.log("eredmeny", eredmeny, typeof eredmeny)
    elegazasok();
}
function elegazasok(){
    var szam = 19;
    if (szam % 2 == 0){
        console.log("páros");
    }else{
        console.log("páratlan");
    }


    var nap = parseInt(Math.random()*7)+1;
    switch(nap){
        case 1:
            console.log("Hétfő");
            break;
        case 2:
            console.log("Kedd");
            break;
        case 3:
            console.log("Szerda");
            break;
        case 4:
            console.log("Csütörtök");
            break;
        case 5:
            console.log("Péntek");
            break;
        case 6:
            console.log("Szombat");
            break;
        case 7:
            console.log("Vasárnap");
            break;
        default:
            console.log("Nincs ilyen nap");
    }
}
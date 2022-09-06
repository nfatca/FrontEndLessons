
function selamVer() {
    console.log("Merhaba");
}

selamVer();
const selamVerDegisken = function() {
    console.log("Merhaba selamVerDegisken");
}
selamVerDegisken();







const fatArrow = () => {                //function kelimesinden kurtulduk.
    console.log("Merhaba fatarrow");
}
fatArrow();







const fatArrow2 = _ => {               //"_" function ama herhangi bir parametre almıyor demektir. 
    console.log("Merhaba fatarrow2");
}
fatArrow2();







function karesiniAl(sayi) {
    return sayi*sayi;
}
const karesiniAlDegisken = function (sayi) {
    return sayi*sayi;
}
console.log(karesiniAl(5));
console.log(karesiniAlDegisken(7));







const fatArrowParametreli = (sayi) => {
    return sayi * sayi;
};
console.log(fatArrowParametreli(8));







const fatArrowParametreliKisa = sayi => {     //Tek parametre varsa parantez kullanmaya gerek yok
    return sayi * sayi;
};
console.log(fatArrowParametreliKisa(9));







const fatArrowParametreliKisa2 = sayi => sayi * sayi;   //return varmış gibi döndürür.
console.log(fatArrowParametreliKisa2(10));







const sayilariTopla = (s1, s2) => s1 + s2;
console.log(sayilariTopla(5,10));
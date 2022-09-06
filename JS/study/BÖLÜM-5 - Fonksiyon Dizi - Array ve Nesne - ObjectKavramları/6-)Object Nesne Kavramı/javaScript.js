let sezer = {
    adi: 'Sezer',                   //key:'değer', 
    soyAdi: 'Ökmen',
    dogumYili:'1992',
    evliMi:'false',
    sevdigiRenkler:['yeşil', 'mavi'],
    yasiHesapla:function(dogumYili){
        return 2022 - dogumYili;
    }
};
console.log(sezer);
console.log(sezer.adi);
console.log(sezer['soyAdi']);

let yasi = sezer.yasiHesapla(1992);
console.log(yasi);                          //1. Yol
console.log(sezer.yasiHesapla(1992));       //2. Yol



console.log("--------------------");



let sezer2 = {
    adi: 'Sezer',                   
    soyAdi: 'Ökmen',
    dogumYili:'1992',
    evliMi:'false',
    sevdigiRenkler:['yeşil', 'mavi'],
    yasiHesapla:function(){
        return 2022 - this.dogumYili;
    }
};
console.log(sezer2.yasiHesapla());



console.log("--------------------");



let sezer3 = {
    adi: 'Sezer',                    
    soyAdi: 'Ökmen',
    dogumYili:'1992',
    evliMi:'false',
    sevdigiRenkler:['yeşil', 'mavi'],
    yasiHesapla:function(){
     this.yas = 2022 - this.dogumYili;         //return yerine this dedik
    }
};
sezer3.yasiHesapla();
console.log(sezer3.yas);



console.log("--------------------");




let kisiler = [sezer, sezer2, sezer3];
console.log(kisiler);
console.log(kisiler[0].evliMi);



console.log("--------------------");



sezer2.soyAdi = "Ateş";             //soyAdi güncellemesi yaptık
console.log(kisiler[1].soyAdi);

sezer3['soyAdi'] = "Ateşşşşşşş";
console.log(kisiler[2].soyAdi);




console.log("--------------------");




let ayse = new  Object();           //Pek tercih edilmemektedir
ayse.adi = "Ayşe";
ayse.soyAdi = "Yılmaz";
console.log(ayse);




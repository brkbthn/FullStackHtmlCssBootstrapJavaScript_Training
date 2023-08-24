const bilgiler1=function(ad='bthn', soyad='dvrn'){
    console.log('bilgiler getiriliyor...'+ ad + ' '+ soyad);
    console.log( `ad soyad; ${ad} ${soyad}`);
}
bilgiler1();



const bilgiler2=function(ad, soyad){
    console.log('bilgiler getiriliyor...'+ ad + ' '+ soyad);
    console.log( `ad soyad; ${ad} ${soyad}`);
}
bilgiler2('batuhan', 'devran');


console.log('FONKSİYONLARDA RETURN');

const kareAlan=function(kenar){
    let alan=kenar**2;
    return alan;
}

console.log(kareAlan(6));



console.log("ARROW FUNCTİON");

const kareAlani = (kenar) =>{
    let alan=kenar**2;
    return alan;

}
console.log(kareAlani(6));



const kareAlanim = kenar => kenar**2;
    /*tek bit parametre alıyorsa parantez koymaya gerek yok 
    birden çok prametre alıyorsa virgül ve parantez kullanılmlıdır.
    eğer içerideki işlem tek satırsa bu şekilde bir tanımlama yapılabilir*/
 
    console.log(kareAlanim(5));


const berk = function(){
    return 'berk';
}

const sonuc = berk();
console.log(sonuc);

const batuhan = () => 'batuhan';
console.log(batuhan());

const fatura = function(urunler, vergi){
    let toplam = 0;
    for(let i=0; i<urunler.length; i++){
        toplam += urunler[i] + urunler[i]*vergi;
    }
    return toplam;
}
console.log(fatura([10, 20, 30], 0,25));


const faturam = (urunler, vergi) =>{
    let toplam=0;
    for(let i=0; i<urunler.length; i++){
        toplam += urunler[i] + urunler[i]*vergi;
    }
    return toplam;
    
}
console.log(faturam([10, 20, 30], 0,25));


//METHOD FUNCTION ARASINDAAKİ FARK 

const ad = "berk batuhan";

//arrow function
const brkbthn = () => 'berk batuhan';

let sonuc1 = brkbthn();
console.log(sonuc1);

//method
let sonuc2 = ad.toUpperCase();
console.log(sonuc2);


//FOREACH

const A = (callBackA) => {
    let yas = 40;
    callBackA(yas);
};
A(function(value){
    console.log(value);

})

let ogrencilerim = ['berk', 'batuhan', 'devran', 'tuana'];

ogrencilerim.forEach(function(){
    console.log("naber?");
})


ogrencilerim.forEach(function(kisi){
    console.log(kisi);
})
console.log("------------------------")

ogrencilerim.forEach(function(kisi,index){
    console.log(kisi, index);
})

const ogrenci = (kisi, index) =>{
    console.log(`${index} - ${kisi}`);
}

ogrencilerim.forEach(ogrenci);


//ornek


const ulum = document.querySelector('.main');

let html = ``;

ogrencilerim.forEach(x =>{
    html += `<li>${x}</li>`;
})
console.log(html);

ulum.innerHTML=html;

console.log('DOM MANTIĞI');

console.log('___________________________________________');

const hata=document.querySelector('p'); //ilk p etiketini seçer.
console.log(hata);//etiketiyle birlikte konsola bastırılır.

const error=document.querySelector('.error');//clası error olan ilk elementi seçer
console.log(error);

const divError=document.querySelector('div.error');
console.log(divError);
console.log('___________________________________________');

const hatalar=document.querySelectorAll('p');
console.log(hatalar);
console.log(hatalar[0]);//ayrı ayrı bastırmak

hatalar.forEach(hata =>{
    console.log(hata);
});//p etiketlerinin tamamı konsola bastırıldı

console.log('___________________________________________');

const baslık=document.getElementById('dom');
console.log(baslık);

const hatalarr=document.getElementsByClassName('error');
console.log(hatalarr);//html collection şeklinde clası error olanlar listelendi.
console.log(hatalarr[0]);

// hatalar.forEach(hata()=>{
//     console.log(hata);
// })  
//html colletciton foreach ile kullanılamaz.
console.log('___________________________________________');

const pEtiket=document.getElementsByTagName('p');
console.log(pEtiket);
console.log(pEtiket[1]);
//bu method da foreach ile birlikte kullanılamaz.

console.log('___________________________________________');


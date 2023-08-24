const form = document.querySelector('.signupForm');
const username = document.querySelector('#username');
form.addEventListener('submit', e=>{
    e.preventDefault();//sayfanın yenilenmesini engeller.
    console.log('form gönderildi!');
    console.log(username.value);// inputun içerisinin yazdırılmasının ilk yolu
    console.log(form.username.value);//inputun içerisinin yazdırılmasının ikinci yolu
});
console.log('--------------------------------');
console.log('REGEX');

const userName = 'berkkkk';
const pattern = /^[a-z]{6,10}$/;//min 6 max 10 tane küçük harten oluşmalı
console.log('ilk yol');
// let sonuc = pattern.test(userName);
// console.log(sonuc);

// if(sonuc){
//     console.log('basarılı');
// }
// else{
//     console.log('basarısız');
// }


console.log('2.yol');

let sonuc = userName.search(pattern);
console.log(sonuc);//başarısızsa -1 başarılıysa diğer 0-.. değerleri ekrana basılır



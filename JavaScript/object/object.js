//obje tanımlama

let ogrenci = {
    ad : 'berk',
    yas:20,
    email: 'brkbthn@gmail.com' ,
    sinif : 3,
    dersler:['yapay zeka', 'istaistik', 'java']
};
console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas = 23;
//yas bu sekilde update edildi
console.log(ogrenci.yas);

// bir diğer property bastırma şekli de şudur

console.log(ogrenci['ad']);
console.log(ogrenci['email']);

// bir diğer update etme şekli de şudur

ogrenci['ad'] = 'batuhan';
console.log(ogrenci.ad);

// objenşn içerisine nasıl method eklenir

let ogrencim = {
    ad : 'berk',
    yas:20,
    email: 'brkbthn@gmail.com' ,
    sinif : 3,
    dersler:['yapay zeka', 'istaistik', 'java'],
    login:function(){
        console.log('ogrenci giriş yaptı...');
    },
    logout/*:function*/(){
        console.log('ogrenci çıkış yaptı...');
    },
    printLessons(){
        console.log(this.dersler);//dersler erişebilmek için öncelikle bulunduğu objeye erişmemiz gerekir.
        console.log(this);    
    }
};
ogrencim.login();
ogrencim.logout();
//NOT: objenin içerisinde sadece düzenli fonksiyon yazımı kullanılmalıdır.
// ikinci fonksiyonu yazarken yaptığımız kısaltmaya dikkat et...
console.log('----------------------------------------------------')
console.log(this);//ana windowda ne yapılabileceğini gösterir
ogrencim.printLessons(); //bulunduğu objeyi ve bu objede yapılabilecekleri österir
console.log('**********************************************************');

let ogrencimm = {
    ad : 'berk',
    yas:20,
    email: 'brkbthn@gmail.com' ,
    sinif : 3,
    dersler:['yapay zeka', 'istaistik', 'java'],
    login:function(){
        console.log('ogrenci giriş yaptı...');
    },
    logout/*:function*/(){
        console.log('ogrenci çıkış yaptı...');
    },
    printLessons(){
        console.log(this.dersler);//dersler erişebilmek için öncelikle bulunduğu objeye erişmemiz gerekir.
        //console.log(this);    
        this.dersler.forEach(ders=>{
            console.log(ders);
        })
    }
};

ogrencimm.printLessons();


console.log('**********************************************************');


//Dizi içerisinde obje tanımlama

// const derser [
//     {isim:'olasılık', puan:78},
//     {isim:'ileri analiz', puan:88},
//     {isim:'programlama dilleri', puan:100}
// ]

let ogrencimmm = {
    ad : 'berk',
    yas:20,
    email: 'brkbthn@gmail.com' ,
    sinif : 3,
    dersler:[
        {isim:'olasılık', puan:78},
        {isim:'ileri analiz', puan:88},
        {isim:'programlama dilleri', puan:100}
    ],
    login:function(){
        console.log('ogrenci giriş yaptı...');
    },
    logout/*:function*/(){
        console.log('ogrenci çıkış yaptı...');
    },
    printLessons(){
        this.dersler.forEach(x=>{
            console.log(x.isim, x.puan);
        })
    }
};
ogrencimmm.printLessons();



console.log('**********************************************************');

console.log(Math);
console.log(Math.PI);

let sayi=5.7;
console.log(Math.round(sayi));//sayiyi yakın kısma yuvarlar
console.log(Math.floor(sayi));//sayinin ondalıklı kısmı ne olursa olsun sayıyı aşağı yuvarlar.
console.log(Math.ceil(sayi));//sayinin ondalıklı kısmı ne olursa olsun sayıyı yukarı yuvarlar.

console.log(Math.trunc(sayi));//ondalıklı kıasmı yok eder.


const rastgele=Math.random();// 0-1 arasında rastgele bir sayi üretir.
console.log(rastgele);


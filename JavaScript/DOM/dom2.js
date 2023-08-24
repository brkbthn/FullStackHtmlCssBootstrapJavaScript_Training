console.log("TARAYICIDA SAYFA İÇERİĞİ DEĞİŞTİRME");

const pdegeri=document.querySelector('p');
console.log(pdegeri);
//eğer html etiketleri olmadan bastırmak istersek .innerText kullanırız.
console.log(pdegeri.innerText);
//eğer etiketin içerisindeki yazıyı düzenlemek istiyorsak;
pdegeri.innerText='Berk Batuhan DEVRAN';

console.log('------------------------------------------------------------------');
//Peki etiketlere ekleme text ekleme işlemi yapmak istersek;  

const pdegerim=document.querySelectorAll('p');
pdegerim.forEach(a=>{
    console.log(a.innerText);
    //a.innerText='yeni kısım';//  a yı kullandığımıza dikkat et!!!
    a.innerText += ' yeni kısım';
});

console.log('------------------------------------------------------------------');

//eğer bir kapsayıcı etiketin içerisi değiştirilmek istenirse..;

const icerikk=document.querySelector('.içerik');
console.log(icerikk.innerHTML);
//inner.HTML ile olduğu gibi html etiketinin tamamı update edilebilir.

icerikk.innerHTML='<h2>Python, java, c</h2>';
icerikk.innerHTML +='<h2>javaScript</h2>';

console.log('------------------------------------------------------------------');

const ogrenciler = ['berk', 'batuhan', 'devran'];
ogrenciler.forEach(x=>{
    //icerikk.innerHTML;
    icerikk.innerHTML += `<p>${x}</p>`
})

console.log('------------------------------------------------------------------');

console.log('getAttribute-setAtribute');

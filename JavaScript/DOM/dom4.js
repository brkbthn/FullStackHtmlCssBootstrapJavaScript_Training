const icerik = document.querySelector('p');
console.log(icerik.classList) // etiket içerisindeki bütün claslar listelenir.
//classList.add ve clasList.remove işlemleri ile classlar eklenebilri ve çıkarılabilr.
icerik.classList.add('berk');
icerik.classList.remove('error');


const pDegeri = document.querySelectorAll('p');
pDegeri.forEach(x=>{
    if(x.textContent.includes('error')){
        x.classList.add('error');
    }
    if(x.textContent.includes('success')){
        x.classList.add('success');
    }

});
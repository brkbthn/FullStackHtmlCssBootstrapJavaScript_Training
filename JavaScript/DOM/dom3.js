const link=document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','http://www.boztraining.com');
link.textContent='Boz Traning';

const pDeger=document.querySelector('p');
console.log(pDeger.getAttribute('class'));
pDeger.setAttribute('class','content');

pDeger.setAttribute('style', 'color:red');

console.log('-----------------------------');
console.log("CSS'e nasıl müdehale edilir");

const baslik = document.querySelector('h1');
//baslik.setAttribute('style', 'border:2px solid black');
//renk gitti yani yeni yzdıklarımız öncekini ezdi! Bu nedenle farklı bir yöntem kullanmak daha mantıkl.

console.log(baslik.style);

baslik.style.border='2px solid black';
baslik.style.fontSize='60px';
const section = document.querySelector('section');
console.log(section.children);
//HTMLCollection ile foreach kullanılamaz o nedenle bu yapıyı bir arraya çevirmeliyiz
console.log(Array.from(section.children));
Array.from(section.children).forEach(child => {
    child.classList.add('section-element');
});

const baslik = document.querySelector('h2');
console.log(baslik.parentElement);
console.log(baslik.parentElement.parentElement);
console.log(baslik.nextElementSibling);//aynı hizada bulunan bir sonraki kardeş bulunur
console.log(baslik.previousElementSibling);
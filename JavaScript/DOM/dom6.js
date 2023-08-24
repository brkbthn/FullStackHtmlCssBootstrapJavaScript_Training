// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('eklendi');
// });
console.log('----------------------------------------');
console.log('Tıklanılan li yi konsolda görmek ve bu li üzerinde işem yapmak?')
// const liElemanlari = document.querySelectorAll('li')
// liElemanlari.forEach(element => {
//     element.addEventListener('click', ()=>{
//         console.log('liye tıklandı');
//         console.log(element);
//         //console.log(element.target);//hangi elemente tıklandığıekrana yazdırılır.
//         element.style.color = 'blue';
//     })
// });
console.log('----------------------------------------');
console.log('bir etiket nasıl yok edilir?');
/*
const ulEtiketi = document.querySelector('ul');
ulEtiketi.remove();   */

console.log('----------------------------------------');
console.log('');

 const liElemanlari = document.querySelectorAll('li')
 liElemanlari.forEach(element => {
        element.addEventListener('click', ()=>{
        element.remove();
        console.log(element.target);

     });
    });



    const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');//li elementi oluşturuldu
    li.textContent = 'javaScript'; //li etiketinin içerisine text eklendi
    //ulEtiketi.append(li);//sona ekler
    ulEtiketi.prepend(li);//başa ekler
}); 


const ulEtiketi = document.querySelector('ul');
ulEtiketi.addEventListener('click', e=>{
    e.stopPropagation();//kapsayıcı etiketin tetiklenmesini önler.
     console.log(e.target);
    if(e.target.tagBName === 'LI'){
        //e.target.remove();
        //kapsayıcı etikete verildiği için sonradan eklenenler de remove olur

    }
})
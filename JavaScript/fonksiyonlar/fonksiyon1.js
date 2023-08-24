 berk(); 
 //bu şekilde kullanıldığında hata vermez
function berk(){
    console.log('berk batuhan devran1');
}
berk();

console.log('Fuunction Expression şeklinde tanımlma');

/* brkbthn(); fakat bu tanımlama şeklinde fonksşyon tanımlanmadan çağırılamaz */
const brkbthn = function(){
    console.log('berk batuhan devran2')
}

brkbthn();
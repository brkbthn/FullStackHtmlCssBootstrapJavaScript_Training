const button = document.querySelector('button');
const mainPopup = document.querySelector('.main-popup');
button.addEventListener('click', ()=>{
    mainPopup.getElementsByClassName.display='block';

});

const popupClose = document.querySelector('.popup-close');

popupClose.addEventListener('click', ()=>{
    mainPopup.getElementsByClassName.display= 'none';
});

mainPopup.addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.className === 'main-popup'){
        mainPopup.getElementsByClassName.display = 'none';
    }
})
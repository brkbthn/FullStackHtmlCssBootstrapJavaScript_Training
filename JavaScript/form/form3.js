const form=document.querySelector('.signupForm');
const message=document.querySelector('.message');
const usernamePattern=/^[a-z]{6,10}$/;



form.addEventListener('submit', e=>{
    e.preventDefault();
    const username=form.username.value;
  

    if(usernamePattern.test(username))
    {
        message.textContent='BaÅŸarÄ±lÄ±';
    }
    else
    {
        message.textContent='LÃ¼tfen hepsini kÃ¼Ã§Ã¼k harf ve 6 ile 12 karakter arasÄ±nda giriniz';
    }
   
})


form.username.addEventListener('keyup', e =>{
    // console.log(e.target.value);
    if(usernamePattern.test(e.target.value))
    {
        // console.log('BaÅŸarÄ±lÄ±');
        form.username.setAttribute('class','success');
    }
    else
    {
        // console.log('BaÅŸarÄ±sÄ±z');
        form.username.setAttribute('class','error');
    }
})
let body = document.getElementById('body')
let ham =document.getElementById('hamburger');
let upperLogo = document.getElementById('header-logo');



ham.addEventListener('click',function(){
    if (ham.getAttribute('src') ==='imgs/icon-hamburger.svg'){
        ham.src='imgs/icon-close.svg';
        upperLogo.src='imgs/logo-bookmark-white-version.svg'
        overlay.style.display='block';
        body.style.overflow='hidden'
    } else{
        ham.src='imgs/icon-hamburger.svg';
        upperLogo.src='imgs/logo-bookmark.svg'
        overlay.style.display='none';
        body.style.overflow='auto'
    }
    console.log('click')
})
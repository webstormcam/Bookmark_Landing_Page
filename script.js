let body = document.getElementById('body')
let ham =document.getElementById('hamburger');
let upperLogo = document.getElementById('header-logo');
const bookMark = document.getElementById('bookmark')
const speedy = document.getElementById('speedy')
const easy = document.getElementById('easy')
const selectable = document.getElementsByClassName('selectables')
const dropSection = document.getElementById('drop-downsection')




ham.addEventListener('click',function(){
    if (ham.getAttribute('src') ==='imgs/icon-hamburger.svg'){
        ham.src='imgs/icon-close.svg';
        upperLogo.src='imgs/logo-bookmark-white-version.svg'
        overlay.style.display='flex';
        body.style.overflow='hidden'
    } else{
        ham.src='imgs/icon-hamburger.svg';
        upperLogo.src='imgs/logo-bookmark.svg'
        overlay.style.display='none';
        body.style.overflow='auto'
    }
    console.log('click')
})


bookMark.addEventListener('click',function(){
for( let select of selectable){
  select.classList.remove('selectables')
  console.log(select)
}

bookMark.classList.add('selectables')

})

speedy.addEventListener('click',function(){
    for( let select of selectable){
      select.classList.remove('selectables')
      console.log(select)
    }
    
    speedy.classList.add('selectables')
    
    })



    easy.addEventListener('click',function(){
        for( let select of selectable){
          select.classList.remove('selectables')
          console.log(select)
        }
        
        easy.classList.add('selectables')
        
        })


        dropSection.addEventListener('click',function(e){
          if(e.target.classList.contains('drop-arrow')){
            e.target.classList.toggle('flip')
            
          }
        })





let body = document.getElementById('body')
let ham =document.getElementById('hamburger');
let upperLogo = document.getElementById('header-logo');
const bookMark = document.getElementById('bookmark')
const speedy = document.getElementById('speedy')
const easy = document.getElementById('easy')
const selectable = document.getElementsByClassName('selectables')
const dropQuarter = document.getElementsByClassName('drop')
let hero_image2 = document.getElementById('hero-image2')




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
hero_image2.src="imgs/illustration-features-tab-1.svg"
bookMark.classList.add('selectables')

})

speedy.addEventListener('click',function(){
    for( let select of selectable){
      select.classList.remove('selectables')
      console.log(select)
    }
    hero_image2.src="imgs/illustration-features-tab-2.svg"
    speedy.classList.add('selectables')
    
    })



    easy.addEventListener('click',function(){
        for( let select of selectable){
          select.classList.remove('selectables')
          console.log(select)
        }
        hero_image2.src="imgs/illustration-features-tab-3.svg"
        easy.classList.add('selectables')
        
        })

for(let drops of dropQuarter ){
  drops.addEventListener('click',function(e){
    if(e.target.classList.contains('drop-arrow')){
     e.target.classList.toggle('flip')
     drops.nextElementSibling.classList.toggle('appear')
      
    }
  })
}
       





//variable list for parallax carousel
let imagesCarousel = ['../images/umbreon.jpg' , '../images/mewtwo.jpg' , '../images/scizor.jpg' , '../images/starters.jpg'];
let carousel = document.getElementById('carouselContainer');
let activeImg = 0;
// getting the images in
carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`
carousel.style.backgroundRepeat = `no-repeat`
carousel.style.backgroundSize = 'cover';
carousel.style.backgroundAttachment = 'fixed';
setInterval(carouselScroll,2000)
function carouselScroll(){
    if(activeImg<imagesCarousel.length-1){
        activeImg++
        carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`
    }else{
        activeImg = 0;
        carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`

    }
}



//random letters
Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


//dark / light mode switch
const btn = document.getElementById('switch');
btn.addEventListener('click',()=>{
    if(document.body.classList.contains('lightMode')){
        document.body.classList.remove('lightMode');
        document.body.classList.add('darkMode')
    }else{
        document.body.classList.remove('darkMode');
        document.body.classList.add('lightMode')
    }
})
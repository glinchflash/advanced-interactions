//variable list for parallax carousel
let imagesCarousel = ['../images/carousel/umbreon.jpg', '../images/carousel/mewtwo.jpg', '../images/carousel/scizor.jpg', '../images/carousel/starters.jpg'];
let carousel = document.getElementById('carouselContainer');
let activeImg = 0;
// getting the images in
carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`
carousel.style.backgroundRepeat = 'no-repeat'
carousel.style.backgroundSize = 'cover';
carousel.style.backgroundAttachment = 'fixed';
setInterval(carouselScroll, 2000)

function carouselScroll() {
    if (activeImg < imagesCarousel.length - 1) {
        activeImg++
        carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`
    } else {
        activeImg = 0;
        carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`

    }
}

//collage
const collage = document.getElementsByClassName("image");
for (let i = 0; i < collage.length; i++) {
    const img = document.createElement("img");
    let click = false;
    img.src = `../images/collage/${i + 1}.png`;
    img.addEventListener('click', function () {
        this.style.transform = "scale(1.2)";
        document.getElementById(`${i + 1}`).style.display = "block";
        document.getElementById(`${i + 1}`).style.position = "absolute";
        document.getElementById(`${i + 1}`).style.zIndex = "200";
        // document.getElementById(`${i+1}`).style.backgroundColor = "black";
        if (!click) {
            this.addEventListener('mouseout', function () {
                this.style.transform = "scale(1)";
                document.getElementById(`${i + 1}`).style.display = "none";
            })
        }
    })
    collage[i].appendChild(img);
}

//hover popups

//pidgeot
document.getElementById('pidgeot').addEventListener('mouseover', function (){
    document.querySelector("#pidgeotPopup").style.display = "block";
})

document.getElementById('pidgeot').addEventListener('mouseleave', function (){
    document.getElementById('pidgeotPopup').style.display = 'none';
})
//magikarp
document.getElementById('magikarp').addEventListener('mouseover', function (){
    document.getElementById('magikarpPopup').style.display = "block";
})

document.getElementById('magikarp').addEventListener('mouseleave', function (){
    document.getElementById('magikarpPopup').style.display = 'none';
})
//slowpoke
document.getElementById('slowpoke').addEventListener('mouseover', function (){
    document.getElementById('slowpokePopup').style.display = 'block';
})

document.getElementById('slowpoke').addEventListener('mouseleave', function (){
    document.getElementById('slowpokePopup').style.display = 'none';
})
//farfetch'd
document.getElementById('farfetch').addEventListener('mouseover', function (){
    document.getElementById('farfetchPopup').style.display = 'block';
})

document.getElementById('farfetch').addEventListener('mouseleave', function (){
    document.getElementById('farfetchPopup').style.display = 'none';
})

//chaser

let chaser = document.getElementById('chaser');

const onMouseMove = (e) => {
    if (e.pageX < 1370 && e.pageX > 100) {
        chaser.style.left = e.pageX + 'px';
    }
   if (e.pageY < 2620 && e.pageY > 2325) {
        chaser.style.top = e.pageY + 'px';
    }
    console.log(e.pageX);
}


document.addEventListener('mousemove', onMouseMove);


//random letters
Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


//dark / light mode switch
const btn = document.getElementById('switch');
btn.addEventListener('click', () => {
    if (document.body.classList.contains('lightMode')) {
        document.body.classList.remove('lightMode');
        document.body.classList.add('darkMode')
    } else {
        document.body.classList.remove('darkMode');
        document.body.classList.add('lightMode')
    }
})
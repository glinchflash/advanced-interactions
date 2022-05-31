//variable list for parallax carousel
let imagesCarousel = ['./images/carousel/umbreon.jpg', './images/carousel/mewtwo.jpg', './images/carousel/scizor.jpg', './images/carousel/starters.jpg'];
let carousel = document.getElementById('carouselContainer');
let activeImg = 0;
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// getting the images in
carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`
carousel.style.backgroundRepeat = 'no-repeat'
carousel.style.backgroundSize = 'cover';
carousel.style.backgroundAttachment = 'fixed';

next.addEventListener('click', () => {
    if (activeImg < imagesCarousel.length - 1) {
        activeImg++
        carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`
    } else if (activeImg === imagesCarousel.length - 1) {
        activeImg = 0;
        carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`
    }

});

prev.addEventListener('click', () => {
    if (activeImg > 0) {
        activeImg--;
        carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`;
    } else {
        activeImg = imagesCarousel.length - 1;
        carousel.style.backgroundImage = `url(${imagesCarousel[activeImg]})`;
    }

});


//collage
const collage = document.getElementsByClassName("image");
for (let i = 0; i < collage.length; i++) {
    const img = document.createElement("img");
    let click = false;
    img.src = `./images/collage/${i + 1}.png`;
    img.className = "collageImg";
    img.addEventListener('click', function () {
        this.style.transform = "scale(1.2)";
        document.getElementById(`${i + 1}`).style.display = "block";
        document.getElementById(`${i + 1}`).style.position = "absolute";
        document.getElementById(`${i + 1}`).style.zIndex = "200";
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
const hoverMons = document.querySelectorAll('.poke');
hoverMons.forEach((name) => {
    name.addEventListener('mouseover', () => {
        let sprite = new Image();
        sprite.src = `./images/popups/${name.innerText}.png`;
        sprite.style.position = 'absolute';
        sprite.style.left = '0%';
        sprite.style.transform = 'translateY(-100%)';
        sprite.style.height = '300%'
        name.appendChild(sprite)
    })
})
hoverMons.forEach((name) => {
    name.addEventListener('mouseleave', () => {
        name.innerHTML = name.innerText;
    })
})

//chaser
document.getElementsByClassName("box")[0].addEventListener('mousemove', followMouse);
let chaser = document.querySelector('.chaser');

function followMouse(e) {
    chaser.style.visibility = "visible";
    chaser.style.left = e.pageX - 25 + 'px';
    chaser.style.top = e.pageY - 25+ 'px';
}


//runner
let box = document.getElementsByClassName('box')[1];
let runner = document.querySelector('.runner');
const boxWidth = box.clientWidth - 50;
const boxHeight = box.clientHeight -50;


runner.addEventListener('mouseover', runAway)
function runAway() {
    let randomWidth = Math.floor(Math.random() * boxWidth) ;
    let randomHeight = Math.floor(Math.random() * boxHeight) ;

    runner.style.left = `${randomWidth}px`; //both versions work both with + 'px' or just adding px into the backticks
    runner.style.top = `${randomHeight}` + 'px';
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
//random letters
Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]

}
//delete letter pressed on keyboard
let letterbox = document.getElementById('letterbox');
let letter = document.querySelectorAll(".letter");
let randomColor = Math.floor(Math.random()*16777215).toString(16);

document.addEventListener('keypress', (event)=>{
    let keyName = event.key;
    console.log(keyName);
      for (let i=0; i<letter.length; i++)
        if (letter[i].innerText === keyName){
            letter[i].innerText = "";
        }else  if (keyName === "Enter"){
            Array.from(document.querySelectorAll(".letter")).forEach(el => {
                el.innerText = randomLetter();
            });
        }

})
//change color of letters and background on mouse entering
letterbox.addEventListener('mouseenter',() => {
    letterbox.style.color = "#" + randomColor;
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    letterbox.style.backgroundColor = "#" + randomColor;
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    letterbox.style.transform = "rotate(45deg)";
});

letterbox.addEventListener('mouseleave', ()=>{
    letterbox.style.color = "";
    letterbox.style.backgroundColor = "";
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    letterbox.style.transform = "rotate(0)"
})

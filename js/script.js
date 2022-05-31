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

let chaser = document.getElementById('chaser');

const onMouseMove = (e) => {
    if (e.pageX < 1370 && e.pageX > 100) {
        chaser.style.left = e.pageX + 'px';
    }
    if (e.pageY < 2620 && e.pageY > 2325) {
        chaser.style.top = e.pageY + 'px';
    }

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
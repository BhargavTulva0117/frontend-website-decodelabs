// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



// STICKY NAVBAR

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");
    }

});



// SCROLL ANIMATION

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

}, {

    threshold:0.2

});

hiddenElements.forEach((el) => observer.observe(el));



// PRODUCT BUTTON ANIMATION

const productButtons = document.querySelectorAll(".product-bottom button");

productButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.innerHTML = "Added ✓";

        button.style.background = "#84C7E3";

        setTimeout(() => {

            button.innerHTML = "Add To Cart";

            button.style.background = "#D97B29";

        }, 2000);

    });

});
// LOADER

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 2200);

});
// PRODUCT SLIDER

const track = document.querySelector(".slider-track");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

const slideWidth = 350;



// NEXT

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide > 2){

        currentSlide = 0;
    }

    track.style.transform =
    `translateX(-${currentSlide * slideWidth}px)`;

});



// PREV

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = 2;
    }

    track.style.transform =
    `translateX(-${currentSlide * slideWidth}px)`;

});



// AUTO SLIDE

setInterval(() => {

    currentSlide++;

    if(currentSlide > 2){

        currentSlide = 0;
    }

    track.style.transform =
    `translateX(-${currentSlide * slideWidth}px)`;

}, 4000);
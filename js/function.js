let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousal-img");
    let line = document.getElementsByClassName("circle");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < line.length; i++) {
        line[i].className = line[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    line[slideIndex-1].className += " active";
};



function hamburgerN() {
    const navbarItem = document.getElementsByClassName("nav-item") [0];
    const iconNav    = document.getElementsByClassName("nav-icon") [0];
    const mobileNav  = document.getElementsByClassName("icon") [0];



    if(navbarItem.style.display === "block") {
        navbarItem.style.display = "none";
    } else {
        navbarItem.style.display = "flex"
    };

    if(iconNav.style.display === "block") {
        iconNav.style.display = "none";
    } else {
        iconNav.style.display = "block";
    };

    if(mobileNav.style.display === "none") {
        mobileNav.style.display = "block"
    } else {
        mobileNav.style.display = "none"
    };
}
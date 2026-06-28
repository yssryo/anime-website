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



// function hamburgerN() {
//     const navbarItem = document.getElementsByClassName("nav-item") [0];
//     const iconNav    = document.getElementsByClassName("nav-icon") [0];
//     const mobileNav  = document.getElementsByClassName("icon") [0];
//     const openIcon   = document.getElementsByClassName("open-icon") [0];

    

//     if(navbarItem.style.display === "block") {
//         navbarItem.style.display = "none";
//     } else {
//         navbarItem.style.display = "flex"
//     };
    
//     if(iconNav.style.display === "block") {
//         iconNav.style.display = "none";
//     } else {
//         iconNav.style.display = "block";
//     };
    
//     if(mobileNav.style.display === "none") {
//         mobileNav.style.display = "block"
//     } else {
//         mobileNav.style.display = "none"
//     };

//     if(openIcon.style.display === "block") {
//         openIcon.style.display = "none"
//     } else {
//         openIcon.style.display = "block"
//     };
    
// };

// function hamburgerN() {
//     const elementNavbar = [
//         document.querySelector(".nav-item"),
//         document.querySelector(".nav-icon"),
//         document.querySelector(".open-icon"),
//     ];
//    if(elementNavbar) {
//     elementNavbar.forEach(el => el.style.display = "flex")
//    }
// };

function hamburgerN() {
    const navItem = document.querySelector(".nav-item");
    const userIcon = document.querySelector(".nav-icon");
    const closeIcon = document.querySelector(".open-icon");
    const hamburgerIcon = document.querySelector(".iconH");

    navItem.classList.toggle("nyala");
    closeIcon.classList.toggle("nyala");
    hamburgerIcon.classList.toggle("hide");
    if(userIcon.style.display === "block") {
        userIcon.style.display = "none"
    } else {
        userIcon.style.display = "block"
    };
    
    const iconOpen = document.getElementById("openIcon");
    iconOpen.style.transform = "rotate(90deg)";


};



function openNavbar() {
    const iconOpen = document.getElementById("openIcon");
    iconOpen.style.transform = "rotate(0deg)";
}




// function openNavbar() {
//     const navbarItem = document.getElementsByClassName("nav-item") [0];
//     const iconNav    = document.getElementsByClassName("nav-icon") [0];
//     const openIcon   = document.getElementsByClassName("open-icon") [0];
//     const mobileNav  = document.getElementsByClassName("icon") [0];

//     if(navbarItem.style.display === "none") {
//         navbarItem.style.display = "block";
//     } else {
//         navbarItem.style.display = "none"
//     };
    
//     if(iconNav.style.display === "block") {
//         iconNav.style.display = "none";
//     } else {
//         iconNav.style.display = "block";
//     };

//     if(openIcon.style.display === "none") {
//         openIcon.style.display = "block"
//     } else {
//         openIcon.style.display = "none"
//     };
    
//     if(mobileNav.style.display === "block") {
//         mobileNav.style.display = "none"
//     } else {
//         mobileNav.style.display = "block"
//     };

// };
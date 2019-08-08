var burger = document.querySelector('.burger');
burger.addEventListener('click', showSide);
var links = document.querySelector('.nav-links');
var navLinks = document.querySelectorAll('.nav-links li');

//toggle nav
function showSide(){
    links.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        if( link.style.animation ){
            link.style.animation = '';
        }
        else{
        link.style.animation = `navLinkFade 1s ease forwards ${index/25}s`;

        }
    });

    //burger animation
    burger.classList.toggle('change');
}
//animate nav


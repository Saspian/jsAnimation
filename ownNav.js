var burger = document.querySelector('.burger');
burger.addEventListener('click', showSide);
var links = document.querySelector('.nav-links');
var navLinks = document.querySelectorAll('.nav-links li');

//toggle nav
function showSide(){
    links.classList.toggle('nav-active');
    // if( links.style.animation){
    //     links.style.animation = '';
       

    // }
    // else{
    //     links.style.animation = `barDekha 1s ease forwards`;

    // }

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
    var anchor = document.querySelectorAll('.nav-links a');
    //click and active
    anchor.forEach(aTag =>{
            aTag.addEventListener('click',function(){
                aTag.classList.toggle('active');
                console.log(aTag);
            });
    });
    // console.log(anchor);
    // anchor.addEventListener('click',function(){
    //     document.querySelector('.anchor').classList.toggle('active');
    // });
//animate nav

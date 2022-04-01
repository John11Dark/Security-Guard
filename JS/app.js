let befScrollTop = 0;
let headerOpacity = 1;
const Header = document.querySelector('header');
const Images = document.querySelectorAll(".image");
let isMain = Images.getAttribute("isMain"); 
let descImage = document.querySelector(".descriptionImage");
// rotate logo circuit Board on scroll 
window.onscroll = ('onscroll', () => {

    let curScrollTop = window.scrollY || document.documentElement.scrollTop;
    // on header hover 

    if(curScrollTop <= 100){
        Header.setAttribute("isInteracting", true);
    }
    else{
        if(curScrollTop <= 100 ){
        Header.setAttribute("isInteracting", false);
        }
    }
    if (befScrollTop < curScrollTop) {
        headerOpacity = 0.5;
    }
    else {
        headerOpacity = 1;
    }

    befScrollTop = curScrollTop;
    Header.style.opacity = headerOpacity;


    Header.addEventListener("mouseover", () => {
        Header.style.opacity = (headerOpacity + 0.5);

        setTimeout(() => {
            Header.style.opacity = headerOpacity;
        }, 500);
    }, false);
});

function newImage(items){
    items.
}
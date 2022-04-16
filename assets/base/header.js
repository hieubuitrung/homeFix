
// scroll header

window.onscroll = function() {myFunction()};

var header = document.querySelector("header");
// offsetTop: khoảng cách so với top
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky + header.offsetHeight) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


// menu mobile 

function controlMenuMobile () {
    const menuMobile = document.querySelector('.menu-mobile');
    const btnClose = document.querySelector('.mobile-btn-close');
    const bars = document.querySelector('.header-inner .bars');
    const menuList = document.querySelector('.menu-list');
  
    bars.addEventListener('click', () => {
      menuMobile.classList.remove('mobile-none');
    })
    
    btnClose.addEventListener('click', () => {
      menuMobile.classList.add('mobile-none');
    })
  
    menuMobile.addEventListener('click', () => {
      menuMobile.classList.add('mobile-none');
    })
  
    menuList.addEventListener('click', (e) => { 
      e.stopPropagation() // ngừng sự việc nổi bọt
    })
  } 
  
  controlMenuMobile ();
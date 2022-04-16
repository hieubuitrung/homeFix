
$(document).ready(function(){
    $('.single-item').slick({
        slideslidesToShow: 1, // số lượng slide được hiển thị
        infinite: true, // vòng lặp vô tận 
        cssEase: 'ease-in-out',
        mobileFirst: true, // bật chế độ responsive ngay trên màn hình desktop
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        nextArrow: '<div class="slick-next"><i class="fa-solid fa-angle-right"></i></div>',
        prevArrow: '<div class="slick-prev"><i class="fa-solid fa-angle-left"></i></div>',
        responsive: [
            {
              breakpoint: 740,
              settings: {
                nextArrow: '',
                prevArrow: '',
                centerMode: false,
              }
            }
        ]
    });
});


$(document).ready(function(){
    $('.partner-slider').slick({
        slidesToShow: 4, 
        slidesToScroll: 4,
        nextArrow: '<div class="slick-next"><i class="fa-solid fa-angle-right"></i></div>',
        prevArrow: '<div class="slick-prev"><i class="fa-solid fa-angle-left"></i></div>',
        responsive: [
            {
              breakpoint: 740,
              settings: {
                centerMode: false,
                slidesToShow: 2, 
                slidesToScroll: 2,  
              }
            }
        ]
    });
});



// tabs ui 

function tabsUI () {
  
  const tabs = document.querySelectorAll('.tab-item');
  const panes = document.querySelectorAll('.tab-content-pane');

  // tabActive: tab đang được active
  const tabActive = document.querySelector('.tab-item.active');

  tabs.forEach((tab, index) => {
      tab.onclick = function() {
          // lấy element có class active và remove
          
          const tabActive = document.querySelector('.tab-item.active');
          tabActive.classList.remove('active');
          this.classList.add('active')

          const paneActive = document.querySelector('.tab-content-pane.active');
          const pane = panes[index]
          paneActive.classList.remove('active');
          pane.classList.add('active')
      }
  });
}

tabsUI()



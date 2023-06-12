//スライドショー
const swiper = new Swiper('.swiper', {
  // Optional parameters
   loop: true,
   
   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//ハンバーガーメニュー

hamburger = document.getElementById('hamburger-menu');
nav =  document.getElementById('nav');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active')
   nav.classList.toggle('active')
});

//スクロールアニメーション


const targetElement = document.querySelectorAll(".animation-target");
document.addEventListener('scroll', function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i]. 
    getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if(window.innerHeight > getElementDistance){
      targetElement[i].classList.add("show");
     }
  }
});
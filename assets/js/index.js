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
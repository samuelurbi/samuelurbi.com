const swiper = new Swiper('.swiper', {
  // Default parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 2,
  spaceBetween: 0,
  
  autoplay: {
    delay: 2500,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    769: {
      slidesPerView: 3
    },
    // when window width is >= 1024px
    1025: {
      slidesPerView: 4
    }
  }
});
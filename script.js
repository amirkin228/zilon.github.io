var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        200: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 1,
        },
    },
  });


  const wrapperr = document.querySelector('.wrapperr');
  const loginLink = document.querySelector('.login-link');
  const registerLink = document.querySelector('.register-link');
  const btnPopup = document.querySelector('.btnLogin-popup');
  const iconClose = document.querySelector('.icon-close');

  registerLink.addEventListener('click', ()=> {
      wrapperr.classList.add('active');
  });

  loginLink.addEventListener('click', ()=> {
    wrapperr.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
  wrapperr.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
  wrapperr.classList.remove('active-popup');
});
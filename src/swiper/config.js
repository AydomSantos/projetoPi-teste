// Swiper principal com navegação
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-main",
    clickable: true,
  },
});

// Swiper para últimas buscas
var swiperUltimasBuscas = new Swiper(".section__ultimas__buscas--swiper", {
  slidesPerView: 4,
  spaceBetween: 1,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 3,
    },
  },
});

// Swiper para "Mais Procurados em Carros"
var swiperCarros = new Swiper(".section__mais__procurados__em__carros--swiper", {
  slidesPerView: 5,
  spaceBetween: 3,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 3,
    },
  },
});

// Swiper para "Selecionamos para você"
var swiperSelecionados = new Swiper(".section__selecionamos__para__voce--swiper", {
  slidesPerView: 3,
  spaceBetween: 3,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Swiper para Anúncios Patrocinados
var swiperAnuciopago = new Swiper(".section__anuncio__patrocinado--swiper", {
  slidesPerView: 2,
  spaceBetween: 3,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Função reutilizável para inicializar o Swiper
function initSwiper(selector, config) {
  return new Swiper(selector, {
    pagination: {
      el: config.paginationEl,
      clickable: true,
    },
    spaceBetween: config.spaceBetween || 10,
    slidesPerView: config.slidesPerView || 3,
    freeMode: true,
    breakpoints: config.breakpoints || {
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 20 },
      640: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
}

// Swiper principal com navegação
var swiper = new Swiper(".swiper", {
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
var swiperUltimasBuscas = initSwiper(".section__ultimas__buscas--swiper", {
  paginationEl: ".swiper-pagination",
  slidesPerView: 4,
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 4, spaceBetween: 1 },
  },
});

// Swiper para "Mais Procurados em Carros"
var swiperCarros = initSwiper(".section__mais__procurados__em__carros--swiper", {
  paginationEl: ".swiper-pagination",
  slidesPerView: 5,
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 5, spaceBetween: 3 },
  },
});

// Swiper para "Selecionamos para você"
var swiperSelecionados = initSwiper(".section__selecionamos__para__voce--swiper", {
  paginationEl: ".swiper-pagination",
  slidesPerView: 3,
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 3, spaceBetween: 30 },
  },
});

// Swiper para Anúncios Patrocinados
var swiperAnuciopago = initSwiper(".section__anuncio__patrocinado--swiper", {
  paginationEl: ".swiper-pagination",
  slidesPerView: 2,
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 3, spaceBetween: 30 },
  },
});

// Add new image inside array
const imagePath = [
  './assets/jadwal-img/BAGAN-FUTSAL-SMP-WILHELMINA-A-VOL6A.webp',
  './assets/jadwal-img/BAGAN-FUTSAL-SMP-WILHELMINA-A-VOL6A.webp',
  './assets/jadwal-img/BAGAN-FUTSAL-SMP-WILHELMINA-A-VOL6A.webp',
  './assets/jadwal-img/BAGAN-FUTSAL-SMP-WILHELMINA-A-VOL6A.webp',
  './assets/jadwal-img/BAGAN-FUTSAL-SMP-WILHELMINA-A-VOL6A.webp',
  './assets/jadwal-img/BAGAN-FUTSAL-SMP-WILHELMINA-A-VOL6A.webp',
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

for (let i = 0; i < imagePath.length; i++) {
  const imageCard = (
    `<div class="content swiper-slide">
      <img src="${imagePath[i]}" loading="lazy" alt="Gambar Jadwal">
      <div class="swiper-lazy-preloader"></div>
    </div>`
  );

  swiperWrapper.innerHTML = swiperWrapper.innerHTML + imageCard;
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  }
});
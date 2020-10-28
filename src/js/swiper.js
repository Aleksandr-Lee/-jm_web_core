import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

if (window.innerWidth <= 767) {
	const swiper = new Swiper(".swiper-container", {
	  slidesPerView: "auto",
	  spaceBetween: 30,
	  pagination: {
		 el: ".swiper-pagination",
		 clickable: true,
	  },
	});
 }

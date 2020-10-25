import '../scss/style.scss';

if (window.innerWidth <= 767) {
	var swiper = new Swiper(".swiper-container", {
	  slidesPerView: "auto",
	  spaceBetween: 30,
	  pagination: {
		 el: ".swiper-pagination",
		 clickable: true,
	  },
	});
 }

 const body = document.querySelector("body");
body.addEventListener("click", function (event) {
  if (event.target.dataset.container) {
    const containerId = event.target.dataset.container;
    const container = document.querySelector(
      `[data-container-id="${containerId}"]`
    );
    const state = container.dataset.state;

    if (state === "close") {
      container.style.maxHeight = container.scrollHeight + "px";
      container.setAttribute("data-state", "open");
      //   event.target.textContent = 'Свернуть';
    } else {
      container.style.maxHeight = "192px"; // Какая-то первоночальная высота контейнера
      container.setAttribute("data-state", "close");
      // event.target.textContent = 'Показать';
    }
  }this.ononline
});

const showHide = document.querySelector(".button-show");
const textButton = document.querySelector(".button-show__text");
const textValue = textButton.textContent;
showHide.addEventListener("click", function () {
  if (textButton.textContent === textValue) {
    textButton.textContent = "Свернуть";
    showHide.classList.remove("button-show--down");
    showHide.classList.add("button-show--up");
  } else {
    textButton.textContent = textValue;
    showHide.classList.remove("button-show--up");
    showHide.classList.add("button-show--down");
  }
});


console.log('Works!');

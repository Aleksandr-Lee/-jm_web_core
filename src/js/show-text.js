/*const contentContainer = document.querySelector('.text__content');
const showHide = document.querySelector(".button-show");
const textButton = document.querySelector(".button-show__text");
const textValue = textButton.textContent;
showHide.addEventListener("click", function () {
	if (contentContainer.style.maxHeight) {
		contentContainer.style.maxHeight = contentContainer.scrollHeight + 'px';
	} else {
		contentContainer.classList.toggle('text__content');
	}		
  if (textButton.textContent === textValue) {
    textButton.textContent = "Свернуть";
    showHide.classList.remove("button-show--down");
    showHide.classList.add("button-show--up");
  } else {
    textButton.textContent = textValue;
    showHide.classList.remove("button-show--up");
    showHide.classList.add("button-show--down");
  }
});*/

const contentContainer = document.querySelector('.text__content');
const showHide = document.querySelectorAll(".button-show");
const textButton = document.querySelectorAll(".button-show__text");
for(let i = 0; i < showHide.length; i++ ) {

	const textValue = textButton[i].textContent;

showHide[i].addEventListener("click", function () {	
	if (textButton[i].textContent === textValue) {
		textButton[i].textContent = "Свернуть";
		showHide[i].classList.remove("button-show--down");
		showHide[i].classList.add("button-show--up");
	} else {
		textButton[i].textContent = textValue;
		showHide[i].classList.remove("button-show--up");
		showHide[i].classList.add("button-show--down");
	}
	if (contentContainer.style.maxHeight) {
		contentContainer.style.maxHeight = contentContainer.scrollHeight + 'px';
	} else {
		contentContainer.classList.toggle('text__content');
	}		
});
}

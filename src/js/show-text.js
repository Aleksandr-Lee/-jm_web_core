
const contentContainer = document.querySelector('.text__content');
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
	if (contentContainer.style.maxHeight) {
		contentContainer.style.maxHeight = contentContainer.scrollHeight + 'px';
	} else {
		contentContainer.classList.toggle('text__content');
	}		
});



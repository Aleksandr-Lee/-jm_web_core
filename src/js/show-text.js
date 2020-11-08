const contentContainer = document.querySelector(".text__content");
const showHide = document.querySelector(".button-show");
const textValue = showHide.textContent;

showHide.addEventListener("click", function () {	
	if (showHide.textContent === textValue) {
		showHide.textContent = "Свернуть";
	} else {
		showHide.textContent = textValue;
	}
	if (contentContainer.style.maxHeight ) {
		contentContainer.style.maxHeight = contentContainer.scrollHeight + 'px';
	} else {
		contentContainer.classList.toggle("text__content");
		showHide.classList.toggle("button-show--up");
	}		
});
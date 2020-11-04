const body = document.querySelector("body");
//const textButton = document.querySelectorAll(".button-show__text");
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
	//event.target.textContent = 'Свернуть';
		//event.target.classList.remove("button-show--down");
		//event.target.classList.add("button-show--up");
    } else {
      container.style.maxHeight = "192px"; // Какая-то первоночальная высота контейнера
		container.setAttribute("data-state", "close");
		//event.target.classList.remove("button-show--up");
		//event.target.classList.add("button-show--down");
     // event.target.textContent = 'Показать всё';
	 }
  }
});

/*const showHide = document.querySelectorAll(".button-show");
const textButton = document.querySelectorAll(".button-show__text");
for(let i = 0; i < showHide.length; i++ ) {
	const textValue = textButton[i].textContent;
	console.log(textValue)
showHide[i].addEventListener("click", function () {	
	if (textButton[i].textContent === textValue) {
		textButton[i].textContent = "Свернуть";
		console.log('ok')
	} else {
		textButton[i].textContent = textValue;
	}
});
}*/


/*for (let i = 0; i < text.length; i++) {
	text[i].addEventListener("click", function (event) { 
		
		
		if (event.target == text[i]){
			text[i].textContent = "Свернуть";
	console.log('text')
		}
	//	if (text[i].textContent === textValue) {
	//		text[i].textContent = "Свернуть";
			
		// } else {
		//	text[i].textContent == textValue;
		
		// }
		
});	 
  }*/



/*РАБОЧИЙ КОД*/
 /* const body = document.querySelector("body");
const text = document.querySelectorAll(".button-show__text");
body.addEventListener("click", function (event) {
  if (event.target.dataset.container) {
    const containerId = event.target.dataset.container;
    const container = document.querySelector(
      `[data-container-id="${containerId}"]`
	 );
	 
	 const state = container.dataset.state;
	 //const text = event.target.dataset.text;
	
    if (state === "close") {
      container.style.maxHeight = container.scrollHeight + "px";
		container.setAttribute("data-state", "open");
     // text.textContent = "Свернуть";
		//text.event.target.textContent = 'Свернуть';
		event.target.classList.remove("button-show--down");
		event.target.classList.add("button-show--up");
    } else {
      container.style.maxHeight = "192px"; // Какая-то первоночальная высота контейнера
		container.setAttribute("data-state", "close");
		event.target.classList.remove("button-show--up");
		event.target.classList.add("button-show--down");
      //event.target.textContent = 'Показать всё';
      //text.textContent = "Показать всё";
	 }
  }
 
});*/
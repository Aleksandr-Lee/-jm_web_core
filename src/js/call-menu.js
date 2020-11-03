 const modalCall = document.getElementById('modalCall')
 const closeCall = document.querySelectorAll('.button__close')
 const openCall = document.querySelectorAll('.button__tel')
 const body = document.querySelector('body');
 
 for (let i = 0; i < openCall.length; i++) {
	openCall[i].addEventListener("click", function (event) { 
		const btnOpen = event.target;
		if (btnOpen == openCall[i]) {
			modalCall.style.display = 'block';
			body.style.overflow = 'hidden';
		}
	});
}
for (let i = 0; i < closeCall.length; i++) {
		closeCall[i].addEventListener("click", function (event) { 
			const btnClose = event.target;
			if (btnClose == closeCall[i]) {
				modalCall.style.display = 'none';
				body.style.overflow = 'visible';
			}
	});
}
window.addEventListener("click", function (event) { 
	if(event.target == modalCall) {
		modalCall.style.display = 'none';
		body.style.overflow = 'visible';
	}
});



/*body.addEventListener("click", function (event) { 
	const btnOpen = event.target;
		if (btnOpen == openCall) {
		modalCall.style.display = 'block';
		body.style.overflow = 'hidden';
	}
});*/


/*const openCall = document.querySelector('.button__tel')
const modalCall = document.querySelector('.wrapper-modal')
const closeCall = document.querySelector('.button__close')
const body = document.querySelector("body");
body.addEventListener("click", function (event) {
	const btnOpen = event.target;
  	if (btnOpen == openCall) {
	modalCall.style.display = 'block';
	  }
 });
 
 body.addEventListener("click", function (event) {
	const btnClose = event.target;
  	if (modalCall.style.display == 'block' && btnClose == closeCall) {
		  console.log('ok')
	modalCall.style.display = 'none';
	  }
 });*/



/*const modalCall = document.getElementById('modalCall');
const openCall = document.getElementById('btnOpenCall');
const closeCall = document.getElementById('btnCloseCall');
const body = document.querySelector('body');

openCall.onclick = function() {
	modalCall.style.display = 'block';
	body.style.overflow = 'hidden';
};
closeCall.onclick = function() {
	modalCall.style.display = 'none';
	body.style.overflow = 'visible';
};
window.onclick = function(event) {
	if(event.target == modalCall) {
		modalCall.style.display = 'none';
		body.style.overflow = 'visible';
	}
};*/

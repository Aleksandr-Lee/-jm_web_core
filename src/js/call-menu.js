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




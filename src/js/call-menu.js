const modalCall = document.getElementById('modalCall');
const openCall = document.getElementById('btnOpenCall');
const closeCall = document.getElementById('btnCloseCall');
const body = document.querySelector('body');

openCall.onclick = function() {
	modalCall.style.display = 'block';
	//body.style.overflow = 'hidden';
};
closeCall.onclick = function() {
	modalCall.style.display = 'none';
	//body.style.overflow = 'visible';
};
window.onclick = function(event) {
	if(event.target == modalCall) {
		modalCall.style.display = 'none';
		//body.style.overflow = 'visible';
	}
};

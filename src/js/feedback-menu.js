const modalFeedback = document.getElementById('modalFeedback');
const openFeedback = document.getElementById('btnOpenFeedback');
const closeFeedback = document.getElementById('btnCloseFeedback');
const body = document.querySelector('body');

openFeedback.onclick = function() {
	modalFeedback.style.display = 'block';
	//body.style.overflow = 'hidden';
};
closeFeedback.onclick = function() {
	modalFeedback.style.display = 'none';
	//body.style.overflow = 'visible';
};
window.onclick = function(event) {
	if(event.target == modalFeedback) {
		modalFeedback.style.display = 'none';
		//body.style.overflow = 'visible';
	}
};

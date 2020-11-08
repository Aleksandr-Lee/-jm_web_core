const modalFeedback = document.getElementById("modalFeedback");
const closeFeedback = document.querySelectorAll(".button__close");
const openFeedback = document.querySelectorAll(".button__message");
const body = document.querySelector("body");

function toggleModalFeedback (modal, display, overflow) {
	for (let i = 0; i < modal.length; i++) {
		modal[i].addEventListener("click", function (event) { 
			const btnClose = event.target;
			if (btnClose == modal[i]) {
				modalFeedback.style.display = display;
				body.style.overflow = overflow;
			}
	});
	}
} 
toggleModalFeedback(openFeedback, 'block', 'hidden' );
toggleModalFeedback(closeFeedback, 'none', 'visible' );

window.addEventListener("click", function (event) {
  if (event.target == modalFeedback) {
    modalFeedback.style.display = "none";
    body.style.overflow = "visible";
  }
});

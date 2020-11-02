const modalFeedback = document.getElementById("modalFeedback");
const closeFeedback = document.querySelectorAll(".button__close");
const openFeedback = document.querySelectorAll(".button__message");
const body = document.querySelector("body");
for (let i = 0; i < openFeedback.length; i++) {
  openFeedback[i].addEventListener("click", function (event) {
    const btnOpen = event.target;
    if (btnOpen == openFeedback[i]) {
      modalFeedback.style.display = "block";
      body.style.overflow = "hidden";
    }
  });
}
for (let i = 0; i < closeFeedback.length; i++) {
  closeFeedback[i].addEventListener("click", function (event) {
    const btnClose = event.target;
    if (btnClose == closeFeedback[i]) {
      modalFeedback.style.display = "none";
      body.style.overflow = "visible";
    }
  });
}
window.addEventListener("click", function (event) {
  if (event.target == modalFeedback) {
    modalFeedback.style.display = "none";
    body.style.overflow = "visible";
  }
});

/*const modalFeedback = document.getElementById('modalFeedback');
const openFeedback = document.getElementById('btnOpenFeedback');
const closeFeedback = document.getElementById('btnCloseFeedback');
const body = document.querySelector('body');

openFeedback.onclick = function() {
	modalFeedback.style.display = 'block';
	body.style.overflow = 'hidden';
};
closeFeedback.onclick = function() {
	modalFeedback.style.display = 'none';
	body.style.overflow = 'visible';
};
window.onclick = function(event) {
	if(event.target == modalFeedback) {
		modalFeedback.style.display = 'none';
		body.style.overflow = 'visible';
	}
};*/

 const modalCall = document.getElementById("modalCall")
 const closeCall = document.querySelectorAll(".button__close")
 const openCall = document.querySelectorAll(".button__tel")
 const body = document.querySelector("body");
 
function toggleModalCall (modal, display, overflow) {
	for (let i = 0; i < modal.length; i++) {
		modal[i].addEventListener("click", function (event) { 
			const btnClose = event.target;
			if (btnClose === modal[i]) {
				modalCall.style.display = display;
				body.style.overflow = overflow;
			}
	});
	}
} 
toggleModalCall(openCall, "block", "hidden" );
toggleModalCall(closeCall, "none", "visible" );

window.addEventListener("click", function (event) { 
	if(event.target == modalCall) {
		modalCall.style.display = "none";
		body.style.overflow = "visible";
	}
});
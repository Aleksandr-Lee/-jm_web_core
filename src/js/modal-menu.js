const modalMenu = document.getElementById('modalMenu');
const openMenu = document.getElementById('btnOpenMenu');
const closeMenu = document.getElementById('btnCloseMenu');
const body = document.querySelector('body');
openMenu.onclick = function() {
	modalMenu.style.display = 'block';
	body.style.overflow = 'hidden';
};
closeMenu.onclick = function() {
	modalMenu.style.display = 'none';
	body.style.overflow = 'visible';
};
window.onclick = function(event) {
	if(event.target == modalMenu) {
		modalMenu.style.display = 'none';
		body.style.overflow = 'visible';
	}
};

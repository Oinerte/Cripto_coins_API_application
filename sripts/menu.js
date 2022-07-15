function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg")
}

const modal = document.querySelector('.modal-block')
function openModal(){
modal.classList.remove('active')
}
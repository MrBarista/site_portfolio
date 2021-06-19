const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  close = document.querySelector('.menu__close');
	  overlayclose = document.querySelector('.menu__overlay');
	
hamburger.addEventListener('click',() => {
	menu.classList.add('active');
})

close.addEventListener('click',() =>{
	menu.classList.remove('active');
})

overlayclose.addEventListener('click',() =>{
	menu.classList.remove('active');
})

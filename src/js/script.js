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

$(window).scroll(function(){
	if ($(this).scrollTop() > 700 ){
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});

/* $('.contacts__form').validate({
	rules: {
		name: {
			required: true,
			minlength: 2
		  },
		email: {
			required: true,
			email: true
		},
		checkbox: "required"
	},
	messages:{
		name: {
			required: "Пожалуйста введите своё имя",
			minlength: jQuery.validator.format("Требуется минмимум {0} символа")
		  },
		email: {
			required: "Пожалуйста введите почтовый адрес",
			email: "Неправильно введён адрес почты"
		},
		checkbox: "Сначала вы должны согласиться с нашей политикой."
	}
}); */

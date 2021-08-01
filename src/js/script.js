const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  close = document.querySelector('.menu__close');
	  overlayclose = document.querySelector('.menu__overlay');
	
hamburger.addEventListener('click',() => {   //открывает меню по клику на гамбургер
	menu.classList.add('active');
});

close.addEventListener('click',() =>{   //закрывает меню по клику на крестик
	menu.classList.remove('active');
});

overlayclose.addEventListener('click',() =>{  //закрывает меню если кликнуть куда-нить кроме меню(оверлэй)
	menu.classList.remove('active');
});

$(window).scroll(function(){     //после дальности в 700 появляется стрелка "вверх"
	if ($(this).scrollTop() > 700 ){
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});

//СКРИПТ для отправки данных на почту
$('form').submit(function(e) {  //ВСЕ наши формы, когда мы подтверждаем отправку данных
	e.preventDefault(); // ОТМЕНЯЕТ стандартное поведение браузера
	$.ajax({
		type: "POST" ,   //POST - отдать данные серверу GET - получить данные с сервера
		url:"mailer/smart.php",  // КАКОЙ обработчик будет задействован
		data: $(this).serialize() //ДАННЫЕ которые мы хотим отправить на сервер нужно обработать
	}).done(function(){  //КОГДА мы выполнили операцию ajax, выполним ещё какое то действие
		$(this).find("input").val(""); //В этой форме нахоим все инпуты и очищаем их
		$(this).find("textarea").val(""); //В этой форме нахоим все textarea и очищаем их


		$('form').trigger('reset');
		 //ВСЕ мои формы которые есть на сайте должны очиститься
	});
	return false;
}) ;

new WOW().init(); // для библиотеки wow.js


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

$(function() {
	var width = $(window).width();
	
	$('.infra_menu a').click(function(){
		var infra_link = $(this).attr('href');
		
		$('.infra_menu a').removeClass('active');
		$(this).addClass('active');
		
		$('.infra_tab').removeClass('active');
		$(infra_link).addClass('active');
		
		return false;
	});
	
	/*popup call*/
	$('.zvonok_btn, .btn_flat_order').click(function(){
		$('#overlay_call').fadeIn(100, function(){
			$('#popup_call').animate({'right': '0px'}, 150);
		});
		return false;
	});
	$('#popup_call .close, #overlay_call').click(function(){
		$('#popup_call').animate({'right': '-750px'}, 150, function(){
			$('#overlay_call').fadeOut(100);
		});
		return false;
	});
	
	/*popup blog*/
	$('.news_item a').click(function(){
		/*test data*/
		var blog_data = '{"items": ['+
		'{"title" : "Отримай своє запрошення на свято та виграй приз!", "content": "<p>Дорогі друзі, власники квартир у Галицькому Леві! Свято наближається, вже зараз Ви можете завітати до Центру продажів ЖК Галицький Лев та отримати офіційне запрошення на свято. Це запрошення дає можливість Вам виграти цінні призи від нашого ЖК у лототроні. Призи дійсно варті уваги! Поспішайте отримати запрошення!!! Перші запрошення вже видані!</p>" },' +
		'{"title" : "Шановні мешканці 12 секції!", "content": "<p>Вітаємо Вас із газифікацією Вашого будинку! Відтепер Ви можете звертатись до відділу продажів з питання підписання актів прийому-передачі, оформлення техпаспортів та, на перспективу, отримання документів на право власності Ваших помешкань. З метою впорядкування черги та економії Вашого часу рекомендуємо попередньо зателефонувати до наших менеджерів. При собі мати паспорт, індентифікаційний код та Ваші договори!</p>" },' +
		'{"title" : "Вивезення побутового сміття!", "content": "<p>Вивезення побутового сміття!  В проході 12-ї секції встановлено два баки для побутових відходів.</p><p>ПРОХАННЯ! Не викидувати до цих баків будівельних відходів!  По мірі заселення кварталу баки для ТПВ будуть доставлятися!!</p>" },' +
		'{"title" : "Шановні мешканці 1,2,3-ї та 6-ї секцій! ", "content": "<p>У звязку із постійним ігноруванням наших прохань, щодо вивозу сміття з під Ваших секцій, не дотриманням належного санітарного стану секцій та місць загального користування, не сплатою за спожиті енергоносії — повідомляємо Вас про відключення електропостачання Ваших секцій до вирішення цих питань по суті.</p><p>Дякуємо за увагу!</p><p>Адміністрація ГЛ</p>" },' +
		'{"title" : "Оформлення права власності", "content": "<p>Шановні мешканці 9ї та 10ї секцій, а також 6ї та 11ї, хто не встиг подати документи на оформлення права власності на Ваші квартири! Просимо Вас наступного тижня до 18 червня завітати з відповідним пакетом документів до Центру Продажів Галицького Лева. Оскільки через тиждень розпочнемо прийом документів інших секцій і Вам, доведеться чекати!</p><p>При собі мати: Паспорт власника, індентифікаційний код, акт прийому-передачі, довідку про повну сплату пайових внесків, договір та кошти для сплати реєстраційних послуг нотаріусу - 1400 грн. та 300 грн. за вироблення технічного паспорту (якщо не сплачували раніше).</p>" },' +
		'{"title" : "Кубок Галицького Лева", "content": "<p>Шановні клієнти Галицького Лева, працівники компанії, - щиро запрошуємо Вас долучитись до футбольного матчу на кубок Галицького Лева.  Формуйте команди в складі 5-6 осіб (4-ро в полі, 1-2 - в запасі) та вперед за кубком! Дівчата - вболівають! Матч відбудеться на нашому футбольному майданчику у п\'ятницю,</p><p>10 червня 2016 року, о 11-00 годині. Заявки приймаються в коментарях до цього посту до кінця четверга - 9 червня.  Просимо написати прізвища, ім\'я гравців, телефон капітана команди та інформацію про гравців і команду. Назва команди, категорію гравців - наприклад, мешканці 10 секції, чи команда ІТРівців і т.д.</p>" },' +
		'{"title" : "Дев\'ята секція! ", "content": "<p>Розпочинаємо процес приймання документів на оформлення прав власності. Поки для 1-3-го поерхів, зателефонуйте до Центру продажів та запишіться на прийом до менеджера, щоб не створювати зайвого ажіотажу та черг. Більше в попередньому пості.</p>" },' +
		'{"title" : "Мешканці 10-ї секції! ", "content": "<p>Ми розпочинаємо процес збору документів на реєстрацію права власності на Вашу секцію. Просимо Вас протягом тижня завітати до центру продажу ЖК Галицький Лев та захопити з собою відповідні документи: договір та паспорт, також не забути кошти на відповідні реєстраційні процедури - 1 400 гривень за один об\'єкт (квартиру, комірку, гараж, підвал тощо).</p><p>Звісно якщо Ви писали заяву на виготовлення технічного паспорту. З метою впорядкування черги, щоб не створювати зайвого ажіотажу в центрі продажів просимо Вас записуватись на подачу документів до менеджерів за телефонами ЦП.  Вам буде призначена зручна для Вас дата та час прийому документів.</p>" },' +
		'{"title" : "Шановні мешканці! ", "content": "<p>На Ваші чисельні прохання та з метою кращого контролю за якістю та вчасністю розміщення фотозвітів відтепер щотижневе інформування про стан будівництва у секціях, де ведуться роботи, буде здійснюватися у П\'ЯТНИЦЮ, наприкінці робочого дня!</p>" }' +
		']}';
		var blog_obj = JSON.parse(blog_data);
		var blog_index = $(this).closest('.swiper-slide').index();
		
		$('.pbox_content .htitle').text(blog_obj.items[blog_index].title);
		$('.pbox_content .text').html(blog_obj.items[blog_index].content);
		
		$('#overlay_blog').fadeIn(200, function(){
			$('#popup_blog').animate({'right': '0px'}, 200);
		});
		return false;
	});
	$('#popup_blog .close, #overlay_blog').click(function(){
		$('#popup_blog').animate({'right': '-750px'}, 200, function(){
			$('#overlay_blog').fadeOut(200);
		});
		return false;
	});
	
	/*popup detail*/
	$('.btn_detail').click(function(){
		$('#overlay_detail').fadeIn(200, function(){
			$('#popup_detail').animate({'right': '0px'}, 200);
		});
		return false;
	});
	$('#popup_detail .close, #overlay_detail').click(function(){
		$('#popup_detail').animate({'right': '-750px'}, 200, function(){
			$('#overlay_detail').fadeOut(200);
		});
		return false;
	});
	
	/*blog scroll*/
	$('.pbox_blog .pbox_content').slimScroll({
		height: '500px',
		railVisible: true,
		alwaysVisible: true,
		railOpacity: 1,
	});
	
	/*detail scroll*/
	$('.pbox_detail').slimScroll({
		height: '100%',
		railVisible: true,
		alwaysVisible: true,
		railOpacity: 1,
	});
	
	/*photo archive*/
	$('.m_archive .month a').click(function(){
		$(this).closest('.month').find('a').removeClass('active');
		$(this).addClass('active');
		var left_pos = $(this).position().left;
		$('.m_archive .scrollbar span').css('left', left_pos+19+'px');
		
		var month_id = $(this).attr('href');
		
		$('.album_tab').removeClass('active');
		$(month_id).addClass('active');
		
		return false;
	});
	
	/*chose flat*/
	$('.choose_btn').click(function(){
		$('html, body').animate({scrollTop: $('.m_flat').offset().top-78}, 500);
		return false;
	});
	$('.area_menu a').click(function(){
		/*
		var f_tab = $(this).attr('href');
		$('.m_flat .area').removeClass('active');
		$(f_tab).addClass('active');
		if(f_tab=='#f-flats'){
			var f_subarea = $(this).attr('data-subarea-link');
			if(f_subarea=='d'){
				 $('.area_flats').attr('data-subarea', 'd');
			} else {
				 $('.area_flats').attr('data-subarea', 'p');
			}
		}
		
		$('.area_menu a').removeClass('active');
		$(this).addClass('active');
		$('.area_active').css('left', $(this).position().left+'px');
		*/
		return false;
	});
	$('.floor_items a').click(function(){
		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
		$('.floor_info .floor_number').text($(this).text());
		return false;
	});
	$('.b-area-label').click(function(){
		if(!$(this).hasClass('sold')) {
			$('.m_flat .area').removeClass('active');
			$('#f-flats').addClass('active');
			
			$('.area_menu a').removeClass('active');
			$('.area_menu a').eq(1).addClass('active');
			$('.area_active').css('left', $('.area_menu a').eq(1).position().left+'px');
			
			$('.area_flats').attr('data-subarea', 'p');
			var section_id = $(this).attr('data-section-id');
			if(section_id=='14'){
				section_id = '13';
			}
			$('.area_flats .plans').removeClass('active');
			$('.area_flats .plans_'+section_id).addClass('active');
			$('.area_flats').attr('data-section', section_id);
		}
		return false;
	});
	$('.area_map area').click(function(){
		$('.b-area-label-'+$(this).attr('data-section-id')).click();
		return false;
	});
	$('.plans_flat .btn').click(function(){
		$('.m_flat .area').removeClass('active');
		$('#f-flats').addClass('active');
		
		$('.area_menu a').removeClass('active');
		$('.area_menu a').eq(2).addClass('active');
		$('.area_active').css('left', $('.area_menu a').eq(2).position().left+'px');
		
		$('.area_flats').attr('data-subarea', 'd');
		var flat_id = $(this).parent().attr('data-flat-id');
		$('.area_flats .flat_detail').removeClass('active');
		$('.area_flats .flat_detail_'+flat_id).addClass('active');
		var flat_number = $(this).parent().attr('data-flat-number');
		var flat_square = $(this).parent().attr('data-flat-square');
		var flat_room = $(this).parent().attr('data-flat-room');
		var flat_price = $(this).parent().attr('data-flat-price');
		$('.flat_info .flat_number').text(flat_number);
		$('.flat_info .flat_ch_square').text(flat_square);
		$('.flat_info .flat_ch_room').text(flat_room);
		$('.flat_info .flat_ch_price').text(flat_price);
		$('.flat_select_text').text(flat_number);
		$('.flat_items a').removeClass('active');
		$('.flat_items a[data-flat-id="'+flat_id+'"]').addClass('active');
	});
	$('.flat_items a').click(function(){
		$('.plans_flat_'+$(this).attr('data-flat-id')).find('.btn').click();
		return false;
	});
	$('.area_flats').on('click', '.back', function(){
		var back_id = $('#f-flats').attr('data-subarea');
		if(back_id=='d'){
			$('.m_flat .area').removeClass('active');
			$('#f-flats').addClass('active');
		
			$('.area_flats').attr('data-subarea', 'p');
		
			$('.area_menu a').removeClass('active');
			$('.area_menu a').eq(1).addClass('active');
			$('.area_active').css('left', $('.area_menu a').eq(1).position().left+'px');
		} else {
			$('.m_flat .area').removeClass('active');
			$('#f-sections').addClass('active');
			
			$('.area_flats').attr('data-subarea', 'p');
			
			$('.area_menu a').removeClass('active');
			$('.area_menu a').eq(0).addClass('active');
			$('.area_active').css('left', $('.area_menu a').eq(0).position().left+'px');
		}
		
		return false;
	});
	$('.flat_detail .btn').hover(
		function(){
			 var plan_icon_id = $(this).attr('data-plan-icon-id');
			 $(this).closest('.flat_detail').find('.item').removeClass('active');
			 $(this).closest('.flat_detail').find('.item_'+plan_icon_id).addClass('active');
		},
		function(){
			 $(this).closest('.flat_detail').find('.item').removeClass('active');
		}
	);
	$('.flat_detail .item').hover(
		function(){
			 var plan_icon_id = $(this).attr('data-plan-icon-id');
			 $(this).closest('.flat_detail').find('.btn').removeClass('active');
			 $(this).closest('.flat_detail').find('.btn[data-plan-icon-id="'+plan_icon_id+'"]').addClass('active');
		},
		function(){
			 $(this).closest('.flat_detail').find('.btn').removeClass('active');
		}
	);
	$('.area_map area, .b-area-label').hover(
		function(){
			 var area_index = $(this).attr('data-section-id');
			 $('.b-area-hover').removeClass('active');
			 $('.b-area-hover-'+area_index).addClass('active');
			 $('.b-area-label').removeClass('active');
			 $('.b-area-label-'+area_index).addClass('active');
			 $('.b-area-tooltip').show();
			 $('.b-area-nav .num').text(area_index);
			 
		},
		function(){
			 $('.b-area-hover').removeClass('active');
			 $('.b-area-label').removeClass('active');
			 $('.b-area-tooltip').hide();
		}
	);
	$('.area_map area').hover(function(){
		if($(this).attr('data-section-count')!='0'){
			$('.b-area-tooltip .circle').html('<span class="num">'+$(this).attr('data-section-count')+'</span><br/>квартир');
		} else {
			$('.b-area-tooltip .circle').html('усі<br/> квартири<br/> продані');
		}
	});
	$('.area_map').mousemove(function(e){
		if(width>720){
			$('.b-area-tooltip').css({'left': e.pageX-$(this).offset().left-120+'px', 'top': e.pageY-$(this).offset().top+'px'});
		} else {
			$('.b-area-tooltip').css({'left': e.pageX-$(this).offset().left+0+'px', 'top': e.pageY-$(this).offset().top+20+'px'});
		}
	});
	$('#plans13-hovers path, #plans15-hovers path').hover(
		function(){
			$(this).css({'opacity': '1'});
			
			$('.plans_flat_'+$(this).attr('data-flat-id')).find('.btn').addClass('active');
			var flat_number = $('.plans_flat_'+$(this).attr('data-flat-id')).attr('data-flat-number');
			var flat_square = $('.plans_flat_'+$(this).attr('data-flat-id')).attr('data-flat-square');
			var flat_room = $('.plans_flat_'+$(this).attr('data-flat-id')).attr('data-flat-room');
			var flat_price = $('.plans_flat_'+$(this).attr('data-flat-id')).attr('data-flat-price');
			$('.flat_info .flat_number').text(flat_number);
			$('.flat_info .flat_ch_square').text(flat_square);
			$('.flat_info .flat_ch_room').text(flat_room);
			$('.flat_info .flat_ch_price').text(flat_price);
			$('.flat_info').addClass('active');
		},
		function(){
			$(this).css({'opacity': '0'});
			
			$('.plans_flat_'+$(this).attr('data-flat-id')).find('.btn').removeClass('active');
		}
	);
	$('.plans_flats .btn').hover(
		function(){
			$('#plans'+$(this).parent().attr('data-flat-id')).css({'opacity': '1'});
		},
		function(){
			$('#plans'+$(this).parent().attr('data-flat-id')).css({'opacity': '0'});
		}
	);
	if(width<720){
		$('.b-area-hover-13, .b-area-label-13').addClass('active');
		$('.area_map').attr('data-mob-section-id', '13');
		$('.b-area-nav .prev').click(function(){
			var mob_index = $('.area_map').attr('data-mob-section-id');
			if(mob_index>13) {
				mob_index = parseInt(mob_index)-1;
			}
			$('.area_map').attr('data-mob-section-id', mob_index);
			$('.b-area-hover, .b-area-label').removeClass('active');
			$('.b-area-hover-'+mob_index+', .b-area-label-'+mob_index).addClass('active');
			$('.b-area-nav .num').text(mob_index);
		});
		$('.b-area-nav .next').click(function(){
			var mob_index = $('.area_map').attr('data-mob-section-id');
			if(mob_index<15) {
				mob_index = parseInt(mob_index)+1;
			}
			$('.area_map').attr('data-mob-section-id', mob_index);
			$('.b-area-hover, .b-area-label').removeClass('active');
			$('.b-area-hover-'+mob_index+', .b-area-label-'+mob_index).addClass('active');
			$('.b-area-nav .num').text(mob_index);
		});
	}
	
	/*news carousel*/
	var news_swiper = new Swiper('.news_carousel .swiper-container', {
		//autoplay: 3000,
		speed: 750,
		slidesPerView: 3,
        spaceBetween: 50,
		slidesPerGroup: 3,
		nextButton: '.news_carousel .next',
        prevButton: '.news_carousel .prev',
		pagination: '.news_carousel .pagination',
		paginationType: 'bullets',
		paginationClickable: true,
		paginationBulletRender: function (index, className) {
			return '<a class="num ' + className + '">' + (index + 1) + ' <span>сторінка</span></a>';
		},
		loop: false,
		breakpoints: {
			720: {
			  slidesPerView: 1,
			  slidesPerGroup: 1,
			  spaceBetween: 10
			},
			1200: {
			  slidesPerView: 2,
			  slidesPerGroup: 2,
			  spaceBetween: 20
			}
		}
    });
	
	/*menu popup*/
	$('.menu_btn').click(function () {
		$('.menu_popup').fadeIn();
		
		return false;
	});
	$('.menu_popup .close_btn').click(function () {
		$('.menu_popup').fadeOut();
		
		return false;
	});
	
	/*gallery*/
	$('.gallery_in a').click(function(){
		var big_img = $(this).attr('href');
		$(this).closest('.album_tab').find('.preview img').attr('src', big_img);
		
		$(this).closest('.gallery_in').find('a').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('.preview a').click(function(){
		return false;
	});
});

/*print plans*/

function MySourcetoPrint(source) {
	return "<html><head><script>function step1(){\n" +
			"setTimeout('step2()', 10);}\n" +
			"function step2(){window.print();window.close()}\n" +
			"</scri" + "pt></head><body onload='step1()'>\n" +
			"<img src='" + source + "' /></body></html>";
}

function MyPrint(source) {
	Pagelink = "about:blank";
	var pwa = window.open(Pagelink, "_new");
	pwa.document.open();
	pwa.document.write(MySourcetoPrint(source));
	pwa.document.close();
}
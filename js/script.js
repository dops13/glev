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
	
	/*news*/
	$('.news_carousel .pag a.num').click(function(){
		$(this).closest('.pag').find('a.num').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('.news_carousel .pag a.prev').click(function(){
		var prev_page = $(this).parent().find('a.num.active').prev('a.num');
		if(prev_page.length){
			$(this).closest('.pag').find('a.num').removeClass('active');
			prev_page.addClass('active');
		}
		return false;
	});
	$('.news_carousel .pag a.next').click(function(){
		var next_page = $(this).parent().find('a.num.active').next('a.num');
		if(next_page.length){
			$(this).closest('.pag').find('a.num').removeClass('active');
			next_page.addClass('active');
		}
		return false;
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
		$('.flat_info .flat_number').text(flat_number);
		$('.flat_select_text').text(flat_number);
		$('.flat_items a').removeClass('active');
		$('.flat_items a[data-flat-id="'+flat_id+'"]').addClass('active');
	});
	$('.plans_flat .btn').hover(function(){
		var flat_number = $(this).parent().attr('data-flat-number');
		var flat_square = $(this).parent().attr('data-flat-square');
		var flat_room = $(this).parent().attr('data-flat-room');
		var flat_price = $(this).parent().attr('data-flat-price');
		$('.flat_info .flat_number').text(flat_number);
		$('.flat_info .flat_ch_square').text(flat_square);
		$('.flat_info .flat_ch_room').text(flat_room);
		$('.flat_info .flat_ch_price').text(flat_price);
		$('.flat_info').addClass('active');
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
	
	/* main banner carousel */	
	var owl1 = $(".m_banner .owl-carousel");
	
	owl1.owlCarousel({
		items: 1,
		margin: 0,
		nav: false,
		dots: false,
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 5000,
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
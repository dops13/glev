$(function() {
	
	/* Validation Forms */
	
	/* Contact Form
	$("#contact_form").validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			tema: {
				required: true
			},
			message: {
				required: true
			}
		},
		messages: {
			name: {
				required: 'Поле заполненно не корректно'
			},
			email: {
				required: 'Поле заполненно не корректно',
				email: 'Поле заполненно не корректно'
			}
		},
		success: "valid",
		submitHandler: function() {
			$('#contact_form').fadeOut();
			$('#contact_form').parent().parent().parent().find('.alert_send').delay(600).fadeIn();
		}
	});*/
	
});
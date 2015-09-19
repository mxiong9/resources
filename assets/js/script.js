$(document).ready(function() {

	$('#next-page').hide();
	$('#first').addClass('active');

	function blink() {
		$('#enter').fadeOut(1000);
		$('#enter').fadeIn(1000);
	}

	setInterval(blink, 1000);

	$("#skip").click(function() {
		$('#enter').remove();
		$('#first').fadeOut(1000);
		$('.intro').fadeOut(1000);
		$('#next-page').delay(1000).fadeIn(1000);
		$('#skip').fadeOut(1000);
		$('#about').fadeIn(1000);
	});

	$(document).keypress(function(event) {
		var keycode = (event.keyCode ? event.keyCode: event.which);
		if (keycode == '13') {
			if ($('#first').hasClass('active')) {
				$('#first').fadeOut(1000);
				$('#first').removeClass('active');
				$('#second').addClass('active');
				$('#second').delay(1000).fadeIn(900);
			}
			else if ($('#second').hasClass('active')) {
				$('#second').fadeOut(1000);
				$('#second').removeClass('active');
				$('#third').addClass('active');
				$('#third').delay(1000).fadeIn(900);
			}
			else if ($('#third').hasClass('active')) {
				$('#third').fadeOut(1000);
				$('#third').removeClass('active');
				$('#fourth').addClass('active');
				$('#fourth').delay(1000).fadeIn(900);
			}
			else if ($('#fourth').hasClass('active')) {
				$('#fourth').fadeOut(1000);
				$('#fourth').removeClass('active');
				$('#fifth').addClass('active');
				$('#fifth').delay(1000).fadeIn(900);
			}
			else if ($('#fifth').hasClass('active')) {
				$('#fifth').fadeOut(1000);
				$('#fifth').removeClass('active');
				$('#sixth').addClass('active');
				$('#sixth').delay(1000).fadeIn(900);
			}
			else {
				$('#enter').remove();
				$('#sixth').fadeOut(1000);
				$('#sixth').removeClass('active');
				$('#skip').fadeOut(1000);
				$('#next-page').delay(2500).fadeIn(1000);
			}
		}
	});

	$('.caption').addClass('shift-down');
	
	$('.container').hover(function() {
		if (!$(this).hasClass('subtitles')) {
			$(this).addClass('subtitles');
			$(this).children().fadeIn(800);
			$(this).children().addClass('shift');
		}
		else {
			$(this).removeClass('subtitles');
			$(this).children().removeClass('shift');
			$(this).children().last().hide();
		}
	});

	//modal container//
	$('#button-one').click(function() {
		$('#one-container').fadeIn(1000);
	});

	$('#button-two').click(function() {
		$('#two-container').fadeIn(1000);
	});

	$('#button-three').click(function() {
		$('#three-container').fadeIn(1000);
	});

	$('#button-four').click(function() {
		$('#four-container').fadeIn(1000);
	});

	$('#button-five').click(function() {
		$('#five-container').fadeIn(1000);
	});

	$('#button-six').click(function() {
		$('#six-container').fadeIn(1000);
	});

	$('.close').click(function() {
		$('.modal-container').fadeOut(1000);
	})

	$('.modal-overlay').click(function() {
		$('.modal-container').fadeOut(1000);
	});


});
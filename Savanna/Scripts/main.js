$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 500) {
		$(".navbar").addClass("on-scroll");
	} else {
		$(".navbar").removeClass("on-scroll");
	}
});


$('#carouselPackshot').owlCarousel({
	loop: true,
	margin: 0,
	autoHeight: false,
	dots: false,
	responsiveClass: true,
	afterAction: afterAction,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 2,
			nav: false
		},
		1000: {
			items: 2,
			nav: true,
			loop: false
		}
	}
})
function afterAction() {
	var elem = this.owl.owlItems;
	var index = this.owl.visibleItems;

	var height = elem.eq(index).height();

	//.owl-wrapper is the element that we are high.
	elem.parents('.owl-wrapper, .owl-carousel').css('height', height);
}


var selector = '.bottle-container li div';

$(selector).on('click', function () {
	$(selector).removeClass('focus');
	$(this).addClass('focus');
});

$('#packshotContainer .btn-primary').click(function (e) {
	/*e.preventDefault();*/
	$("#packshotListContainer").hide("slide", { direction: "left" }, 500);
	setTimeout($('#closeSwiper').css('display', "block"), 2000);
	setTimeout($('#carouselPackshot .carousel-control-prev').css('display', "block"), 2000);
	setTimeout($('#carouselPackshot .carousel-control-next').css('display', "block"), 2000);
	setTimeout($('#carouselPackshot').css('display', "block"), 2000);
	$('#mainPackshots').css('display', "none");
	$('#carouselPackshot .learn-more').css('display', "none");
	setTimeout($(this).closest('[class^="col-md"]')
		.removeClass('col-md-6')
		.addClass('col-md-12'), 2000);
});
$('#closeSwiper').click(function (e) {
/*	e.preventDefault();*/
	$("#packshotListContainer").show("slide", { direction: "left" }, 1000);
	setTimeout($('#closeSwiper').css('display', "none"), 1500);
	setTimeout($('#carouselPackshot .carousel-control-prev').css('display', "none"), 1500);
	setTimeout($('#carouselPackshot .carousel-control-next').css('display', "none"), 1500);
	setTimeout($('#carouselPackshot').css('display', "none"), 1500);
	setTimeout($('#mainPackshots').css('display', "block"), 1500);
	
	$('#carouselPackshot .learn-more').css('display', "block");

	$(this)	// Find parent with the class that starts with "col-md"
		// Change class to "col-md-3"
		.closest('[class^="col-md"]')
		.removeClass('col-md-12')
		.addClass('col-md-6')
});

$('#dryIcon').on('click', function (e) {
/*	e.preventDefault();*/
	if ($('.dryPackshot').css('display') == "none") {
		$('.dryPackshot').css('display', "block");
		$('.angryPackshot').css('display', "none");
		$('.nonalcPackshot').css('display', "none");
		$('.lightPackshot').css('display', "none");
		$('.chilliPackshot').css('display', "none");
	}
	else {
		$('.dryPackshot').css('display', "none");
	}
});


$('#angryIcon').on('click', function (e) {
	/*e.preventDefault();*/
	if ($('.angryPackshot').css('display') == "none") {
		$('.angryPackshot').css('display', "block");
		$('.dryPackshot').css('display', "none");
		$('.nonalcPackshot').css('display', "none");
		$('.lightPackshot').css('display', "none");
		$('.chilliPackshot').css('display', "none");
	}
	else {
		$('.angryPackshot').css('display', "none");
	}
});
$('#nonalcIcon').on('click', function (e) {
/*	e.preventDefault();*/
	if ($('.nonalcPackshot').css('display') == "none") {
		$('.nonalcPackshot').css('display', "block");
		$('.angryPackshot').css('display', "none");
		$('.dryPackshot').css('display', "none");
		$('.lightPackshot').css('display', "none");
		$('.chilliPackshot').css('display', "none");
	}
	else {
		$('.nonalcPackshot').css('display', "none");
	}
});
$('#lightIcon').on('click', function (e) {
	/*e.preventDefault();*/
	if ($('.lightPackshot').css('display') == "none") {
		$('.lightPackshot').css('display', "block");
		$('.angryPackshot').css('display', "none");
		$('.dryPackshot').css('display', "none");
		$('.nonalcPackshot').css('display', "none");
		$('.chilliPackshot').css('display', "none");
	}
	else {
		$('.lightPackshot').css('display', "none");
	}
});
$('#chilliIcon').on('click', function (e) {
/*	e.preventDefault();*/
	if ($('.chilliPackshot').css('display') == "none") {
		$('.chilliPackshot').css('display', "block");
		$('.angryPackshot').css('display', "none");
		$('.dryPackshot').css('display', "none");
		$('.nonalcPackshot').css('display', "none");
		$('.lightPackshot').css('display', "none");
	}
	else {
		$('.chilliPackshot').css('display', "none");
	}
});




$(document).ready(function () {
	$("#generalModal").modal('show');
});


$(document).ready(function () {
	$('.dropdown-toggle').mouseover(function () {
		$('.dropdown-menu').show();
	})

	$('.dropdown-toggle').mouseout(function () {
		t = setTimeout(function () {
			$('.dropdown-menu').hide();
		}, 100);

		$('.dropdown-menu').on('mouseenter', function () {
			$('.dropdown-menu').show();
			clearTimeout(t);
		}).on('mouseleave', function () {
			$('.dropdown-menu').hide();
		})
	})
})


function smoothScrollingTo(target) {
	$('html,body').animate({ scrollTop: $(target).offset().top }, 500);
}
$('a[href^=\\#]').on('click', function (event) {
	event.preventDefault();
	smoothScrollingTo(this.hash);
});
$(document).ready(function () {
	smoothScrollingTo(location.hash);
});




$(function () {
	var img = $("#wave"),
		width = img.get(0).width,
		screenWidth = $(window).width(),
		duration = 1500;

	function animateWave() {		
		$("#wave").fadeIn();
		img.css("top", -width).animate({
			"top": screenWidth
		}, duration).fadeOut();
	}

	$(document).ready(function () {
		animateWave();
	});
	$(window).one('scroll', function () {
		animateWave();
	});
});


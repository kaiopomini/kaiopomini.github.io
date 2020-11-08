$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false,
	})

	const typed = new Typed(".typed", {
		strings: ["Web Developer", "Javascript", "ReactJs", "NodeJs ^2000"],
		typeSpeed: 70,
		backSpeed: 40,
		loop: true,
		startDelay: 1000,
		cursorChar: '_',

	})

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
	})
})
$(window).on('load', function() {
	$('.loader .inner').fadeOut(500, function() {
		$('.loader').fadeOut(750)
	})
})

// Superslides plugin - home images
$(document).ready(function () {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false,
	})

	// cmd window - home
	const typed = new Typed(".typed", {
		strings: ["Javascript", "Node.js", "React.Js","React Native", "Web Developer ^3000"],
		typeSpeed: 70,
		backSpeed: 40,
		loop: true,
		startDelay: 1000,
		cursorChar: '_',
		smartBackspace: false

	})


	

	// Navigation bar 
	$(".down a").click(function(e) {
		e.preventDefault();
		let targetElement = $(this).attr("href")
		let targetPosition = $(targetElement).offset().top
		$("html, body").animate({ scrollTop: targetPosition - 50 }, 1000)
	})

	$("#navigation li a").click(function(e) {
		e.preventDefault();
		let targetElement = $(this).attr("href")
		let targetPosition = $(targetElement).offset().top
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
	})

	$("#navigation a").click(function(e) {
		e.preventDefault();
		let targetElement = $(this).attr("href")
		let targetPosition = $(targetElement).offset().top
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
	})


	const nav = $("#navigation")
	const navTop = nav.offset().top

	$(window).on("scroll", stickyNavigation)
	function stickyNavigation() {
		const body = $("body")
		if ($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px")
			body.addClass("fixedNav")
		} else {
			body.css("padding-top", 0)
			body.removeClass("fixedNav")
		}
	}
})
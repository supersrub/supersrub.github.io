var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass('is-active');
  $('#nav').toggleClass('show');
  $('body').toggleClass('overflow-hidden')
});
$(window).scroll(function() {
	if ($(window).scrollTop()>190){
		$('div .logo').hide();
		$('#request-call').addClass('show');
		$('#homelink').addClass('show')
	}	
		else{
		$('div .logo').show();
		$('#request-call').removeClass('show');
		$('#homelink').removeClass('show')
	}
});
$(window).resize(function() {
	if (($hamburger.hasClass('is-active')) && ($(window).width()>960)) {
		$hamburger.click()
		}

});

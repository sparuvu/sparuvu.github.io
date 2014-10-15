var sparuvu = (function(){
	function bindings(){
		$(document).on("click", "#scrolly", function(e) {
			$('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500);
		});
	}
	return {
		init: function() {
			bindings();
		}
	}
}());

$(document).ready(function(){
	sparuvu.init();
});

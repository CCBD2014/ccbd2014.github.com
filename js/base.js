$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 335) {
			$('#sideBar').css({
				'position' : 'fixed',
				'top' : '20px'
			});
		} else {
			$('#sideBar').css('position', '');
		}
	});
});

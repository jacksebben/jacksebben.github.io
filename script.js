let zIndexCounter = 1;

function focusWin(win, active) {
	// Show/hide visuals to indicate focus/unfocused
	if (active) {
		bringFront(win);
		const titleBar = win.find('.inactive-title-bar');
		titleBar.removeClass('inactive-title-bar');
		titleBar.addClass('title-bar');
		titleBar.find('.resize').show();
	} else {
		const titleBar = win.find('.title-bar');
		titleBar.removeClass('title-bar');
		titleBar.addClass('inactive-title-bar');
		titleBar.find('.resize').hide();
	}
}

function bringFront(elem) {
	elem.css('z-index', zIndexCounter);
	zIndexCounter++;
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit", hour12: true});
    $('#time').text(timeString);
	$('#year').text(now.getFullYear());
}

$(document).ready(function() {
	// Updates current time in top right
	updateTime(); // Inital
	setInterval(updateTime, 2000); // Update every two seconds
	
	
	// If we click on desktop, make windows inactive
	// If we click on window, make only that window active
	$('body').on('click', function(e) {
		const target = $(e.target);
		const clickedWin = $(target).closest('.window');
		
		focusWin($('.window'), false);
		
		// Only do if we clicked window
		if (clickedWin.length) {
			focusWin(clickedWin, true);
		}
	});
	
	$('.open-win').on('click', function(e) {
		const target = $(this).data('target');
		const newWin = $(target);
		newWin.show();
		
		// Delay focus until after the body click handler
		setTimeout(() => {
			focusWin(newWin, true);
		}, 0);
	});
	
	$('.window .title-bar .resize').on('click', function() {
		$(this).closest('.window').hide();
	});
});
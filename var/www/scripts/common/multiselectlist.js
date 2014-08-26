include_script("/scripts/jquery.longpress.js");

var timetouch;
$(function() {
	var f = $("fieldset")[0];
	if ($(f).hasClass("selectable")  ) {
		$(f).find("li").on("mousedown touchstart", function(event) {
			timetouch = new Date().getTime();
			console.log("Pressing on " , $(this));
		});
		$(f).find("li").on("mouseup touchend", function(event) {
			var timetouch2 = new Date().getTime();
			var seconds = timetouch2 - timetouch;
			timetouch = 0;
			console.log("Pressed for " + seconds + " on " , $(this));
			event.preventDefault();
			event.stopPropagation();			
		});		
	}
	/*$('fieldset.selectable li').longpress(function(event) {
		// longpress callback
		if ($(this).hasClass("selected")){
			$(this).removeClass("selected");
			$(this).find("input").attr("checked","");
		} else {
			$(this).addClass("selected");
			$(this).find("input").attr("checked","checked");
		}
		console.log('You just longpress-ed an item.', event); 
		event.preventDefault();
		event.stopPropagation();
	});*/
});


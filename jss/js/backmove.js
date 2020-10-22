import Parallax from 'parallax-js'
 /*START PLUGIN jParallax*/
(function($) {
	$.fn.extend({
		jParallax: function(opt) {
			var defaults = { moveFactor: 5, targetContainer: 'body' },
				o = $.extend(defaults, opt);
			return this.each(function() {
				var background = $(this);
				$(o.targetContainer).on('mousemove', function(e){
					mouseX = e.pageX;
					mouseY = e.pageY;
					windowWidth = $(window).width();
					windowHeight = $(window).height();
					percentX = (0-((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
					percentY = (0-((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
					background[0].style.transform = "translate("+percentX+"%,"+percentY+"%)";
				});
			});
		}					
	});
}(jQuery));
/*END PLUGIN jParallax*/

/*Invoke*/
$('.bg1').jParallax({ moveFactor: 5, targetContainer: '.parallax' });

$('.bg2').jParallax({ moveFactor: 10, targetContainer: '.parallax' });

$('.bg3').jParallax({ moveFactor: 15, targetContainer: '.parallax' });

$('.bg4').jParallax({ moveFactor: 20, targetContainer: '.parallax' });
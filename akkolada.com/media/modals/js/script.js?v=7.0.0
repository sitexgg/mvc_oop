/**
 * @package         Modals
 * @version         7.0.0
 * 
 * @author          Peter van Westen <info@regularlabs.com>
 * @link            http://www.regularlabs.com
 * @copyright       Copyright © 2016 Regular Labs All Rights Reserved
 * @license         http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 */

var modals_class = modals_class || 'modal';
var modals_defaults = modals_defaults || {};

var initModals   = null;
var modalsResize = null;

(function($) {
	"use strict";

	$(document).ready(function() {
		if (typeof( window['modals_defaults'] ) != "undefined") {
			initModals();
		}
	});

	initModals = function() {
		var modal_delay = null;

		$.each($('.' + modals_class), function(i, el) {
			var $el      = $(el);

			// Prevent modals from being initialised multiple times when initModals is triggered again
			if ($el.attr('data-modal-done')) {
				return;
			}

			var defaults = $.extend({}, modals_defaults);

			// Get data from tag
			$.each(el.attributes, function(index, attr) {
				if (attr.name.indexOf("data-modal-") === 0) {
					var key       = $.camelCase(attr.name.substring(11));
					defaults[key] = attr.value;
				}
			});

			$el.attr('data-modal-done', '1');

			// remove width/height if inner is already set
			if (defaults['innerWidth'] != undefined) {
				delete defaults['width'];
			}
			if (defaults['innerHeight'] != undefined) {
				delete defaults['height'];
			}


			// set true/false values to booleans
			for (var key in defaults) {
				if (defaults[key] == 'true') {
					defaults[key] = true;
				} else if (defaults[key] == 'false') {
					defaults[key] = false;
				} else if (!isNaN(defaults[key])) {
					defaults[key] = parseFloat(defaults[key]);
				}
			}


			
			defaults['onComplete'] = function() {
				modalsResize();


				$('#colorbox').addClass('complete');
				$el.addClass('modal_active');

				if (!$el.colorbox.settings.startWidth) {
					$el.colorbox.settings.startWidth = $("#cboxContent").outerWidth();
				}
			};

			defaults['onClosed'] = function() {
				$('#colorbox').removeClass('complete');
				$el.removeClass('modal_active');
			};

			// Bind the modal script to the element
			$el.colorbox(defaults);

		});


		$(document).bind('cbox_open', function() {
			$("#colorbox").swipe({
				swipeLeft : function(event, direction, distance, duration, fingerCount) {
					$.colorbox.next();
				},
				swipeRight: function(event, direction, distance, duration, fingerCount) {
					$.colorbox.prev();
				},
				fallbackToMouseEvents : false
			});
		});
	};

	modalsResize = function() {
		$.each($('#colorbox'), function(i, el) {
			var $el      = $(el);
			var $title   = $('#cboxTitle');
			var $content = $('#cboxLoadedContent');

			var $title_height = $el.hasClass('no_title') ? 0 : $title.outerHeight() + 1;
			var $margin_top   = parseInt($content.css('marginTop'));

			if ($el.hasClass('no_title')) {
				$el.removeClass('has_scrollbar');
				if ($content.outerHeight() < $content.get(0).scrollHeight) {
					$el.addClass('has_scrollbar');
				}
			}

			if ($title_height <= $margin_top) {
				return;
			}

			var $div_height = $title_height - $margin_top;
			$content.css('marginTop', $title_height);

			if (parseInt($el.css('top')) < 23) {
				// resize the inner content
				$content.css('height', parseInt($content.css('height')) - $div_height);
				return;
			}

			// resize the window
			$el.css('height', parseInt($el.css('height')) + $div_height);
			$el.css('top', parseInt($el.css('top')) - ($div_height / 2));
			$('#cboxWrapper').css('height', parseInt($('#cboxWrapper').css('height')) + $div_height);
			$('#cboxContent').css('height', parseInt($('#cboxContent').css('height')) + $div_height);
			$('#cboxMiddleLeft').css('height', parseInt($('#cboxMiddleLeft').css('height')) + $div_height);
			$('#cboxMiddleRight').css('height', parseInt($('#cboxMiddleRight').css('height')) + $div_height);

		});
	};

	var resizeTimer;
	var modals_window_width  = $(window).width();
	var modals_initial_width = 0;

	$(document).ready(function() {
		modals_window_width  = $(window).width();
		modals_initial_width = $("#cboxContent").outerWidth();
	});

	var resizeColorBoxOnBrowserResize = function() {
		if (resizeTimer) {
			clearTimeout(resizeTimer);
		}

		resizeTimer = setTimeout(function() {
			if (modals_window_width == $(window).width()) {
				return;
			}

			if (!$('#cboxOverlay').is(':visible')) {
				return;
			}

			$.each($('.modal_active'), function(i, el) {
				var $el = $(el);

				if ($("#cboxContent").outerWidth() * 1.2 < $(window).width() && $("#cboxContent").outerWidth() >= $el.colorbox.settings.startWidth) {
					return;
				}

				var original_speed   = $el.colorbox.settings.speed;
				var original_fadeOut = $el.colorbox.settings.fadeOut;

				$el.colorbox.settings.fadeOut = 0;

				$el.colorbox.close();

				$el.colorbox.settings.fadeOut = original_fadeOut;
				setTimeout(function() {
					$el.click();
				}, 10);
			});

			modals_window_width = $(window).width();
		}, 300)
	};

	// Resize Colorbox when resizing window or changing mobile device orientation
	$(window).resize(resizeColorBoxOnBrowserResize);
	window.addEventListener("orientationchange", resizeColorBoxOnBrowserResize, false);
})(jQuery);

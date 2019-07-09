		(function ($) {

			"use strict";

			var $document = $(document),
			    $window = $(window),

			// Template options
			templateOption = {
				stickyHeader: true, // sticky header enable (set 'false' for disable)
				smoothScroll: true, // smooth scroll enable (set 'false' for disable)
				backToTop: true // back to top button enable (set 'false' for disable)
			},

			// Google map options
			googleMapOption = {
				latitude: 37.36274700000004,
				longitude: -122.03525300000001,
				zoom: 14 // map zoom value
			},

			// Template Blocks
			blocks = {
				mainSlider: $('#mainSlider'),
				slideNav: $('#slide-nav'),
				categoryCarousel: $('.category-carousel'),
				servicesCarousel: $('.services-mobile-carousel'),
				testimonialsCarousel: $('.testimonials-carousel'),
				testimonialsCarousel1: $('.testimonials-carousel-1'),
				servicesBlockAlt: $('.services-block-alt'),
				textIconCarousel: $('.text-icon-carousel'),
				personCarousel: $('.person-carousel'),
				numbersCarousel: $('.numbers-carousel'),
				couponsCarousel: $('.coupons-carousel'),
				brandCarousel: $('.brand-carousel'),
				submenu: $('[data-submenu]'),
				googleMap: $('#googleMap'),
				counterBlock: $('.numbers-carousel'),
				isotopeGallery: $('#isotopeGallery'),
				slickGallery: $('#slickGallery'),
				postGallery: $('.blog-isotope'),
				postCarousel: $('.post-carousel'),
				newsCarousel: $('.news-carousel'),
				priceCarousel: $('.price-carousel'),
				textIconsCarousel: $('.text-icon-carousel'),
				prdCarousel: $('.prd-carousel'),
				postMoreLink: $('.view-more-post'),
				testimonialMoreLink: $('.view-more-testimonials'),
				getQuoteLink: $('.form-popup-link'),
				animation: $('.animation'),
				rangeSlider: $('#rangeSlider1'),
				stickyHeader: $(".header-sticky"),
				productImage: $("#mainImage")
			};
			// ligth box options
			lightbox.option({
				'fadeDuration': 300,
				'imageFadeDuration': 300,
				'alwaysShowNavOnTouchDevices': true
			}

			/* ---------------------------------------------
   			Scripts initialization
   --------------------------------------------- */
			);$document.ready(function () {

				var windowWidth = window.innerWidth || $window.width();
				var windowH = $window.height();

				// set background image inline
				if ($('[data-bg]').length) {
					$('[data-bg]').each(function () {
						var $this = $(this),
						    bg = $this.attr('data-bg');
						if ($this.hasClass('fullwidth-bg') || $this.hasClass('fullwidth')) {
							$this.css({
								'background-image': 'url(' + bg + ')'
							});
						} else {
							$this.find('.container').first().css({
								'background-image': 'url(' + bg + ')'
							});
						}
					});
				}

				// main slider
				if (blocks.mainSlider.length) {
					var $el = blocks.mainSlider;
					$el.on('init', function (e, slick) {
						var $firstAnimatingElements = $('div.slide:first-child').find('[data-animation]');
						doAnimations($firstAnimatingElements);
					});
					$el.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
						var $currentSlide = $('div.slide[data-slick-index="' + nextSlide + '"]');
						var $animatingElements = $currentSlide.find('[data-animation]');
						doAnimations($animatingElements);
					});
					$el.slick({
						arrows: true,
						dots: false,
						autoplay: true,
						autoplaySpeed: 7000,
						fade: true,
						speed: 1000,
						pauseOnHover: false,
						pauseOnDotsHover: true
					});
				}

				// number counter
				if (blocks.counterBlock.length) {
					blocks.counterBlock.waypoint(function () {
						$('.number > span.count', blocks.counterBlock).each(count);
						this.destroy();
					}, {
						triggerOnce: true,
						offset: '80%'
					});
				}

				// post isotope
				if (blocks.postGallery.length) {
					var $postgallery = $('.blog-isotope');
					$postgallery.imagesLoaded(function () {
						$postgallery.isotope({
							itemSelector: '.blog-post, .testimonial-card',
							masonry: {
								gutter: 30,
								columnWidth: '.blog-post, .testimonial-card'
							}
						});
					});
				}

				// post more ajax load
				if (blocks.postMoreLink.length) {
					var $postMoreLink = blocks.postMoreLink,
					    $postPreload = $('#postPreload'),
					    $postLoader = $('#moreLoader');

					$postMoreLink.on('click', function () {
						var target = $(this).attr('data-load');
						$postLoader.addClass('visible');
						$(this).hide();
						$.ajax({
							url: target,
							success: function success(data) {
								setTimeout(function () {
									$postPreload.append(data);
									$postLoader.removeClass('visible');
								}, 500);
							}
						});
					});
				}

				// testimonial more ajax load
				if (blocks.testimonialMoreLink.length) {
					var $testimonialMoreLink = blocks.testimonialMoreLink,
					    $testimonialPreload = $testimonialMoreLink.closest('.container').find('.testimonials-grid'),
					    $testimonialLoader = $('#moreLoader');

					$testimonialMoreLink.on('click', function () {
						var target = $(this).attr('data-load');
						$testimonialLoader.addClass('visible');
						$(this).hide();
						$.ajax({
							url: target,
							success: function success(data) {
								setTimeout(function () {
									$testimonialPreload.append(data);
									$testimonialLoader.removeClass('visible');
								}, 500);
							}
						});
					});
				}

				// product gallery
				if (blocks.productImage.length) {
					blocks.productImage.elevateZoom({
						gallery: 'productPreviews',
						cursor: 'pointer',
						galleryActiveClass: 'active',
						zoomWindowPosition: 1,
						zoomWindowFadeIn: 500,
						zoomWindowFadeOut: 500,
						lensFadeIn: 500,
						lensFadeOut: 500
					});
					var ezApi = blocks.productImage.data('elevateZoom');
					if ((window.innerWidth || $window.width()) < 769) {
						ezApi.changeState('disable');
					}
					$(window).on('resize', function () {
						if ((window.innerWidth || $window.width()) < 769) {
							ezApi.changeState('disable');
						} else {
							ezApi.changeState('enable');
						}
					});
					$('#productPreviews > a').on('click', function () {
						blocks.productImage.attr({
							src: $(this).attr('data-image'),
							'data-zoom-image': $(this).attr('data-zoom-image')
						});
					});
				}

				// rangeSlider
				if (blocks.rangeSlider.length) {
					var rangeSlider1 = document.getElementById('rangeSlider1');
					noUiSlider.create(rangeSlider1, {
						start: [100, 2000],
						connect: true,
						step: 100,
						padding: 100,
						range: {
							'min': 0,
							'max': 10100
						}
					});
					var number1_1 = document.getElementById('number-1-1');
					var number1_2 = document.getElementById('number-1-2');
					rangeSlider1.noUiSlider.on('update', function (values, handle) {
						var value = values[handle];
						if (handle) {
							number1_1.textContent = Math.round(value);
						} else {
							number1_2.textContent = Math.round(value);
						}
					});
					number1_1.addEventListener('change', function () {
						rangeSlider1.noUiSlider.set([this.textContent, null]);
					});
					number1_2.addEventListener('change', function () {
						rangeSlider1.noUiSlider.set([null, this.textContent]);
					});
				}

				// CAROUSELS

				// products carousel
				if (blocks.prdCarousel.length) {
					blocks.prdCarousel.slick({
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						dots: false,
						arrows: true,
						responsive: [{
							breakpoint: 1299,
							settings: {
								dots: true,
								arrows: false
							}
						}, {
							breakpoint: 991,
							settings: {
								slidesToShow: 3
							}
						}, {
							breakpoint: 767,
							settings: {
								slidesToShow: 2
							}
						}, {
							breakpoint: 480,
							settings: {
								slidesToShow: 1
							}
						}]
					});
				}

				// numbers carousel
				if (blocks.numbersCarousel.length) {
					blocks.numbersCarousel.slick({
						mobileFirst: false,
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: false,
						dots: true,
						arrows: false,
						responsive: [{
							breakpoint: 991,
							settings: {
								slidesToShow: 3
							}
						}, {
							breakpoint: 767,
							settings: {
								slidesToShow: 2
							}
						}, {
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								centerMode: true,
								centerPadding: '40px'
							}
						}]
					});
				}

				// coupons carousel
				if (blocks.couponsCarousel.length) {
					blocks.couponsCarousel.slick({
						mobileFirst: false,
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: false,
						dots: true,
						arrows: false,
						responsive: [{
							breakpoint: 991,
							settings: {
								slidesToShow: 1
							}
						}]
					});
				}

				// text_icon carousel
				if (blocks.textIconCarousel.length) {
					blocks.textIconCarousel.slick({
						mobileFirst: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						rows: 2,
						slidesPerRow: 3,
						infinite: true,
						dots: true,
						arrows: false,
						responsive: [{
							breakpoint: 991,
							settings: {
								slidesPerRow: 1
							}
						}]
					});
				}

				// testimonials carousel (home page)
				if (blocks.testimonialsCarousel.length) {
					blocks.testimonialsCarousel.slick({
						mobileFirst: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						autoplay: true,
						autoplaySpeed: 3000,
						arrows: false,
						dots: true,
						fade: false,
						cssEase: 'linear'
					});
				}
				// testimonials carousel 1 (testimonial page)
				if (blocks.testimonialsCarousel1.length) {
					blocks.testimonialsCarousel1.slick({
						mobileFirst: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						autoplay: true,
						autoplaySpeed: 3000,
						arrows: true,
						dots: false,
						fade: true,
						cssEase: 'linear',
						responsive: [{
							breakpoint: 1299,
							settings: {
								arrows: false,
								dots: true
							}
						}]
					});
				}
				// person carousel (team)
				if (blocks.personCarousel.length) {
					blocks.personCarousel.slick({
						mobileFirst: false,
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						arrows: false,
						dots: true,
						responsive: [{
							breakpoint: 1199,
							settings: {
								slidesToShow: 2
							}
						}, {
							breakpoint: 767,
							settings: {
								slidesToShow: 1
							}
						}]
					});
				}

				// category carousel
				if (blocks.categoryCarousel.length) {
					blocks.categoryCarousel.slick({
						mobileFirst: false,
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						arrows: false,
						dots: true,
						responsive: [{
							breakpoint: 991,
							settings: {
								slidesToShow: 3
							}
						}, {
							breakpoint: 767,
							settings: {
								slidesToShow: 2
							}
						}, {
							breakpoint: 480,
							settings: {
								slidesToShow: 1
							}
						}]
					});
				}

				// news carousel
				if (blocks.newsCarousel.length) {
					blocks.newsCarousel.slick({
						mobileFirst: false,
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						arrows: false,
						dots: true,
						adaptiveHeight: true,
						responsive: [{
							breakpoint: 991,
							settings: {
								slidesToShow: 3
							}
						}, {
							breakpoint: 767,
							settings: {
								slidesToShow: 2
							}
						}, {
							breakpoint: 480,
							settings: {
								slidesToShow: 1
							}
						}]
					});
				}
				// brand carousel
				if (blocks.brandCarousel.length) {
					blocks.brandCarousel.slick({
						mobileFirst: false,
						slidesToShow: 7,
						slidesToScroll: 1,
						infinite: true,
						autoplay: true,
						autoplaySpeed: 2000,
						arrows: false,
						dots: true,
						variableWidth: true,
						responsive: [{
							breakpoint: 1199,
							settings: {
								slidesToShow: 6
							}
						}, {
							breakpoint: 767,
							settings: {
								slidesToShow: 5
							}
						}]
					});
				}
				// prices carousel
				if (blocks.priceCarousel.length) {
					blocks.priceCarousel.slick({
						mobileFirst: false,
						slidesToShow: 4,
						slidesToScroll: 4,
						infinite: false,
						arrows: false,
						dots: true,
						responsive: [{
							breakpoint: 991,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3
							}
						}, {
							breakpoint: 767,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						}, {
							breakpoint: 500,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}]
					});
				}

				// post carousel
				if (blocks.postCarousel.length) {
					blocks.postCarousel.slick({
						mobileFirst: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						autoplay: false,
						arrows: true,
						dots: false
					});
				}

				// END CAROUSELS

				mobileMenu(windowWidth);
				toggleCart('.header-cart', '.header-cart-dropdown');
				printThis('.coupon-print', '.coupon');
				backToTop('.js-backToTop', templateOption.backToTop);
				if (templateOption.smoothScroll) {
					$('html').scrollWithEase();
				}
				isotopeGallery(blocks.isotopeGallery, blocks.slickGallery, windowWidth);
				changeInput();
				$(".testimonial-item.cutted").dotdotdot();
				if (windowWidth < 769) {
					slickMobile(blocks.servicesCarousel, 479, 1, 1);
				}
				if (blocks.stickyHeader.length && templateOption.stickyHeader) {
					$(blocks.stickyHeader).stickyHeader();
				}

				// lazy loading effect
				if (blocks.animation.length) {
					onScrollInit(blocks.animation, windowWidth);
				}
				// Resize window events
				$window.resize(function () {
					var windowWidth = window.innerWidth || $window.width();
					if (windowWidth < 769) {
						slickMobile(blocks.servicesCarousel, 479, 1, 1);
					}
				});

				$(window).resize(debouncer(function (e) {
					var windowWidth = window.innerWidth || $window.width();
					isotopeGallery(blocks.isotopeGallery, blocks.slickGallery, windowWidth);
				}));
			});

			$window.on('load', function () {

				var windowWidth = window.innerWidth || $window.width();

				$('body').addClass('is-loaded');

				if (blocks.googleMap.length) {
					createMap('googleMap', googleMapOption.zoom, googleMapOption.latitude, googleMapOption.longitude);
				}
			});

			/* ---------------------------------------------
   			Functions
   --------------------------------------------- */

			// icrease/decrease input
			function changeInput() {
				$(document).on('click', '.count-add, .count-reduce', function (e) {
					var $this = $(e.target),
					    input = $this.parent().find('.count-input'),
					    valString = input.val(),
					    valNum = valString.replace(/[^0-9]/g, ''),
					    valText = valString.replace(/[0-9]/g, ''),
					    v = $this.hasClass('count-reduce') ? valNum - 1 : valNum * 1 + 1,
					    min = input.attr('data-min') ? input.attr('data-min') : 0;
					if (v >= min) input.val(v + valText);
					e.preventDefault();
				});
			}

			// back to top
			function backToTop(button, flag) {
				if (flag) {
					var $button = $(button);
					$(window).on('scroll', function () {
						if ($(this).scrollTop() >= 500) {
							$button.addClass('visible');
						} else {
							$button.removeClass('visible');
						}
					});
					$button.on('click', function () {
						$('body,html').animate({
							scrollTop: 0
						}, 1000);
					});
				} else {
					$(button).hide();
				}
			}

			// sticky header
			$.fn.stickyHeader = function () {
				var $header = this,
				    $body = $('body'),
				    headerOffset,
				    stickyH;

				function setHeigth() {
					$(".fix-space").remove();
					$header.removeClass('animated is-sticky fadeIn');
					$body.removeClass('hdr-sticky');
					headerOffset = $('.page-header-menu', $header).offset().top;
					stickyH = $header.height() + headerOffset;
				}
				setHeigth();
				var prevWindow = window.innerWidth || $(window).width();
				$(window).bind('resize', function () {
					var currentWindow = window.innerWidth || $(window).width();
					if (currentWindow != prevWindow) {
						setHeigth();
						prevWindow = currentWindow;
					}
				});
				$(window).scroll(function () {
					if (prevWindow < 992) return;
					var st = getCurrentScroll();
					if (st > headerOffset) {
						if (!$(".fix-space").length && !$body.hasClass('home')) {
							$header.after('<div class="fix-space"></div>');
							$(".fix-space").css({
								'height': $header.height() + 'px'
							});
						}
						$header.addClass('is-sticky animated fadeIn');
						$body.addClass('hdr-sticky');
					} else {
						$(".fix-space").remove();
						$header.removeClass('animated is-sticky fadeIn');
						$body.removeClass('hdr-sticky');
					}
				});

				function getCurrentScroll() {
					return window.pageYOffset || document.documentElement.scrollTop;
				}
			};
			// gallery isotope
			function isotopeGallery(galleryIsotope, gallerySlick, windowWidth) {
				var $galleryIsotope = $(galleryIsotope),
				    $gallerySlick = $(gallerySlick);
				if (windowWidth > 767) {
					if ($galleryIsotope.length) {
						var isoOptions = {
							itemSelector: '.gallery-item',
							masonry: {
								columnWidth: '.gallery-item',
								gutter: 0
							}
						};
						$galleryIsotope.imagesLoaded(function () {
							$galleryIsotope.isotope(isoOptions);
						});
						isotopeFilters($galleryIsotope);
					}
				} else {
					if (!$gallerySlick.hasClass('slick-slider')) {
						$gallerySlick.append($galleryIsotope.children().clone().removeAttr('style'));
						$("#isotopeGalleryFilters").children().clone().appendTo("#slickGalleryFilters");
						$gallerySlick.slick({
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: true,
							dots: true,
							arrows: false,
							responsive: [{
								breakpoint: 320,
								settings: {
									slidesToShow: 1
								}
							}]
						});
						slickFilters("#slickGallery");
					}
				}
			}

			// Filters (for gallery)
			function isotopeFilters(gallery) {
				var $gallery = $(gallery);
				if ($gallery.length) {
					var container = $gallery;
					var optionSets = $(".filters-by-category .option-set"),
					    optionLinks = optionSets.find("a");
					optionLinks.on('click', function (e) {
						var thisLink = $(this);
						if (thisLink.hasClass("selected")) return false;
						var optionSet = thisLink.parents(".option-set");
						optionSet.find(".selected").removeClass("selected");
						thisLink.addClass("selected");
						var options = {},
						    key = optionSet.attr("data-option-key"),
						    value = thisLink.attr("data-option-value");
						value = value === "false" ? false : value;
						options[key] = value;
						if (key === "layoutMode" && typeof changeLayoutMode === "function") changeLayoutMode($this, options);else {
							container.isotope(options);
						}
						return false;
					});
				}
			}

			function slickFilters() {
				$('#slickGalleryFilters [data-option-value]').on('click', function (e) {
					var $this = $(this),
					    $carousel = $('#slickGallery'),
					    filtername = $this.attr('data-option-value'),
					    currentclass = $this.attr('class');
					$carousel.slick('slickUnfilter');
					$carousel.slick('slickFilter', filtername);
					$('#slickGalleryFilters').find(".selected").removeClass("selected");
					$this.addClass('selected');
					e.preventDefault();
				});
			}

			// print
			function printThis(link, target) {
				$(link).on('click', function () {
					$(this).closest(target).print();
				});
			}

			// Mobile Only carousel initialization
			function slickMobile(carousel, breakpoint, slidesToShow, slidesToScroll) {
				if (carousel.length) {
					var windowWidth = window.innerWidth || $window.width();
					if (windowWidth < breakpoint + 1) {
						carousel.slick({
							mobileFirst: true,
							slidesToShow: slidesToShow,
							slidesToScroll: slidesToScroll,
							infinite: true,
							autoplay: false,
							arrows: false,
							dots: true,
							responsive: [{
								breakpoint: breakpoint,
								settings: "unslick"
							}]
						});
					}
				}
			}

			// Slider Animation
			function doAnimations(elements) {
				var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				elements.each(function () {
					var $this = $(this);
					var $animationDelay = $this.data('delay');
					var $animationType = 'animated ' + $this.data('animation');
					$this.css({
						'animation-delay': $animationDelay,
						'-webkit-animation-delay': $animationDelay
					});
					$this.addClass($animationType).one(animationEndEvents, function () {
						$this.removeClass($animationType);
					});
					if ($this.hasClass('animate')) {
						$this.removeClass('animation');
					}
				});
			}

			// Time Out Resize
			function debouncer(func, timeout) {
				var timeoutID,
				    timeout = timeout || 500;
				return function () {
					var scope = this,
					    args = arguments;
					clearTimeout(timeoutID);
					timeoutID = setTimeout(function () {
						func.apply(scope, Array.prototype.slice.call(args));
					}, timeout);
				};
			}

			// Count To
			function count(options) {
				var $this = $(this);
				options = $.extend({}, options || {}, $this.data('countToOptions') || {});
				$this.countTo(options);
			}

			// Menu max height
			function mHeight() {
				return $(window).height() - $('.page-header').height();
			}

			// Navigation dropdown menu
			function mobileMenu(windowWidth) {

				var $menu = $('.page-header .menu'),
				    $menuWrap = $('.page-header-menu'),
				    $menuToggle = $('.menu-toggle'),
				    $menuSub = $('.page-header .menu'),
				    $menuArrow = $('.page-header .menu .arrow');

				$menuToggle.on('click', function (e) {
					e.preventDefault();
					var $this = $(this);
					if (!$menu.hasClass('opened')) {
						$menu.slideDown().addClass('opened');
						$this.addClass('opened');
						$('body').addClass('fixed');
						$menuWrap.css({
							'height': mHeight() + 'px'
						});
					} else {
						$menu.slideUp().removeClass('opened');
						$this.removeClass('opened');
						$('body').removeClass('fixed');
						$menuWrap.css({
							'height': ''
						});
					}
				});

				$menuArrow.on('click', function (e) {
					e.preventDefault();
					var $this = $(this).parent('a');
					$this.next('ul').slideToggle();
					$this.toggleClass('opened');
				});

				//	$(window).resize(function(){
				//		var w = $(window).width();
				//		if(w > 767 && menu.is(':hidden')) {
				//			menu.removeAttr('style');
				//		}
				//	});
			}

			// Header Cart dropdown menu
			function toggleCart(cart, drop) {
				$('> a', $(cart)).on('click', function () {
					$(cart).toggleClass('opened');
				});
				$(document).on('click', function (e) {
					if (!$(e.target).closest(cart).length) {
						if ($(cart).hasClass("opened")) {
							$(cart).removeClass('opened');
						}
					}
				});
			}

			// Lazy Load animation
			function onScrollInit(items, wW) {
				if (wW > 991) {
					if (!$('body').data('firstInit')) {
						items.each(function () {
							var $element = $(this),
							    animationClass = $element.attr('data-animation'),
							    animationDelay = $element.attr('data-animation-delay');
							$element.removeClass('no-animate');
							$element.css({
								'-webkit-animation-delay': animationDelay,
								'-moz-animation-delay': animationDelay,
								'animation-delay': animationDelay
							});
							var trigger = $element;
							trigger.waypoint(function () {
								$element.addClass('animated').addClass(animationClass);
								if ($element.hasClass('hoveranimation')) {
									$element.on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function () {
										$(this).removeClass("animated").removeClass("animation").removeClass(animationClass);
									});
								}
							}, {
								triggerOnce: true,
								offset: '90%'
							});
						});
						$('body').data('firstInit', true);
					}
				} else {
					items.each(function () {
						var $element = $(this);
						$element.addClass('no-animate');
					});
				}
			}

			// Get Scrollbar Width
			function getScrollbarWidth() {
				var outer = document.createElement("div");
				outer.style.visibility = "hidden";
				outer.style.width = "100px";
				outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

				document.body.appendChild(outer);

				var widthNoScroll = outer.offsetWidth;
				// force scrollbars
				outer.style.overflow = "scroll";

				// add innerdiv
				var inner = document.createElement("div");
				inner.style.width = "100%";
				outer.appendChild(inner);

				var widthWithScroll = inner.offsetWidth;

				// remove divs
				outer.parentNode.removeChild(outer);

				return widthNoScroll - widthWithScroll;
			}

			// Google Map
			function createMap(id, mapZoom, lat, lng) {
				// Create google map
				// Basic options for a simple Google Map
				// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
				var mapOptions = {
					// How zoomed in you want the map to start at (always required)
					zoom: mapZoom,
					scrollwheel: false, // The latitude and longitude to center the map (always required)
					center: new google.maps.LatLng(lat, lng),
					// How you would like to style the map. 
					// This is where you would paste any style found on Snazzy Maps.
					styles: [{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [{
							"color": "#e9e9e9"
						}, {
							"lightness": 17
						}]
					}, {
						"featureType": "landscape",
						"elementType": "geometry",
						"stylers": [{
							"color": "#f5f5f5"
						}, {
							"lightness": 20
						}]
					}, {
						"featureType": "road.highway",
						"elementType": "geometry.fill",
						"stylers": [{
							"color": "#ffffff"
						}, {
							"lightness": 17
						}]
					}, {
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [{
							"color": "#ffffff"
						}, {
							"lightness": 29
						}, {
							"weight": 0.2
						}]
					}, {
						"featureType": "road.arterial",
						"elementType": "geometry",
						"stylers": [{
							"color": "#ffffff"
						}, {
							"lightness": 18
						}]
					}, {
						"featureType": "road.local",
						"elementType": "geometry",
						"stylers": [{
							"color": "#ffffff"
						}, {
							"lightness": 16
						}]
					}, {
						"featureType": "poi",
						"elementType": "geometry",
						"stylers": [{
							"color": "#f5f5f5"
						}, {
							"lightness": 21
						}]
					}, {
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [{
							"color": "#dedede"
						}, {
							"lightness": 21
						}]
					}, {
						"elementType": "labels.text.stroke",
						"stylers": [{
							"visibility": "on"
						}, {
							"color": "#ffffff"
						}, {
							"lightness": 16
						}]
					}, {
						"elementType": "labels.text.fill",
						"stylers": [{
							"saturation": 36
						}, {
							"color": "#333333"
						}, {
							"lightness": 40
						}]
					}, {
						"elementType": "labels.icon",
						"stylers": [{
							"visibility": "off"
						}]
					}, {
						"featureType": "transit",
						"elementType": "geometry",
						"stylers": [{
							"color": "#f2f2f2"
						}, {
							"lightness": 19
						}]
					}, {
						"featureType": "administrative",
						"elementType": "geometry.fill",
						"stylers": [{
							"color": "#fefefe"
						}, {
							"lightness": 20
						}]
					}, {
						"featureType": "administrative",
						"elementType": "geometry.stroke",
						"stylers": [{
							"color": "#fefefe"
						}, {
							"lightness": 17
						}, {
							"weight": 1.2
						}]
					}]
				};
				// Get the HTML DOM element that will contain your map 
				// We are using a div with id="map" seen below in the <body>
				var mapElement = document.getElementById(id);
				// Create the Google Map using our element and options defined above
				var map = new google.maps.Map(mapElement, mapOptions);
				var image = 'images/map-marker.png';
				// Let's also add a marker while we're at it
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(lat, lng),
					map: map,
					icon: image
				});
			}
			// END FUNCTIONS
		})(jQuery);
		(function ($) {

			"use strict";

			var $document = $(document),
			    $window = $(window),
			    forms = {
				contactForm: $('#contactForm'),
				orderForm: $('#orderForm'),
				questionForm: $('#questionForm')
			};

			$document.ready(function () {

				// order form
				if (forms.orderForm.length) {
					var $orderForm = forms.orderForm;
					$orderForm.validate({
						rules: {
							name: {
								required: true,
								minlength: 2
							},
							message: {
								required: true,
								minlength: 20
							},
							email: {
								required: true,
								email: true
							}

						},
						messages: {
							name: {
								required: "Please enter your name",
								minlength: "Your name must consist of at least 2 characters"
							},
							message: {
								required: "Please enter message",
								minlength: "Your message must consist of at least 20 characters"
							},
							email: {
								required: "Please enter your email"
							}
						},
						submitHandler: function submitHandler(form) {
							$(form).ajaxSubmit({
								type: "POST",
								data: $(form).serialize(),
								url: "form/process-order.php",
								success: function success() {
									$('.successform', $orderForm).fadeIn();
									$orderForm.get(0).reset();
								},
								error: function error() {
									$('.errorform', $orderForm).fadeIn();
								}
							});
						}
					});
				}

				// contact page form
				if (forms.contactForm.length) {
					var $contactform = forms.contactForm;
					$contactform.validate({
						rules: {
							name: {
								required: true,
								minlength: 2
							},
							message: {
								required: true,
								minlength: 20
							},
							email: {
								required: true,
								email: true
							}

						},
						messages: {
							name: {
								required: "Please enter your name",
								minlength: "Your name must consist of at least 2 characters"
							},
							message: {
								required: "Please enter message",
								minlength: "Your message must consist of at least 20 characters"
							},
							email: {
								required: "Please enter your email"
							}
						},
						submitHandler: function submitHandler(form) {
							$(form).ajaxSubmit({
								type: "POST",
								data: $(form).serialize(),
								url: "form/process-contact.php",
								success: function success() {
									$('.successform', $contactform).fadeIn();
									$orderForm.get(0).reset();
								},
								error: function error() {
									$('.errorform', $contactform).fadeIn();
								}
							});
						}
					});
				}

				// question page form
				if (forms.questionForm.length) {
					var $questionForm = forms.questionForm;
					$questionForm.validate({
						rules: {
							name: {
								required: true,
								minlength: 2
							},
							message: {
								required: true,
								minlength: 20
							},
							email: {
								required: true,
								email: true
							}

						},
						messages: {
							name: {
								required: "Please enter your name",
								minlength: "Your name must consist of at least 2 characters"
							},
							message: {
								required: "Please enter message",
								minlength: "Your message must consist of at least 20 characters"
							},
							email: {
								required: "Please enter your email"
							}
						},
						submitHandler: function submitHandler(form) {
							$(form).ajaxSubmit({
								type: "POST",
								data: $(form).serialize(),
								url: "form/process-question.php",
								success: function success() {
									$('.successform', $questionForm).fadeIn();
									$questionForm.get(0).reset();
								},
								error: function error() {
									$('.errorform', $questionForm).fadeIn();
								}
							});
						}
					});
				}
				// datepicker
				if ($('.datetimepicker').length) {
					$('.datetimepicker').datetimepicker({
						format: 'DD/MM/YYYY',
						icons: {
							time: 'icon icon-clock',
							date: 'icon icon-calendar',
							up: 'icon icon-arrow_up',
							down: 'icon icon-arrow_down',
							previous: 'icon icon-arrow-left',
							next: 'icon icon-arrow-right',
							today: 'icon icon-today',
							clear: 'icon icon-trash',
							close: 'icon icon-cancel-music'
						}
					});
				}
				if ($('.timepicker').length) {
					$('.timepicker').datetimepicker({
						format: 'LT',
						icons: {
							time: 'icon icon-clock',
							up: 'icon icon-arrow_up',
							down: 'icon icon-arrow_down',
							previous: 'icon icon-arrow-left',
							next: 'icon icon-arrow-right'
						}
					});
				}
			});
		})(jQuery);
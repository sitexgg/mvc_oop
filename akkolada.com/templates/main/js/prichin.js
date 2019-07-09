jQuery(document).ready(function(){
	jQuery(".top_2 .prichin_title").click(function(){
		jQuery(this).next(".prichin_text").slideToggle("fast");
		jQuery(this).toggleClass("active");
	});
});
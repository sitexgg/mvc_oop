
 (function($){
 "use strict";
 var tpj=jQuery;
 var revapi5;
 tpj(document).ready(function() {
 if(tpj("#rev_slider_5_1").revolution == undefined){
 revslider_showDoubleJqueryError("#rev_slider_5_1");
 }else{
 revapi5 = tpj("#rev_slider_5_1").show().revolution({
 sliderType:"standard",
 sliderLayout:"fullwidth",
 dottedOverlay:"none",
 delay:9000,
 navigation: {
 keyboardNavigation:"off",
 keyboard_direction: "horizontal",
 mouseScrollNavigation:"off",
 mouseScrollReverse:"default",
 onHoverStop:"off",
 arrows: {
 style:"hesperiden",
 enable:true,
 hide_onmobile:false,
 hide_onleave:false,
 tmp:'',
 left: {
 h_align:"left",
 v_align:"center",
 h_offset:20,
 v_offset:0
 },
 right: {
 h_align:"right",
 v_align:"center",
 h_offset:20,
 v_offset:0
 }
 }
 },
 visibilityLevels:[1240,1024,778,480],
 gridwidth:1170,
 gridheight:752,
 lazyType:"none",
 parallax: {
 type:"mouse",
 origo:"enterpoint",
 speed:400,
 levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
 type:"mouse",
 },
 shadow:0,
 spinner:"spinner3",
 stopLoop:"off",
 stopAfterLoops:-1,
 stopAtSlide:-1,
 shuffle:"off",
 autoHeight:"off",
 disableProgressBar:"on",
 hideThumbsOnMobile:"off",
 hideSliderAtLimit:0,
 hideCaptionAtLimit:0,
 hideAllCaptionAtLilmit:0,
 debugMode:false,
 fallbacks: {
 simplifyAll:"off",
 nextSlideOnWindowFocus:"off",
 disableFocusListener:false,
 }
 });
 }
 }); 
 })(jQuery);




 $(document).on('open', '.remodal', function () {
 console.log('open');
 });
 $(document).on('opened', '.remodal', function () {
 console.log('opened');
 });
 $(document).on('close', '.remodal', function () {
 console.log('close');
 });
 $(document).on('closed', '.remodal', function () {
 console.log('closed');
 });
 $(document).on('confirm', '.remodal', function () {
 console.log('confirm');
 });
 $(document).on('cancel', '.remodal', function () {
 console.log('cancel');
 });
 // var inst = $.remodal.lookup[$('[data-remodal-id=modal]').data('remodal')];
 // inst.open();
 // inst.close();
 // Or init in this way:
 var inst = $('[data-remodal-id=modal2]').remodal();
 // inst.open();




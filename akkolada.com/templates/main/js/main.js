/*! device.js 0.2.7 */
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);

(function($) {
    $(function() {
        $('#mod_87 .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            customPaging : function(slider, i) {
                return '<span></span>';
            }
        });

        $('#mod_159 .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            customPaging : function(slider, i) {
                return '<span></span>';
            }
        });
        $('#mod_161 .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            customPaging : function(slider, i) {
                return '<span></span>';
            }
        });
        $('#mod_165 .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            customPaging : function(slider, i) {
                return '<span></span>';
            }
        });
        $('#mod_166 .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            customPaging : function(slider, i) {
                return '<span></span>';
            }
        });


        $('.doverie .slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1040,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.alfabet>ul>li>a').click(function(){
            return false;
        });
        $('.topslider .btn').click(function(){
            $('.topslider .slick-next').click();
            return false;
        });

        $('.navbar-toggle').click(function(el) {
            if($('.navbar-collapse.collapse').hasClass('in')){
                $('.navbar-collapse.in').hide();
                $('.navbar-collapse.in').removeClass('in');
                el.stopPropagation();
            } else {
                $('.navbar-collapse').addClass('in');
                $('.navbar-collapse.in').css({'height':'890px'});
                $('.navbar-collapse').show();
                el.stopPropagation();
            }
        });

        if($.browser.safari&&!$.browser.mozilla&&!$.browser.msie&&!$.browser.opera){
            $('.breadcrumb .divider').addClass('divider_safari');
        }   

    });

    

})(jQuery);

jQuery(window).on('load', function(){
    if (jQuery(this).width() < 1025) {
        jQuery(".topmenu li.deeper>a").data('counter', 0).click(function(event) {
            var counter = jQuery(this).data('counter');
            jQuery(this).data('counter', counter + 1);
    
            if (jQuery(this).data('counter') == 1) {
                event.preventDefault();
            }
        });
    }
    if (device.iphone() == true){
        jQuery("body").addClass('iphone_device');
        console.log(device.windows());
    }
});



    jQuery("body").bind("DOMSubtreeModified", function() {
        var el = document.getElementsByClassName('pac-container pac-logo');
        jQuery.each(el , function() {
            jQuery(this).hover(function() {
                jQuery(".pac-item").on('hover', function() {
                    jQuery(".pac-item.pac-item-selected").removeClass("pac-item-selected");
                    jQuery(this).addClass("pac-item-selected");
                    jQuery(this).click();
                });
            });
        });
    });



/*function FormsScript() {
    var html = "";
    html += "<script>";
    html += "window.dataLayer = window.dataLayer || [];";
    html += "window.dataLayer.push({";
    html += "'event' : 'formSubmissionSuccess',";
    html += "'formId' : '" + formName + "'";
    html += "});";
    html += "</script>";

    jQuery( "header" ).after( html );
}*/

var formName = '';
jQuery(document).ready(function () {

    /*if(jQuery('.top .form_feedback #popup').length > 0){
        formName = 'transportOrderTop';
        GA1();
    }
    if(jQuery('.form_feedback.btm #popup').length > 0){
        formName = 'transportOrderBottom';
        GA1();
    }
    if(jQuery('.obrsv .rsform input[name*="continue"]').length > 0){
        formName = 'contactsFeedback';
        GA1();
    }

    if(jQuery('.container-calc a.modal-link').length >0 && jQuery('#lity_box_count').length >0){
        jQuery('#lity_box_count .get-result').click(function () {
            var a = jQuery.trim(jQuery('#lity_box_count .departures input').val());
            var b = jQuery.trim(jQuery('#lity_box_count .destination input').val());
            if(a !== '' && b !== ''){
                formName = 'fatCalcButton';
                GA1();
            }
        });
    }*/

    if (jQuery('#lity_box_count input#departures').length>0){
        var NextFrameFunc =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback)
            {
                window.setTimeout(callback, 1000 / 60);
            };

        ClearInputs();

        function ClearInputs() {
            if(jQuery('#lity_box_count').hasClass('lity-hide')){
                jQuery('#lity_box_count input#departures').val('');
                jQuery('#lity_box_count input#destination').val('');
                jQuery('#lity_box_count .moduletable').css('display', 'none');
                jQuery('.row-calc.error').remove();
                jQuery('.row-calc.waybill').css('display', 'block');
                jQuery('.row-calc.duration').css('display', 'block');
                jQuery('.row-calc.insurance').css('display', 'block');
                jQuery('.row-calc.total-cost').css('display', 'block');
                jQuery('.row-calc.waybill .city-names').text('');
                jQuery('.row-calc.waybill .result').text('');
                jQuery('.row-calc.duration .result').text('');
                jQuery('.row-calc.total-cost .result').text('');
            }
            NextFrameFunc(ClearInputs);
        }
    }


    jQuery('#call_back_form input[type="submit"]').click(function () {
        var a = jQuery('#call_back_form input#name').val();
        var b = jQuery('#call_back_form input#phone').val();
        if (a != '' && b != ''){
            localStorage.callmsg = 'yes';
        }
    });

    if (localStorage.callmsg == 'yes'){
        jQuery('.call_back_form_msg_btn').click();
        localStorage.callmsg = 'no';
    }

    jQuery('.avto_order_modal_btn').click(function () {
        var element = jQuery(this).parent().parent().parent().parent();

        var title = element.find('.td_copy_name').text();
        var img = element.find('.avto_order_modal_btn img').parent().html();
        var quant = element.find('.td_copy_quant').html();
        var height = element.find('.td_copy_height').html();
        var width = element.find('.td_copy_width').html();
        var vol = element.find('.td_copy_vol').html();
        var length = element.find('.td_copy_length').html();

        jQuery('#avto_header_form').text(title);
        jQuery('.avto_order_form #data_form').val(title);
        jQuery('.td_past_img').html(img);
        jQuery('.td_past_quant').html(quant);
        jQuery('.td_height').html(height);
        jQuery('.td_width').html(width);
        jQuery('.td_vol').html(vol);
        jQuery('.td_length').html(length);

        jQuery('.avto_order_modal_click').click();
    });

    jQuery('.avto_order_form input#submit').click(function () {
        var a = jQuery('.avto_order_form input#user_name').val();
        var b = jQuery('.avto_order_form input#user_phone').val();
        if (a != '' && b != ''){
            localStorage.avtomsg = 'yes';
        }
    });

    if (localStorage.avtomsg == 'yes'){
        jQuery('.avto_order_form_msg_btn').click();
        localStorage.avtomsg = 'no';
    }

    jQuery('#feed_back_form input#send').click(function () {
        var a = jQuery('#feed_back_form input#name').val();
        var b = jQuery('#feed_back_form input#phone').val();
        if (a != '' && b != ''){
            localStorage.feedmsg = 'yes';
            console.log(localStorage.feedmsg)
        }
    });

    if (localStorage.feedmsg == 'yes'){
        jQuery('.call_back_form_msg_btn').click();
        localStorage.feedmsg = 'no';
    }


    jQuery('#avto_order_modal').on('click', '.ord_sumbit', function () {
        jQuery('#avto_order_modal input#user_name').removeClass('rsform-error');
        jQuery('#avto_order_modal input#user_phone').removeClass('rsform-error');
        var name = jQuery.trim(jQuery('#avto_order_modal input#user_name').val());
        var phone = jQuery.trim(jQuery('#avto_order_modal input#user_phone').val());
        if (name == '' || phone == ''){
            if(name == ''){
                jQuery('#avto_order_modal input#user_name').addClass('rsform-error');
            }
            if(phone == ''){
                jQuery('#avto_order_modal input#user_phone').addClass('rsform-error');
            }
        }else{
            jQuery('#avto_order_modal .btn.rsform-submit-button').click();
        }

    })

});


/*function GA1(){
    ga('send', 'event', formName);
    yaCounter27443871.reachGoal(formName);
}*/
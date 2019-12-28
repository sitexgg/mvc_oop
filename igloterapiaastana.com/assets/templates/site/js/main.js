$(function(){  
    
    $('.main-slider').ready(function(){
        $('.main-slider').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
                  centerMode: false,
                  arrows: true,
                  vertical: false,
                  focusOnSelect: false,
                  infinite: true,
                  draggable: true,
                  autoplay: true,
                  autoplaySpeed: 4000,
                  fade: false
                });  
            });  
    
    $('.sert-slider').ready(function(){
        $('.sert-slider').slick({
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  dots: true,
                  centerMode: false,
                  arrows: true,
                  vertical: false,
                  focusOnSelect: false,
                  infinite: true,
                  draggable: true,
                  autoplay: true,
                  autoplaySpeed: 4000,
                  fade: false,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: true
                      }
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 640,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
                });
        });  
    
   

        $("#nav-icon").click(function (event) {
            if( $('#main-list').hasClass('open') ) {
                $('#main-list').removeClass("open");
                $(this).removeClass('open');
                event.preventDefault();
            } else {
                $('#main-list').addClass("open");
                $(this).addClass('open');
                event.preventDefault();
            }
        });
    
     $(function() {
        if ($('.sert-slider').length ) {
                $('[data-fancybox="gallery"]').fancybox({
                  infobar : false,
                'showNavArrows' :   true
                });
              } else { };
    });  
});

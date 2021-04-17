 jQuery(document).ready(function(){

  // Jquery Effect Water
  // jquery.ripples-min.js
  "use strict"
    $('.slider').ripples({
      dropRadius: 11,
      perturbance: 0.01,  
    });
  
    // Jquery Effect Text
    // typed.min.js
    $(".text").typed({
        strings:["<strong>makmur</strong><strong class='primary'> masjidnya.</strong>","<strong>bahagia</strong><strong class='primary'> jama'ahnya.</strong>"],
        typespeed:0,
        loop:true
    });

    // Merubah Warna Header Saat di Scroll Kebawah
    $(window).scroll(function(){
        
      var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary'); 
        }
        
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary'); 
            }
    });

    // Jquery Popup Image 
    // jquery.magnific-popup.js
      $('.dokumentasi').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
      enabled: true
      } 
    });

    // Jquery Pages Pengurus 
    // owl.carousel.min.js 
      $("#team-members").owlCarousel({
          items:2,
          autoplay:true,
          smartSpeed:700,
          loop:true,
          autoplayHoverPause:true,
            responsive:{
              0:{
          
                items:1
              }, 
              480:{
                items:2
              }                      
              // 768:{
              //   items:3
              // } 
            }
      });

    // Jquery Pages Pengurus 
    // owl.carousel.min.js 
      $("#kegiatan").owlCarousel({
        items:2,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
          responsive:{
            0:{
        
              items:1
            }, 
            480:{
              items:2
            }                      
            // 768:{
            //   items:3
            // } 
          }
    });

    // Effect Angka Otomatis
    // jquery.counterup.min.js
    // jquery.waypoints.min.js
    // $('.counter').counterUp({
    //             delay: 10,
    //             time: 4000
    //         });
    
      $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });
     new WOW().init();
     
 });
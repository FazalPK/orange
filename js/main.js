(function($) {
  "use strict"; // Start of use strict

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#show-top").addClass( "show-top" );
    }
    else {
      $("#show-top").removeClass( "show-top" );    
    }
  });

  var current_width = $(window).width();

  
    $(".dropdown-toggle").removeAttr('data-toggle');
  


  // menu sticky
  $(window).on("scroll", function () {
    if(current_width > 1100){
      if ($(this).scrollTop() > 100) {
        $("header").addClass( "sticky" );
      }
      else {
        $("header").removeClass( "sticky" );     
      }
    }
    else{
      if ($(this).scrollTop() > 100) {
        $("header").addClass( "sticky-mobile" );
      }
      else {
        $("header").removeClass( "sticky-mobile" );     
      }
    }
  });


  $("#cat-items li").hover(function() {
    $("#cat-items li").css({width : "24%", transition : "0.3s ease"});
    $(this).css({width : "28%", transition : "0.3s ease"});
  },
  function(){
    $("#cat-items li").css({width : "25%", transition : "0.3s ease"});
  });

  
  if(current_width > 1100){
    $('ul.nav li.dropdown').hover(function() {
        $(this).addClass("open");
      }, function() {
        $(this).removeClass("open");
    });
  }
  else{
    $('ul.nav li.dropdown').click(function() {
        $(this).addClass("open");
      }, function() {
        $(this).removeClass("open");
    });

    // $('.dropdown-submenu').click(function() {
    //   var hrf = $(this).find('a').attr('href');
    //   window.location.href = hrf;
    // });

  }

  $(".list-toggle").click(function(event) {
    event.preventDefault();
    $(this).next("ul.inner").slideToggle();
    
  });


    // dropdown responsive
    if(current_width < 1100){
      $(".dropdown .icon").click(function(event) {
        event.preventDefault();
        $(this).toggleClass('open');
  
        $(this).next().toggle();
        
      });
    }

  

  // $('.count').each(function () {
  //   $(this).prop('Counter',0).animate({
  //     Counter: $(this).text().replace(/,/g, '')
  //   }, {
  //       duration: 5000,
  //       easing: 'swing',
  //       step: function (now) {
  //           $(this).text(Math.ceil(now).toLocaleString());
  //       }
  //     })
  // });

  
    
  $("#home-slider").owlCarousel({
    dots: true,
    responsiveClass:true,
    loop: true,
    autoplay: true,
    smartSpeed: 300, 
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  $('#clients-images').owlCarousel({

    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    smartSpeed:700,
    
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  });

    
  $('#testimonials').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    smartSpeed:700,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  
  $('#home-partners').owlCarousel({

    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    smartSpeed:700,
    
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 6
      }
    }
  });


  $("#towing-slider").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    smartSpeed:700,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  
  $("#specialized-services-slider").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    smartSpeed:700,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });


  

    // Via JavaScript footer image upload

    $(".filestyle").filestyle({placeholder: "Upload Resume"});

  
    




})(jQuery); // End of use strict

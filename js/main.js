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

  


  

  $('.count').each(function () {
    $(this).prop('Counter',0).delay(3000).animate({
      Counter: $(this).text().replace(/,/g, '')
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now).toLocaleString());
        }
    });
  });

    
  $("#home-technology").owlCarousel({
    dots: false,
    responsiveClass:true,
    loop: true,
    autoplay: true,
    smartSpeed: 300, 
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    nav: true,
    responsive:{
        0:{
            items:2.5
        },
        600:{
            items:3.5
        },
        1000:{
            items:3.5
        },
        1000:{
            items:4.5
        }
    }
  });
    
  $("#home-testimonials").owlCarousel({
    dots: false,
    responsiveClass:true,
    loop: false,
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
            items:3
        }
    }
  });
    


})(jQuery); // End of use strict

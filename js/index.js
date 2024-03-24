$(document).ready(function(){
	$("html").niceScroll(); 
  $(".bxslider").bxSlider({
		auto:true,
		pager:true,
		controls:false,
		speed:2000,
		pause:6000
	
	});
  $(".fa-chevron-down").click(function(){
		$("html,body").animate({
			scrollTop:$(".about").offset().top
		},1000);
	});

  $(window).scroll(function(){
    if($(window).scrollTop() >= 1000){
        $(".scroll").fadeIn(400);
    }else{
        $(".scroll").fadeOut(400);
    }
    });  
    $(".scroll").click(function(e){
     e.preventDefault();
     $("html,body").animate({
       scrollTop:0
     },1000);
    });
    
   
    $(".icon1").click(function(){
        $(this).hide();
        $("nav ul").css("right","0");
        $(".icon2").show();
        $("nav ul").click(function(){
            $(this).css("right","100%");    
        });
    });
    $(".icon2").click(function(){
        $("nav ul").css("right","100%");
        $(this).hide();
        $(".icon1").show();  
    });

    $(".button1").click(function(){
      $(".hidden").show();
      $(".about img").css({
        height:'1000px'
       });
      $(this).hide(400);
      $(".button2").show(200);
    });
    
    $(".button2").click(function(){
        $(".hidden").hide();
        $(".about img").css({
         height:'auto',
        });
        $(this).hide();
      $(".button1").show();
    });
    $("nav ul li a").click(function(e){
        e.preventDefault();
        $("html,body").animate({
        scrollTop:$('#' + $(this).data('scroll')).offset().top
        },1000);
     
        });

        $(".button").click(function(){
          $(this).addClass("active").siblings().removeClass("active");
          var filter = $(this).attr('data-filter');
        if(filter == 'all'){
          $('.image').show(400);
        }else{
          $('.image').not('.'+filter).hide(200);
          $('.image').filter('.'+filter).show(400);
        
        
        }
        
        
        });

         	 
	 var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        
        },
        pagination: {
          el: '.swiper-pagination',
        
        },

      });
   

});
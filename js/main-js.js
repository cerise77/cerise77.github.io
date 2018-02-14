
$(document).ready(function () {


  /*$('.contein-p').css('background', '#fff');*/

  /*$(window).scroll(function () {

      if ($(this).scrollTop() >= 100) {
        //$(".font-sp").attr("fill","#fff");
        $('.contein-p').css('background', '#222328');
        $(".menu-st").fadeOut("100");
        //console.log('xvdfgfd');
      } else {
        $('.contein-p').css('background', 'none');
        $(".menu-st").fadeIn("100");
      }

  });*/
  $('.ms1').on('mouseover', function () {
    $('.mp2').css({'display':'block',});
    //$('.ms1').css({'background':'#eeeeee', 'border-radius':'5px', 'padding':'5px'});
    $('.ms1').css({'opacity':'1'});
  });
  $('.mp2').on('mouseover', function () {
    $('.mp2').css({'display':'block',});
    //$('.ms1').css({'background':'#eeeeee', 'border-radius':'5px', 'padding':'5px'});
    $('.ms1').css({'opacity':'1'});
  });

  $('.ms1').on('mouseout', function () {
    $('.mp2').css({'display':'none',});
    //$('.ms1').css({'background':'none', 'border-radius':'0'});
    $('.ms1').css({'opacity':'0.5'});
  });
  $('.mp2').on('mouseout', function () {
    $('.mp2').css({'display':'none',});
    //$('.ms1').css({'background':'none', 'border-radius':'0'});
    $('.ms1').css({'opacity':'0.5'});
  });


  $('#contact').on('click', function () {
    $('#main-right').toggleClass('speed-in');
    $(".logos").fadeOut("100");

    $('.load-text').addClass('animated bounceInRight');
    //console.log('dvdfgdfg');
  });

  $('#button-close1').on('click', function () {
    $('#main-right').removeClass('speed-in');
    $(".logos").fadeIn("100");

  });


  $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})


  $('#but-more').on('click', function () {
    $('.check').toggleClass('speed-in');
    //console.log("dxmdklgnlnfkl");

  });

  $('#close-check').on('click', function () {
      $('.check').removeClass('speed-in');
  });

  /*if (window.innerWidth >= '1115') {
      $(".main-right").css("display", "none");
  }*/



  /*$('.logos').click(function () {
      $(".logos").css("background-color", "#fff");
      console.log('dvdfgf');
  });*/

  /*$('.Top').click(function () {
      $('html,body').stop().animate({ scrollTop: 0 });
  });*/

});

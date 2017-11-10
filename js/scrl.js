/*var menu_navigation = document.getElementById('sec-left');
var h_menu = document.getElementById('button');
var shadow_layer = document.getElementById('shadow-layer');*/

/*shadow_layer.onclick = function() {
  cart.classList.remove('speed-in');
  menu_navigation.classList.remove('speed-in');
  shadow_layer.classList.remove('is-visible');
  document.body.classList.remove('overflow-hidden');
}*/

/*h_menu.onclick = function() {
    toggle_panel_visibility(menu_navigation, shadow_layer, document.body);
    console.log('Captains Log');
}


function toggle_panel_visibility(panel, background_layer, body) {
    if (panel.classList.hasClass('speed-in')) {
        panel.classList.remove('speed-in');
        background_layer.classList.remove('is-visible');
        body.classList.remove('overflow-hidden');
    } else {
        panel.classList.addClass('speed-in');
        background_layer.classList.addClass('is-visible');
        body.classList.addClass('overflow-hidden');
    }
}*/



var currentNumber = $('.number').text();

$({numberValue: currentNumber}).animate({numberValue: 560.891}, {
    duration: 8000,
    easing: 'linear',
    step: function() {
        $('.number').text(Math.ceil(this.numberValue));
    }
});


/*$('#vid').on('click', function () {
  $('#video').toggleClass('speed-in');
});

$('#close-v').on('click', function () {
    $('#video').removeClass('speed-in');
});*/

document.getElementById('vid').onclick = function() {
  document.getElementById("video").classList.toggle('speed-in');

  document.getElementById('header-top').style.display = 'none';
}

function toggleVideo(state) {
  document.getElementById('header-top').style.display = 'block';

  document.getElementById("video").classList.remove('speed-in');
  // if state == 'hide', hide. Else: show video
  var div = document.getElementById("video");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  //div.style.display = state == 'stop' ? 'none' : '';
  func = state == 'stop' ? 'pauseVideo' : 'playVideo';
  iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}



var myCarousel1 = document.getElementById('manege');

if (myCarousel1 && myCarousel1.hasChildNodes()) {
    var imagesWrapper1 = document.getElementById('urapper');
    var prevArrow1 = document.getElementById('uprev');
    var nextArrow1 = document.getElementById('unext');
    var childNodes1 = myCarousel1.childNodes;
    var imagesArray1 = [];

    for (var i = 0; i < childNodes1.length; i++) {
        var currentNode1 = childNodes1[i];
        if (currentNode1.nodeName === 'IMG') {
            imagesArray1.push(currentNode1.src);
            currentNode1.classList.add('hide');
        }
    }

imagesWrapper1.style.backgroundImage = 'url(' + imagesArray1[0] + ')';
var currentImage1 = 0;
var numberOfImages1 = imagesArray1.length;

prevArrow1.onclick = function () {
    handleSlideshowArrow('uprev');
    slideco( -1 );
};

nextArrow1.onclick = function () {
    handleSlideshowArrow('unext');
    slideco( 1 );
};

function handleSlideshowArrow(val1) {
    if (val1 === 'uprev') {
        if (currentImage1 > 0) {
            currentImage1--;
        } else {
            currentImage1 = numberOfImages1 - 1;
        }
    } else if (val1 === 'unext') {
        if (currentImage1 < numberOfImages1 - 1) {
            currentImage1++;
        } else {
            currentImage1 = 0;
        }
    }

    imagesWrapper1.classList.add('pade-out');
    imagesWrapper1.style.backgroundImage = 'url(' + imagesArray1[currentImage1] + ')';
    imagesWrapper1.classList.remove('pade-out');
}

}


var indexManege = 0;
//total = 5;

function slideco(offset) {
  indexManege = Math.min( Math.max( currentImage1 + offset, 0 ), numberOfImages1 - 1 );

  document.querySelector( '.count1-gal' ).innerHTML = ( currentImage1 + 1 ) + ' / ' + numberOfImages1;

  prevArrow1.setAttribute( 'data-state', currentImage1 === 0 ? 'disabled' : '' );
  nextArrow1.setAttribute( 'data-state', currentImage1 === numberOfImages1 - 1 ? 'disabled' : '' );
}

slideco(0);
/*$('#but-vid').on('click', function () {
  $('#left-nav').toggleClass('speed-in');
  $('#sec11').toggleClass('is-visible');
});

$('#close-left').on('click', function () {
    $('#left-nav').removeClass('speed-in');
    $('#sec11').removeClass('is-visible');
});*/

/*document.getElementById('but-vid').onclick = function() {
  document.getElementById("left-nav").classList.toggle('speed-in');
  document.getElementById("sec11").classList.toggle('is-visible');

  var butShow = document.getElementById('but-vid');
  //butWar.style.display = 'none'; //or
  butShow.style.visibility = 'hidden';

  var butStop = document.getElementById('button-close2');
  //butWar.style.display = 'block'; //or
  butStop.style.visibility = 'visible';
}

function toggletwoVideo(states) {
  document.getElementById("left-nav").classList.remove('speed-in');
  document.getElementById("sec11").classList.remove('is-visible');

  var batShow = document.getElementById('but-vid');
  //butWar.style.display = 'none'; //or
  batShow.style.visibility = 'visible';

  var batStop = document.getElementById('button-close2');
  //butWar.style.display = 'block'; //or
  batStop.style.visibility = 'hidden';

  // if state == 'hide', hide. Else: show video
  var dir = document.getElementById("left-nav");
  var iriframe = dir.getElementsByTagName("iframe")[0].contentWindow;
  //div.style.display = state == 'stop' ? 'none' : '';
  func = states == 'stop' ? 'pauseVideo' : 'playVideo';
  iriframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}*/

/*$('#button').on('click', function () {
  $('#main-nav').toggleClass('speed-in');
  $('#sec4').toggleClass('is-visible');
  $("#button-close1").show("1000");
  $("#button").hide("100");

});

$('#button-close1').on('click', function () {
  $('#main-nav').removeClass('speed-in');
  $('#sec4').removeClass('is-visible');
  $("#button").show("100");
  $("#button-close1").hide("1000");
});*/


/*function toggleVideo(state) {
  document.getElementById("video").classList.remove('speed-in');
  // if state == 'hide', hide. Else: show video
  var div = document.getElementById("video");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  div.style.display = state == 'hide' ? 'none' : '';
  func = state == 'hide' ? 'pauseVideo' : 'playVideo';
  iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}*/




$(document).ready(function () {



  /*$('.scroll-down').click(function(){
    //$('html, body').animate({scrollTop:$('#Section2').height()}, 'slow');
    $('html, body').animate({scrollTop:$(window).height()}, 'slow');
    return false;
    //$('body,html').animate({scrollTop: top}, 1500);
      //$("html, body").animate({ scrollTop: $(window).height()}, 600);
      //return false;
      console.log("ddvl");
  });*/

  /*$(".scroll-down").click(function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });*/

  /*$('.scroll-down').click(function(){
    $('body,html').animate({scrollTop: top}, 1500);
      //$('html, body').animate({scrollTop:$('#Section2').height()}, 'slow');
      return false;
  });*/

  /*$('.scroll-down').click (function() {

    //$('html, body').animate({scrollTop: $('#Section2').offset().top }, 'slow');
    //$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    //return false;
  });*/

  /*$(function() {
      $('.scroll-down').click (function() {
        //$('body,html').animate({ scrollTop: 0 }, 800);
        //return false;

        //$('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
        $('html, body').animate({scrollTop: $("#Section2").offset().top}, 700);
        //return false;

        //e.preventDefault();
        //$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        //console.log('Captains Log');
      });
    });*/

  /*$(function() {
    scrolling.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });*/

  /*var menu_navigation = $('#sec-left'),
        h_menu = $('#button'),
        shadow_layer = $('#shadow-layer');


  shadow_layer.on('click', function () {
      cart.removeClass('speed-in');
      menu_navigation.removeClass('speed-in');
      shadow_layer.removeClass('is-visible');
      $('body').removeClass('overflow-hidden');

  });

  h_menu.on('click', function () {
      toggle_panel_visibility(menu_navigation, shadow_layer, $('body'));
      console.log('Captains Log');
  });*/

  /*var menu_navigation = $('#main-nav'),
        h_menu = $('#button'),
        shadow_layer = $('#section3');*/


  /*shadow_layer.on('click', function () {
      cart.removeClass('speed-in');
      menu_navigation.removeClass('speed-in');
      shadow_layer.removeClass('is-visible');
      $('body').removeClass('overflow-hidden');
  });*/

  /*h_menu.on('click', function () {
      toggle_panel_visibility(menu_navigation, shadow_layer, $('body'));
  });*/


  /*var left_navigation = $('#left-nav'),
        k_menu = $('#but-vid'),
        shadow_left = $('#section10');

  k_menu.on('click', function () {
      toggle_left_visibility(left_navigation, shadow_left, $('body'));
  });*/


  $('#button').on('click', function () {
    $('#main-nav').toggleClass('speed-in');
    $('#sec4').toggleClass('is-visible');
    $("#button-close1").show("1000");
    $("#button").hide("100");

    $("#header-top").removeAttr("style").hide();
    //$("#header-top").hide("1");

    //console.log("dvdfnkgfbk");
  });

  $('#button-close1').on('click', function () {
    $('#main-nav').removeClass('speed-in');
    $('#sec4').removeClass('is-visible');
    $("#button").show("100");
    $("#button-close1").hide("1000");

    $("#header-top").fadeIn(200);
    //$("#header-top").attr("style").show();
    //$("#header-top").show("1");
  });





  $('#but-vid').on('click', function () {
    $('#left-nav').toggleClass('speed-in');
    $('#sec11').toggleClass('is-visible');
    $("#button-close2").show("1000");
    $("#but-vid").hide("100");

    $("#header-top").removeAttr("style").hide();
    //console.log("dvdfnkgfbk");
  });

  $('#button-close2').on('click', function () {
    $('#left-nav').removeClass('speed-in');
    $('#sec11').removeClass('is-visible');
    $("#but-vid").show("100");
    $("#button-close2").hide("1000");

    $('#video-left')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');

    $("#header-top").fadeIn(200);

  });



  /*$('#but-vid').on('click', function () {
    $('#left-nav').toggleClass('speed-in');
    $('#sec11').toggleClass('is-visible');
  });

  $('#close-left').on('click', function () {
      $('#left-nav').removeClass('speed-in');
      $('#sec11').removeClass('is-visible');
  });*/



  $('#linkb').on('click', function () {
    $('#linkb-part').toggleClass('speed-in');
    $("#menu-bottom").hide("100");
    //console.log("dvdfnkgfbk");
  });

  $('#close').on('click', function () {
      $('#linkb-part').removeClass('speed-in');
      $("#menu-bottom").show("100");
  });



  $('#contact').on('click', function () {
    $('#main-right').toggleClass('speed-in');
    event.stopPropagation();
    //console.log("dvdfnkgfbk");
  });

  $('body').on('click', function () {
      $('#main-right').removeClass('speed-in');
      //console.log("dvdfnkgfbk");
  });

  /*$('#vid').on('click', function () {
    $('#video').toggleClass('speed-in');
  });

  $('#close-v').on('click', function () {
      $('#video').removeClass('speed-in');
  });*/



  $('#gal').on('click', function () {
    $('#carusel').toggleClass('speed-in');

    $("#header-top").removeAttr("style").hide();
  });

  $('#close-g').on('click', function () {
      $('#carusel').removeClass('speed-in');
      //console.log("dvdfnkgfbk");

      $("#header-top").fadeIn(200);
  });



  /*$('#fun-level').animateNumber(
    {
      number: 100,
      color: 'green', // требуется jquery.color
      'font-size': '50px',

      easing: 'easeInQuad', // требуется jquery.easing

      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);

        target.text(floored_number + ' %');
      }
    },
    1800
  );*/

  /*$('.progress .bar').progressbar({
    update: function(current_percentage) { $('#update').html(current_percentage); },
    //done: function() { $('#done').html('yeah! done!'); }
  });*/


  var searchBtn = '.search-btn', searchSlide = '.search-slide', searchClose = '.search-close', searchSpeed = 300;
  $(searchBtn).click(function () {
      $(searchSlide).animate({ 'width': '14.3em', 'height': '2.7em' }, searchSpeed);
      //$(searchBtn).fadeOut("100000");
      //$(searchTxt).focus();
  });
  $(searchClose).click(function () {
      $(searchSlide).animate({ 'width': 0 }, searchSpeed);
      //$(searchBtn).fadeIn("100000");
  });



  var searchBtn1 = '.search-btn1', searchSlide1 = '.search-slide1', searchClose1 = '.search-close1', searchSpeed1 = 300;
  $(searchBtn1).on('click', function () {
      $(searchSlide1).animate({ 'width': '35.3em', 'height': '9.5em' }, searchSpeed1);
      $("#face").removeAttr("style").hide();
      event.stopPropagation();

      //$("#face").fadeOut("100000");
      //$(searchBtn).fadeOut("100000");
      //$(searchTxt).focus();
  });
  $('body').on('click', function () {
      $(searchSlide1).animate({ 'width': 0 }, searchSpeed1);
      $("#face").fadeIn(200);
      //console.log("dvdfnkgfbk");
  });


  /*$('body').on('mouseover', function () {
      $(searchSlide1).animate({ 'width': 0 }, searchSpeed1);
      event.stopPropagation();

      $("#face").fadeIn(200);
      //console.log("dvdfnkgfbk");
  });*/
  /*$(searchClose1).click(function () {
      $(searchSlide1).animate({ 'width': 0 }, searchSpeed1);
      //$(searchBtn).fadeIn("100000");
  });*/


});
    /*function toggle_panel_visibility(panel, background_layer, body) {
        if (panel.hasClass('speed-in')) {
            panel.removeClass('speed-in');
            background_layer.removeClass('is-visible');
        } else {
            panel.addClass('speed-in');
            background_layer.addClass('is-visible');
        }
    }*/


    /*function toggle_left_visibility(volet, background_volet, body) {
        if (volet.hasClass('speed-in')) {
            volet.removeClass('speed-in');
            background_volet.removeClass('is-visible');
            //body.removeClass('overflow-hidden');
        } else {
            volet.addClass('speed-in');
            background_volet.addClass('is-visible');
            //body.addClass('overflow-hidden');
        }
    }*/

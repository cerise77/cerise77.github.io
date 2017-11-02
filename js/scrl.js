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

var myCarousel = document.getElementById('carusel');

if (myCarousel && myCarousel.hasChildNodes()) {
    var imagesWrapper = document.getElementById('wrapper');
    var prevArrow = document.getElementById('prev');
    var nextArrow = document.getElementById('next');
    var childNodes = myCarousel.childNodes;
    var imagesArray = [];

    for (var i = 0; i < childNodes.length; i++) {
        var currentNode = childNodes[i];
        if (currentNode.nodeName === 'IMG') {
            imagesArray.push(currentNode.src);
            currentNode.classList.add('hide');
        }
    }

imagesWrapper.style.backgroundImage = 'url(' + imagesArray[0] + ')';
var currentImage = 0;
var numberOfImages = imagesArray.length;

prevArrow.onclick = function () {
    handleSlideshowArrow('prev');
};

nextArrow.onclick = function () {
    handleSlideshowArrow('next');
};

function handleSlideshowArrow(val) {
    if (val === 'prev') {
        if (currentImage > 0) {
            currentImage--;
        } else {
            currentImage = numberOfImages - 1;
        }
    } else if (val === 'next') {
        if (currentImage < numberOfImages - 1) {
            currentImage++;
        } else {
            currentImage = 0;
        }
    }

    imagesWrapper.classList.add('fade-out');
    imagesWrapper.style.backgroundImage = 'url(' + imagesArray[currentImage] + ')';
    imagesWrapper.classList.remove('fade-out');
}

}


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
}

function toggleVideo(state) {
  document.getElementById("video").classList.remove('speed-in');
  // if state == 'hide', hide. Else: show video
  var div = document.getElementById("video");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  //div.style.display = state == 'stop' ? 'none' : '';
  func = state == 'stop' ? 'pauseVideo' : 'playVideo';
  iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

/*$('#but-vid').on('click', function () {
  $('#left-nav').toggleClass('speed-in');
  $('#sec11').toggleClass('is-visible');
});

$('#close-left').on('click', function () {
    $('#left-nav').removeClass('speed-in');
    $('#sec11').removeClass('is-visible');
});*/

document.getElementById('but-vid').onclick = function() {
  document.getElementById("left-nav").classList.toggle('speed-in');
  document.getElementById("sec11").classList.toggle('is-visible');
}

function toggletwoVideo(states) {
  document.getElementById("left-nav").classList.remove('speed-in');
  document.getElementById("sec11").classList.remove('is-visible');
  // if state == 'hide', hide. Else: show video
  var dir = document.getElementById("left-nav");
  var iriframe = dir.getElementsByTagName("iframe")[0].contentWindow;
  //div.style.display = state == 'stop' ? 'none' : '';
  func = states == 'stop' ? 'pauseVideo' : 'playVideo';
  iriframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

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


  /*$(function() {
      $('.scroll-down').click (function() {
        //$('body,html').animate({ scrollTop: 0 }, 800);
        //return false;

        //$('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
        $('html, body').animate({scrollTop: $("#section1").offset().top}, 700);
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
    //console.log("dvdfnkgfbk");
  });

  $('#close-nav').on('click', function () {
    $('#main-nav').removeClass('speed-in');
    $('#sec4').removeClass('is-visible');
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
    //console.log("dvdfnkgfbk");
  });

  $('#close').on('click', function () {
      $('#linkb-part').removeClass('speed-in');
  });



  /*$('#vid').on('click', function () {
    $('#video').toggleClass('speed-in');
  });

  $('#close-v').on('click', function () {
      $('#video').removeClass('speed-in');
  });*/



  $('#gal').on('click', function () {
    $('#carusel').toggleClass('speed-in');
  });

  $('#close-g').on('click', function () {
      $('#carusel').removeClass('speed-in');
      //console.log("dvdfnkgfbk");
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
  });

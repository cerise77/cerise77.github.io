
$(document).ready(function () {



  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');



  // toggle menu
  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
  });



  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'Section2', 'Section3', 'Section4', 'Section5', 'Section6', 'Section7', 'Section8', 'Section9', 'Section10', 'Section11', 'Section12', 'Section13', 'Section14', 'Section15'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
      //$header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
      /*if (anchorLink == 'Section2') {
          $('.header-top').css('background', 'rgba(0, 0, 0, 1)');
        } else {
          $('.header-top').css('background', 'rgba(0, 6, 7, 1)');
        }*/

        if (index == 2) {
            $('#fp-nav').hide();
          }

        if(index == 9) {
          /*$(".spincrement").spincrement({
          from: 0,                // Стартовое число
          decimalPlaces: 0,       // Сколько знаков оставлять после запятой
          thousandSeparator: ",", // Разделитель тыcячных
          duration: 1500          // Продолжительность анимации в миллисекундах
        });*/
        var currentNumbet = $('.chiffret').text();
        $({numberValue: currentNumbet}).animate({numberValue: 560891}, {
            duration: 2500,
            easing: 'linear',
            step: function() {
                $('.chiffret').text(Math.ceil(this.numberValue));
            }
        });

        var currentNumbes = $('.chiffres').text();
        $({numberValue: currentNumbes}).animate({numberValue: 150}, {
            duration: 2500,
            easing: 'linear',
            step: function() {
                $('.chiffres').text(Math.ceil(this.numberValue));
            }
        });

        var currentNumbeb = $('.chiffreb').text();
        $({numberValue: currentNumbeb}).animate({numberValue: 65}, {
            duration: 2500,
            easing: 'linear',
            step: function() {
                $('.chiffreb').text(Math.ceil(this.numberValue));
            }
        });

        var currentNumbek = $('.chiffrek').text();
        $({numberValue: currentNumbek}).animate({numberValue: 45}, {
            duration: 2500,
            easing: 'linear',
            step: function() {
                $('.chiffrek').text(Math.ceil(this.numberValue));
            }
        });

        }

        if(index == 14) {

          /*$(function() {
            $("#topbar").show();
            $("#topbar").animate({width: "200px"},2500, function() {
            });
          });

          var currentNumber = $('.chiffre').text();
          $({numberValue: currentNumber}).animate({numberValue: 40}, {
              duration: 2500,
              easing: 'linear',
              step: function() {
                  $('.chiffre').text(Math.ceil(this.numberValue));
              }
          });*/


          $('.third.circle').circleProgress({
            value: 40,
            startAngle: 0,
            value: 0.5,
            lineCap: 'round',
            fill: {color: '#2572c0'}
            }).on('circle-animation-progress', function(event, progress, stepValue) {
              $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
          });

        }

    },

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {

    },

    onLeave: function(index, nextIndex, direction) {

      if(index == 5) {
        $('#fp-nav').show();
      }

    },


    /*afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if(anchorLink == 'fifthSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(false, 'up');
        $header_top.css('background', 'transparent');
        $nav.css('background', 'transparent');
        $(this).css('background', '#374140');
        $(this).find('h2').css('color', 'white');
        $(this).find('h3').css('color', 'white');
        $(this).find('p').css(
          {
            'color': '#DC3522',
            'opacity': 1,
            'transform': 'translateY(0)'
          }
        );
      }
    },*/

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      if(anchorLink == 'fifthSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, 'up');
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
      }
    }
  });


});


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

        if (index == 1) {
            $('#text-menu').css('color', '#fff');
            $('#contact').css('color', '#fff');
            $('#contact').css('border-color', '#fff');
            $("#triangle").attr("fill","#fff");
            $("#search-close").attr("fill","#fff");

            $("#logo1").attr("fill","#fff");
            $("#logo2").attr("fill","#fff");
            $("#logo3").attr("fill","#fff");
            $("#logo4").attr("fill","#fff");
            $("#logo5").attr("fill","#fff");
            $("#logo6").attr("fill","#fff");
            $("#logo7").attr("fill","#fff");
            $("#logo8").attr("fill","#fff");
            $("#logo9").attr("fill","#fff");
            $("#logo10").attr("fill","#fff");
            $("#logo11").attr("fill","#fff");
            $("#logo12").attr("fill","#fff");
            $("#logo13").attr("fill","#fff");
            $("#logo14").attr("fill","#fff");
            $("#logo15").attr("fill","#fff");
            $("#logo16").attr("fill","#fff");
            $("#logo17").attr("fill","#fff");
            $("#logo18").attr("fill","#fff");
            $("#rectungle").attr("fill","#fff");
            $("#logo19").attr("fill","#fff");
            $("#logo20").attr("fill","#fff");
            $("#logo21").attr("fill","#fff");
            $("#logo22").attr("fill","#fff");
            $("#logo23").attr("fill","#fff");
            $("#logo24").attr("fill","#fff");
            $("#logo25").attr("fill","#fff");
            $("#logo26").attr("fill","#fff");
            $("#logo27").attr("fill","#fff");
            $("#logo28").attr("fill","#fff");
            $("#logo29").attr("fill","#fff");
            $("#logo30").attr("fill","#fff");
            $("#logo31").attr("fill","#fff");
            $("#logo32").attr("fill","#fff");
            $("#logo33").attr("fill","#fff");
            $("#logo34").attr("fill","#fff");
            $("#logo35").attr("fill","#fff");
            $("#logo36").attr("fill","#fff");
            $("#logo37").attr("fill","#fff");
            $("#logo38").attr("fill","#fff");
            $("#logo39").attr("fill","#fff");
        }

        if (index == 2) {
            $('#text-menu').css('color', '#000');
            $('#contact').css('color', '#000');
            $('#contact').css('border-color', '#000');
            $("#triangle").attr("fill","#0000");
            $("#search-close").attr("fill","#0000");

            $("#logo1").attr("fill","#0000");
            $("#logo2").attr("fill","#0000");
            $("#logo3").attr("fill","#0000");
            $("#logo4").attr("fill","#0000");
            $("#logo5").attr("fill","#0000");
            $("#logo6").attr("fill","#0000");
            $("#logo7").attr("fill","#0000");
            $("#logo8").attr("fill","#0000");
            $("#logo9").attr("fill","#0000");
            $("#logo10").attr("fill","#0000");
            $("#logo11").attr("fill","#0000");
            $("#logo12").attr("fill","#0000");
            $("#logo13").attr("fill","#0000");
            $("#logo14").attr("fill","#0000");
            $("#logo15").attr("fill","#0000");
            $("#logo16").attr("fill","#0000");
            $("#logo17").attr("fill","#0000");
            $("#logo18").attr("fill","#0000");
            $("#rectungle").attr("fill","#0000");
            $("#logo19").attr("fill","#0000");
            $("#logo20").attr("fill","#0000");
            $("#logo21").attr("fill","#0000");
            $("#logo22").attr("fill","#0000");
            $("#logo23").attr("fill","#0000");
            $("#logo24").attr("fill","#0000");
            $("#logo25").attr("fill","#0000");
            $("#logo26").attr("fill","#0000");
            $("#logo27").attr("fill","#0000");
            $("#logo28").attr("fill","#0000");
            $("#logo29").attr("fill","#0000");
            $("#logo30").attr("fill","#0000");
            $("#logo31").attr("fill","#0000");
            $("#logo32").attr("fill","#0000");
            $("#logo33").attr("fill","#0000");
            $("#logo34").attr("fill","#0000");
            $("#logo35").attr("fill","#0000");
            $("#logo36").attr("fill","#0000");
            $("#logo37").attr("fill","#0000");
            $("#logo38").attr("fill","#0000");
            $("#logo39").attr("fill","#0000");
            //$('#fp-nav').hide();
            $("#text-sec2-1").fadeIn("100000");
            $("#text-sec2-2").fadeIn("100000");

        }

        if (index == 3) {
            $('#text-menu').css('color', '#fff');
            $('#contact').css('color', '#fff');
            $('#contact').css('border-color', '#fff');
            $("#triangle").attr("fill","#fff");
            $("#search-close").attr("fill","#fff");

            $("#logo1").attr("fill","#fff");
            $("#logo2").attr("fill","#fff");
            $("#logo3").attr("fill","#fff");
            $("#logo4").attr("fill","#fff");
            $("#logo5").attr("fill","#fff");
            $("#logo6").attr("fill","#fff");
            $("#logo7").attr("fill","#fff");
            $("#logo8").attr("fill","#fff");
            $("#logo9").attr("fill","#fff");
            $("#logo10").attr("fill","#fff");
            $("#logo11").attr("fill","#fff");
            $("#logo12").attr("fill","#fff");
            $("#logo13").attr("fill","#fff");
            $("#logo14").attr("fill","#fff");
            $("#logo15").attr("fill","#fff");
            $("#logo16").attr("fill","#fff");
            $("#logo17").attr("fill","#fff");
            $("#logo18").attr("fill","#fff");
            $("#rectungle").attr("fill","#fff");
            $("#logo19").attr("fill","#fff");
            $("#logo20").attr("fill","#fff");
            $("#logo21").attr("fill","#fff");
            $("#logo22").attr("fill","#fff");
            $("#logo23").attr("fill","#fff");
            $("#logo24").attr("fill","#fff");
            $("#logo25").attr("fill","#fff");
            $("#logo26").attr("fill","#fff");
            $("#logo27").attr("fill","#fff");
            $("#logo28").attr("fill","#fff");
            $("#logo29").attr("fill","#fff");
            $("#logo30").attr("fill","#fff");
            $("#logo31").attr("fill","#fff");
            $("#logo32").attr("fill","#fff");
            $("#logo33").attr("fill","#fff");
            $("#logo34").attr("fill","#fff");
            $("#logo35").attr("fill","#fff");
            $("#logo36").attr("fill","#fff");
            $("#logo37").attr("fill","#fff");
            $("#logo38").attr("fill","#fff");
            $("#logo39").attr("fill","#fff");
        }

        if (index == 5) {
            //$('#fp-nav').hide();
            $("#text-sec5-1").fadeIn("100000");
            $("#text-sec5-2").fadeIn("100000");

        }

        if (index == 6) {
            //$('#fp-nav').hide();
            $("#text-sec6-1").fadeIn("100000");
            $("#text-sec6-2").fadeIn("100000");
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
            startAngle: 55,
            value: 0.5,
            lineCap: 'round',
            fill: {color: '#ff7903'}
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

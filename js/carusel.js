
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
    slide( -1 );
};

nextArrow.onclick = function () {
    handleSlideshowArrow('next');
    slide( 1 );
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


//pr.onclick = slide.bind( this, -1 );
//pl.onclick = slide.bind( this, 1 );

var indexCount = 0;
//total = 5;

function slide(offset1) {
  indexCount = Math.min( Math.max( currentImage + offset1, 0 ), numberOfImages - 1 );

  document.querySelector( '.count-gal' ).innerHTML = ( currentImage + 1 ) + ' / ' + numberOfImages;

  prevArrow.setAttribute( 'data-state', currentImage === 0 ? 'disabled' : '' );
  nextArrow.setAttribute( 'data-state', currentImage === numberOfImages - 1 ? 'disabled' : '' );
}

slide(0);





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



$(document).ready(function () {



  $('#gal1').on('click', function () {
    $('#manege').toggleClass('speed-in');

    $("#header-top").removeAttr("style").hide();
  });

  $('#close-p').on('click', function () {
      $('#manege').removeClass('speed-in');
      //console.log("dvdfnkgfbk");

      $("#header-top").fadeIn(200);
  });


});

window.onscroll = function() {
  /*var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('showScroll').innerHTML = scrolled + 'px';*/
  console.log("dfgmdfhnmk");
}

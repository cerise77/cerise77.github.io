
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

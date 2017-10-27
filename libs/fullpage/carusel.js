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
};

nextArrow1.onclick = function () {
    handleSlideshowArrow('unext');
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



$(document).ready(function () {



  $('#gal1').on('click', function () {
    $('#manege').toggleClass('speed-in');
  });

  $('#close-p').on('click', function () {
      $('#manege').removeClass('speed-in');
      //console.log("dvdfnkgfbk");
  });


});

window.onscroll = function() {
  /*var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('showScroll').innerHTML = scrolled + 'px';*/
  console.log("dfgmdfhnmk");
}

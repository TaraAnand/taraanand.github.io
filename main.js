var slideIndex = [1,1,1];
var slideId = ["slide", "slide2", "slide3"];
var prevsliders = ["main-slider-prev1", "main-slider-prev2", "main-slider-prev3"];
var nextsliders = ["main-slider-next1", "main-slider-next2", "main-slider-next3"];
showDivs(1, 0);
showDivs(1, 1);

function hideprevarrow(){
    var img = document.getElementById('main-slider-prev1');
    var img2 = document.getElementById('main-slider-prev2');
    var img3 = document.getElementById('main-slider-prev3');
    img.style.visibility = 'hidden';
    img2.style.visibility = 'hidden';
    img3.style.visibility = 'hidden';
}

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);

  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  

  if(slideIndex[no]-1 == 0){

  }

}


/*
function showprevarrow(){
    var img = document.getElementById('main-slider-prev1');
    var img2 = document.getElementById('main-slider-prev2');
    var img3 = document.getElementById('main-slider-prev3');
    img.style.visibility = 'visible';
    img2.style.visibility = 'visible';
    img3.style.visibility = 'visible';
}

function hidenextarrow(){
    var img = document.getElementById('main-slider-next1');
    var img2 = document.getElementById('main-slider-next2');
    var img3 = document.getElementById('main-slider-next3');
    img.style.visibility = 'hidden';
    img2.style.visibility = 'hidden';
    img3.style.visibility = 'hidden';
}

function shownextarrow(){
    var img = document.getElementById('main-slider-next1');
    var img2 = document.getElementById('main-slider-next2');
    var img3 = document.getElementById('main-slider-next3');
    img.style.visibility = 'visible';
    img2.style.visibility = 'visible';
    img3.style.visibility = 'visible';
}
*/





/*
function slider() {
    var slides = $('.main-slide');
    var i = 0;
    $('#main-slider-prev').hide();
    $('#main-slider-next').click(function () {
        if (i == 0) {
            $('#main-slider-prev').show();
        }
        if (i == slides.length - 2) {
            $('#main-slider-next').hide();
        }
        i = ++i % slides.length;
        $('.slider-wrapper').animate({
            'left': -(slides.eq(i).position().left)
        }, 6000, "swing");
    });
    $('#main-slider-prev').click(function () {
        if (i == 1) {
            $('#main-slider-prev').hide();
        }
        if (i == slides.length - 1) {
            $('#main-slider-next').show();
        }
        i = --i % slides.length;
        $('.slider-wrapper').animate({
            'left': -(slides.eq(i).position().left)
        }, 6000, "swing");
    });
}

$(document).ready(function () {
      slider();
    modal();
    alternate();
    gifSwitch();
});

*/

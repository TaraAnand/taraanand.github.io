/*var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
*/

var slideIndex = [1,1];
var slideId = ["slide", "slide2"]
showDivs(1, 0);
showDivs(1, 1);

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
}
















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

function modal() {
    $('a[href*=#]:not([href^=#open], [href^=#close])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 5000);
                return false;
            }
        }
    });
}

function alternate() {
    $('.alternate img:gt(0)').hide();
    setInterval(function () {
        $('.alternate :first-child').fadeOut().next('img').fadeIn().end().appendTo('.alternate');
    }, 10000);
}

function gifSwitch() {
    $('.switch img:gt(0)').hide();
    setInterval(function () {
        $('.switch :first-child').hide().next('img').show().end().appendTo('.switch');
    }, 20000);
}

$(document).ready(function () {
    slider();
    modal();
    alternate();
    gifSwitch();
});
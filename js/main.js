var slideIndex = [1,1,1];
var slideId = ["slide", "slide2", "slide3"];
var prevsliders = ["main-slider-prev1", "main-slider-prev2", "main-slider-prev3"];
var nextsliders = ["main-slider-next1", "main-slider-next2", "main-slider-next3"];

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

function slider() {
    var slides2 = $('.slide2');
    var i = 0;
    $('#main-slider-prev1').hide();
    $('#main-slider-next1').click(function () {
        if (i == 0) {
            $('#main-slider-prev1').show();
        }
        if (i == slides2.length - 2) {
            $('#main-slider-next1').hide();
        }
        i = ++i % slides2.length;
        plusDivs(1, 1);
    });
    $('#main-slider-prev1').click(function () {
        if (i == 1) {
            $('#main-slider-prev1').hide();
        }
        if (i == slides2.length - 1) {
            $('#main-slider-next1').show();
        }
        i = --i % slides2.length;
       plusDivs(-1, 1);
    });


    var slides1 = $('.slide');
    var j = 0;
    $('#main-slider-prev2').hide();
    $('#main-slider-next2').click(function () {
        if (j == 0) {
            $('#main-slider-prev2').show();
        }
        if (j == slides1.length - 2) {
            $('#main-slider-next2').hide();
        }
        j = ++j % slides1.length;
        plusDivs(1, 0);
    });
    $('#main-slider-prev2').click(function () {
        if (j == 1) {
            $('#main-slider-prev2').hide();
        }
        if (j == slides1.length - 1) {
            $('#main-slider-next2').show();
        }
        j = --j % slides1.length;
       plusDivs(-1, 0);
    });


    var slides3 = $('.slide3');
    var k = 0;
    $('#main-slider-prev3').hide();
    $('#main-slider-next3').click(function () {
        if (k == 0) {
            $('#main-slider-prev3').show();
        }
        if (k == slides3.length - 2) {
            $('#main-slider-next3').hide();
        }
        k = ++k % slides3.length;
        plusDivs(1, 2);
    });
    $('#main-slider-prev3').click(function () {
        if (k == 1) {
            $('#main-slider-prev3').hide();
        }
        if (k == slides3.length - 1) {
            $('#main-slider-next3').show();
        }
        k = --k % slides3.length;
       plusDivs(-1, 2);
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
                }, 500);
                return false;
            }
        }
    });
}

function alternate() {
    $('.alternate img:gt(0)').hide();
    setInterval(function () {
        $('.alternate :first-child').fadeOut().next('img').fadeIn().end().appendTo('.alternate');
    }, 1000);
}

function gifSwitch() {
    $('.switch img:gt(0)').hide();
    setInterval(function () {
        $('.switch :first-child').hide().next('img').show().end().appendTo('.switch');
    }, 2000);
}

$(document).ready(function () {
    slider();
    modal();
    alternate();
    gifSwitch();
});
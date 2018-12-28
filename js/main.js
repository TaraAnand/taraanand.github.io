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


function scroll(){
  // $sections incleudes all of the container divs that relate to menu items.
  var $sections = $('.sectionHeader');
  
  // The user scrolls
  $(window).scroll(function(){
    
    // currentScroll is the number of pixels the window has been scrolled
    var currentScroll = $(this).scrollTop();
    
    // $currentSection is somewhere to place the section we must be looking at
    var $currentSection
    
    // We check the position of each of the divs compared to the windows scroll positon
    $sections.each(function(){
      // divPosition is the position down the page in px of the current section we are testing      
      var divPosition = $(this).offset().top;
      
      // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
      // the -1 is so that it includes the div 1px before the div leave the top of the window.
      if( divPosition - 1 < currentScroll ){
        // We have either read the section or are currently reading the section so we'll call it our current section
        $currentSection = $(this);
        // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
      }
      // This is the bit of code that uses the currentSection as its source of ID
      var id = $currentSection.attr('id');
     $('div').removeClass('sectionHeaderActive');
     $("[href=#"+id+"]").addClass('sectionHeaderActive');
    })
  });
};

$(document).ready(function () {
    slider();
    scroll();
});
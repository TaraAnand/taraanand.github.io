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


function scroll() {
    //caches a jQuery object containing the header element
    var header = $(".sectionHeader");

    var nav = $(".navbar"); 
    var distance = parseInt($("#aCon").css("height")) -parseInt($("#nav").css("height")) + 58.0;
    console.log(distance);




    $(window).scroll(function() {

        if ( $(window).scrollTop() >= distance ){
            $("#nav").removeClass("navbar").addClass("navbarActive"); 
        }
        else{
            $("#nav").removeClass("navbarActive").addClass("navbar");
        }


        var scroll = $(window).scrollTop();
        var currentSection; 
        var i = 0.0; 
        // var scrollOffset = parseInt($(".slide").css("height")); 
       
        var scrollOffset = 78.0;
        var slideWindowHeight = 960.0;
        header.each(function(){ 
            i++; 
    
            if( slideWindowHeight*(i+1) + scrollOffset >= scroll && scroll >= slideWindowHeight*i + scrollOffset){
                currentSection = $(this); 
                var id = currentSection.attr('id'); 
                $("#"+id).removeClass('sectionHeader').addClass("sectionHeaderActive");
            }
            else{
                currentSection = $(this); 
                var id = currentSection.attr('id'); 
                $("#"+id).removeClass("sectionHeaderActive").addClass('sectionHeader');

            }
            
        })
    });
};

function collapse(){
    $('#collapse').hide();
    var slide = document.getElementById("info"); 

    var coll = document.getElementsByClassName("collapsible");
    var i;

    var exp = document.getElementsByClassName("collapsibleReturn"); 
    var j; 

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
          $("#info").removeClass("resumeExpanded").addClass("resume"); 
          $('#expand').show();
          $('#collapse').hide();

        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          $("#info").removeClass("resume").addClass("resumeExpanded");
          $('#expand').hide();
          $('#collapse').show();
          
        }
      });
    }

    for (j = 0; j < exp.length; j++) {
        exp[j].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        content.style.maxHeight = null;
        $("#info").removeClass("resumeExpanded").addClass("resume"); 
        $('#expand').show();
        $('#collapse').hide();

      });
    }
}

$(document).ready(function () {
    slider();
    scroll();
    collapse(); 
});
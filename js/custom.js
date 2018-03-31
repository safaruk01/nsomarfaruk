$(document).ready(function(){
/* $('.your-class').slick({*/
$('.your-class').slick({
  dots: false,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*  });*/
  
 window.onscroll = function() {myFunction()};

var header_part = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header_part.classList.add("sticky")
  } else {
    header_part.classList.remove("sticky");
  }
} 
  
  
  
});
let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});



/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

document.addEventListener("DOMContentLoaded", () =>{
  function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if(current == end){
        clearInterval(timer);
      }
    }, step);
  }
  counter("count1", 0,10,2000);
  counter("count2", 100,20,3000);
  counter("count3", 0,30,4000);
  counter("count4", 0,10,2000);
});

$('.customer-logos').slick({
  dots: false,
  arrow: false,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,

      }
    }
  ]
});

                    function toggle() {
                        var tra = document.querySelector(
                            ".tra"
                        )
                        tra.classList.toggle("active")
                    }
               
				

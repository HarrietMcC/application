//initialise: slideshow playing
var play = true;
// }
// set timing of dispatch click events
var scrollInterval,
   interval = 3000;

// create new Event to dispatch click for auto scroll
var autoClick = new Event('autoClick');
function autoScroll() {
	autoSlide(1);
}

changeStateOfPlay(play);

function changeStateOfPlay(newStateOfPlay) {
  if (newStateOfPlay) {
    //hide play button
    document.querySelector("#play").style.display = "none";
    document.querySelector("#pause").style.display = "block";
    scrollInterval = setInterval(autoScroll, interval);
  }

  if (!newStateOfPlay) {
    //hide pause button
    document.querySelector("#play").style.display = "block";
    document.querySelector("#pause").style.display = "none";
    clearInterval(scrollInterval);
  }
}


function showSlides(n) {
  //index
  var i;

  //photo slides
  var slides = document.getElementsByClassName("mySlides");

  //indicator dots
  var dots = document.getElementsByClassName("dot");

  //slideshow looping when n<1 or n>slides.length
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  //hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  //show current slides
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

var slideIndex = 1;
showSlides(slideIndex);

// Navigation controls
function plusSlides(n) {
  play = false;
  showSlides(slideIndex += n);
}

function autoSlide() {
  showSlides(slideIndex += 1);
}

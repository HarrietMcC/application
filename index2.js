//manual slide
var slideIndex = 1; //initial slide

function showSlides(n) {
  var i; //index
  var slides = document.getElementsByClassName("mySlides"); //photo slides
  var dots = document.getElementsByClassName("dot"); //indicator dots

  //slideshow looping when n<1 or n>slides.length
  if (n > slides.length) {n = 1}
  if (n < 1) {n = slides.length}

  //hide other slides/dots
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  //show current slides/dots
  slides[n-1].style.display = "block";
  dots[n-1].className += " active";
}

showSlides(slideIndex);

// Navigation controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}




//autoslide
function autoSlide() {
  showSlides(slideIndex += 1);
}

// set timing of dispatch click events
var scrollInterval,
   interval = 3000;


//start in play
changeStateOfPlay(play);

function changeStateOfPlay(newStateOfPlay) {
  if (newStateOfPlay) {
    //hide play button
    document.querySelector("#play").style.display = "none";
    document.querySelector("#pause").style.display = "block";
    //runs autoscroll every 3 seconds
    scrollInterval = setInterval(autoSlide, interval);
  }

  if (!newStateOfPlay) {
    //hide pause button
    document.querySelector("#play").style.display = "block";
    document.querySelector("#pause").style.display = "none";
    //clears interval
    clearInterval(scrollInterval);
  }
}

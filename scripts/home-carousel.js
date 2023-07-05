var indexSlide = 0;
var slideManual = false;
var numOfSlides, sliderTimer;

function setIntervalImmediately(func, interval) {
  //THIS METHOD RUNS THE CODE IMMEDIATELY AND THEN GIVES THE DELAY BUT DOES NOT WORK WITH PREVSLIDE
  func();
  sliderTimer = setInterval(func, interval);
}

function initSlider() {
  numOfSlides = document.querySelectorAll(".slide").length;
  setIntervalImmediately(animateSlider, 7000);
}

function reInitSlider() {
  //   numOfSlides = document.querySelectorAll(".slide").length;
  sliderTimer = setInterval(function() {
    if (!slideManual) {
      animateSlider();
    } else {
      slideManual = false;
    }
  }, 7000);
}

function animateSlider() {
  if (indexSlide > numOfSlides - 1) {
    indexSlide = 0;
  }

  try {
    document.querySelector(".active").className = "slide";
    document.querySelectorAll(".slide")[indexSlide].className = "slide active";

    document.querySelector(".slide-indicator div.active").className = "";
    document.querySelectorAll(".slide-indicator div")[indexSlide].className =
      "active";
  } catch (e) {}

  indexSlide++;
}

function showSlide(id) {
  indexSlide = id;
  slideManual = true;
  animateSlider();
}

function showPrevSlide() {
  if (indexSlide <= 0) indexSlide = numOfSlides - 1;
  else indexSlide--;

  // NOT WORKING SO HACKED IT BELOW
  clearInterval(sliderTimer);
  document.querySelector(".active").className = "slide";
  document.querySelectorAll(".slide")[indexSlide].className = "slide active";

  document.querySelector(".slide-indicator div.active").className = "";
  document.querySelectorAll(".slide-indicator div")[indexSlide].className =
    "active";
  reInitSlider();
}

function showNextSlide() {
  if (indexSlide > numOfSlides - 1) indexSlide = 0;
  //   else indexSlide++;

  // NOT WORKING SO HACKED IT BELOW
  clearInterval(sliderTimer);
  document.querySelector(".active").className = "slide";
  document.querySelectorAll(".slide")[indexSlide].className = "slide active";

  document.querySelector(".slide-indicator div.active").className = "";
  document.querySelectorAll(".slide-indicator div")[indexSlide].className =
    "active";
  initSlider();
}

// showPrevSlide() was not working when swiping right.
// it was pausing after showing prev slide.
function swipeRight() {
  if (indexSlide <= 0) indexSlide = numOfSlides - 1;
  else indexSlide--;

  // NOT WORKING SO HACKED IT BELOW
  clearInterval(sliderTimer);
  document.querySelector(".active").className = "slide";
  document.querySelectorAll(".slide")[indexSlide].className = "slide active";

  document.querySelector(".slide-indicator div.active").className = "";
  document.querySelectorAll(".slide-indicator div")[indexSlide].className =
    "active";
  reInitSlider();
}

$(function() {
  //Enable swiping...
  $(".fadeslider").swipe({
    //Single swipe handler for left swipes
    swipeLeft: function(event, direction, distance, duration, fingerCount) {
      showNextSlide();
    },
    //Single swipe handler for right swipes
    swipeRight: function(event, direction, distance, duration, fingerCount) {
      swipeRight();
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 2
  });
});

function testSlider() {
  indexSlide++;
  console.log("testSlider");
  console.log(".slide len=" + document.querySelectorAll(".slide").length);
  console.log(".active len=" + document.querySelectorAll(".active").length);
  console.log(
    "indexSlide className = " +
      document.querySelectorAll(".slide")[indexSlide].className
  );
  document.querySelector(".active").className = "slide" + " slide" + indexSlide;
  document.querySelectorAll(".slide")[indexSlide].className =
    "slide active" + " slide" + indexSlide;
}

window.addEventListener("load", initSlider);
// window.addEventListener("load", testSlider);

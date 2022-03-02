let rotateClockwise = document.querySelectorAll(".rotateClockwise");
let rotateAntiClockwise = document.querySelectorAll(".rotateAntiClockwise");
const about = document.querySelector(".aboutChild");

//scrolling clockwise

rotateClockwise.forEach((clockwise) => {
  document.addEventListener("scroll", () => {
    clockwise.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
  });
});

//scrolling anti-clockwise

rotateAntiClockwise.forEach((anticlockwise) => {
  document.addEventListener("scroll", () => {
    anticlockwise.style.transform =
      "rotate(" + window.pageYOffset / -2 + "deg)";
  });
});

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 3310) {
    about.classList.add("fadeIn");
  }
});

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);
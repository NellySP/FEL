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

window.addEventListener("scroll", throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

function parallax() {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector(".parallax");
  var coords = scrolled * 0.4 + "px";
  parallax.style.transform = "translateY(" + coords + ")";
}

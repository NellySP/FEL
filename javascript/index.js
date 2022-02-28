let rotateClockwise = document.querySelectorAll(".rotateClockwise");
let rotateAntiClockwise = document.querySelectorAll(".rotateAntiClockwise");

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

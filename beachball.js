"use strict";
gsap.to(".ball", { duration: 2 });
gsap.to(".ball", {
  duration: 2,
  x: 400,
  rotation: 200,
  onComplete: done,
});

function done() {
  gsap.to(".ball", { duration: 0.5, scaleY: 0.1, y: 40 });
}

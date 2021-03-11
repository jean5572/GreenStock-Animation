"use strict";
const timeline = gsap.timeline();

timeline
  .to(".ball", {
    duration: 2,
    x: 400,
    rotation: 200,
  })
  .to(".ball", {
    duration: 0.5,
    scaleY: 0.1,
    y: 40,
  })
  .to(".ball", {
    duration: 4,
    x: "100vw",
    y: "-100vh",
  });

// gsap.to(".ball", {
//   duration: 2,
//   x: 400,
//   rotation: 200,
//   onComplete: done,
// });

// function done() {
//   gsap.to(".ball", { duration: 0.5, scaleY: 0.1, y: 40 });
// }

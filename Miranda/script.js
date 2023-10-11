var t1 = gsap.timeline();

t1.to(".gsap", {
  y: "45vh",
  scale: 0.6,
  duration: 0,
});

t1.to(".gsap", {
  y: "-20vh",
  duration: 1,
  delay: 1,
});

t1.to(".gsap", {
  y: "-0vh",
  rotate: -360,
  scale: 1,
  duration: 1.2,
  stagger: 1,
});

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

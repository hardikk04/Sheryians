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

// tl.to(".gsap",{
//     y:"100vh",
//     scale:0.6,
//     duration:0
// })
// tl.to("#page1",{
//     y:"30vh",
//     duration:1,
//     delay:1
// })
// tl.to("#page1",{
//     y:"0vh",
//     rotate:360,
//     scale:1,
//     duration:0.7
// })

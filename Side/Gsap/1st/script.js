var time = gsap.timeline();

time.from("nav>img, .nav-middle>h1 , .nav-right>h1, .nav-right>button", {
  y: -100,
  opacity: 0,
  duration: 0.3,
  delay: 0.5,
  stagger: 0.2,
});

time.from(".page1-center>h1", {
  x: -100,
  opacity: 0,
  duration: 0.5,
});

time.from(".page1>img , .page1>h3", {
  opacity: 0,
  scale: 0,
  duration: 0.6,
  stagger: 0.2,
});

time.to(".page1>h3", {
  y: 15,
  duration: 0.5,
  yoyo: true,
  repeat: -1,
});

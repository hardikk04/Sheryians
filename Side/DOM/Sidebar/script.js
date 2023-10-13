var menu = document.querySelector("nav>i");
var main = document.querySelector(".main");
var exit = document.querySelector(".sidebar > h1 > i");
var sidebar = document.querySelector(".sidebar");
menu.addEventListener("click", function () {
  main.style.scale = 0.7;
  main.style.filter = "blur(1.5px)";
  main.style.transform = "translateX(250px) rotateY(-10deg) ";
  sidebar.style.display = "block";
});

exit.addEventListener("click", function () {
  main.style.scale = 1;
  main.style.filter = "blur(0px)";
  main.style.transform = "translateX(0px)";
  sidebar.style.display = "none";
  //   main.style.transform = "translateX(0px)";
});

var t1 = gsap.timeline();

t1.from("nav, .main-text", {
  opacity: 0,
  duration: 1,
  y: -100,
});

t1.from(".img-container .elem", {
  opacity: 0,
  duration: 1,
  scale: 0.5,
  stagger: 0.2,
});

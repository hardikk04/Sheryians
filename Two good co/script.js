var videocon = document.querySelector(".video-container");
var playbtn = document.querySelector(".play");

function videoanimation() {
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      opacity: 1,
      scale: 1,
    });
  });

  videocon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      opacity: 0,
      scale: 0,
    });
  });

  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x,
      top: dets.y,
    });
  });
}
videoanimation();

function loadinganimation() {
  gsap.from(".page1 h1", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3,
  });

  gsap.from(".video-container", {
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    delay: 1,
  });
}

loadinganimation();

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

var pagedown = document.querySelector(".page3-down");
var crsr = document.querySelector("#cursor");

pagedown.addEventListener("mousemove", function (dets) {
  // crsr.style.display = "block";
  crsr.style.scale = 1;
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsr.style.zIndex = 0;
});

pagedown.addEventListener("mouseleave", function (dets) {
  crsr.style.scale = 0;
});

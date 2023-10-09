var videocon = document.querySelector(".video-container");
var playbtn = document.querySelector(".play");

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoScroll();

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
}

loadinganimation();

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

function anime() {
  gsap.from(".video-container", {
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".video-container",
      scroller: ".main",
      // markers: true,
      start: "top 140%",
      end: "top 60%",
      scrub: 2,
    },
  });

  gsap.from(".page2 .elem", {
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page2 .elem",
      scroller: ".main",
      // markers: true,
      start: "top 120%",
      end: "top 90%",
      scrub: 2,
    },
  });

  gsap.from(".page3-up-left", {
    x: -200,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page3-up-left",
      scroller: ".main",
      // markers: true,
      start: "top 70%",
      end: "top 50%",
      scrub: 2,
    },
  });

  gsap.from(".page3-up-right", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page3-up-right",
      scroller: ".main",
      // markers: true,
      start: "top 70%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.from(".page3-down #child1 , .page3-down #child2", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page3-down #child1 , .page3-down #child2",
      scroller: ".main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 2,
    },
  });

  gsap.from(".page3-down #child3 , .page3-down #child4", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page3-down #child3 , .page3-down #child4",
      scroller: ".main",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub: 2,
    },
  });

  gsap.from("#page4-hr-heading h3", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page4-hr-heading h3",
      scroller: ".main",
      // markers: true,
      start: "top 70%",
      end: "top 60%",
      scrub: 2,
    },
  });

  gsap.from(".page4-heading .page4-heading-child", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page4-heading .page4-heading-child",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      end: "top 50%",
      scrub: 2,
    },
  });

  gsap.from(".page4-content", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page4-content",
      scroller: ".main",
      // markers: true,
      start: "top 60%",
      end: "top 50%",
      scrub: 2,
    },
  });

  gsap.from(".page5-left", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page5-left",
      scroller: ".main",
      // markers: true,
      start: "top 75%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from(".page5-right", {
    opacity: 0,
    x: 100,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page5-right",
      scroller: ".main",
      // markers: true,
      start: "top 75%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from("#page6-hr-heading", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page6-hr-heading",
      scroller: ".main",
      // markers: true,
      start: "top 70%",
      end: "top 60%",
      scrub: 2,
    },
  });

  gsap.from(".page6-footer-up div", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page6-footer-up div",
      scroller: ".main",
      // markers: true,
      start: "top 70%",
      end: "top 50%",
      scrub: 2,
    },
  });

  gsap.from(".page6>h3", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".page6>h3",
      scroller: ".main",
      markers: true,
      start: "top 80%",
      end: "top 70%",
      scrub: 2,
    },
  });
}

anime();

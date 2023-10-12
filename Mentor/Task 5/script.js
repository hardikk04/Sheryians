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

// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
// });

var sidebar = document.querySelector("#sidebar");
var hoverNav = document.querySelector(".nav-hover");

function sidebarHover() {
  sidebar.addEventListener("mouseover", function () {
    gsap.to(".nav-hover", {
      opacity: 1,
      duration: 0.5,
      zIndex: 1,
    });
  });

  hoverNav.addEventListener("mouseover", function () {
    gsap.to(".nav-hover", {
      opacity: 1,
      duration: 0.5,
      zIndex: 1,
    });
  });

  sidebar.addEventListener("mouseleave", function () {
    gsap.to(".nav-hover", {
      opacity: 0,
      duration: 0.2,
      zIndex: -1,
    });
  });

  hoverNav.addEventListener("mouseleave", function () {
    gsap.to(".nav-hover", {
      opacity: 0,
      duration: 0.5,
      zIndex: -1,
    });
  });
}

sidebarHover();

var t1 = gsap.timeline();

function aniAll() {
  t1.from(".page1-main>img", {
    scale: 1.2,
    duration: 1,
    delay: 0.5,
    ease: "easeInOut",
  });

  t1.from(
    ".page1-main-text>h1 , .page1-main-text>h6 , .page1-main-text>.page1-btn",
    {
      y: 50,
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.4,
      ease: "easeInOut",
    }
  );

  t1.from("nav", {
    opacity: 0,
    duration: 0.3,
    ease: "easeInOut",
  });

  gsap.from(".page2-right-text", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2-right-text",
      scroller: ".main",
      // markers: true,
      scrub: 1,
    },
  });

  t1.from(".page3>h1 , .page3>p , .page3>.page3-btn", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page3>h1 , .page3>p , .page3>page3-btn",
      scroller: ".main",
      start: "top 70%",
      end: "top 40%",
      // markers: true,
      scrub: 1,
    },
  });

  t1.from(".page3-img>img", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page3-img>img",
      scroller: ".main",
      start: "top 70%",
      end: "top 0%",
      // markers: true,
      scrub: 1,
    },
  });

  t1.from(".page4", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top 50%",
      end: "top 30%",
      // markers: true,
      scrub: 1,
    },
  });

  t1.from(".page5-down-child", {
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".page5-down-child",
      scroller: ".main",
      start: "top 60%",
      end: "top 30%",
      // markers: true,
      scrub: 1,
    },
  });

  t1.from(".page6>h1", {
    opacity: 0,
    duration: 0.5,
    y: -50,
    scrollTrigger: {
      trigger: ".page6>h1",
      scroller: ".main",
      start: "top 80%",
      end: "top 50%",
      // markers: true,
      scrub: 1,
    },
  });

  t1.from("#page9-img2, #page9-img1", {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#page9-img2, #page9-img1",
      scroller: ".main",
      start: "top 80%",
      end: "top 50%",
      // markers: true,
      scrub: 1,
    },
  });
}

aniAll();

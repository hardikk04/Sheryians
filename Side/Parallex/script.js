function loco() {
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

loco();

var t1 = gsap.timeline();

t1.to(".overlay", {
  opacity: 0,
});

t1.to(".overlay>h1", {
  opacity: 0,
});

t1.from(".page1>img", {
  opacity: 0,
  stagger: 0.5,
  duration: 1,
});

t1.from(".overlay", {
  opacity: 0,
});

t1.from(".overlay>h1", {
  opacity: 0,
  scale: 0.5,
  y: 100,
});

t1.to(".elem-img", {
  opacity: 0,
});

t1.from(".elem>h5", {
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".elem>h5",
    scroller: ".main",
    // markers: true,
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
});

t1.from(".elem-img", {
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".elem-img",
    scroller: ".main",
    // markers: true,
    start: "top 40%",
    end: "top 20%",
    scrub: 1,
  },
});

t1.from(".page2>p", {
  opacity: 0,
  duration: 1,
  x: -100,
  scrollTrigger: {
    trigger: ".elem-img",
    scroller: ".main",
    // markers: true,
    start: "top 40%",
    end: "top 20%",
    scrub: 1,
  },
});

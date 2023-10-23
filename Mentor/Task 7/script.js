function locoscroll() {
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

locoscroll();

var t1 = gsap.timeline();

t1.from(".loder-text>h1", {
  opacity: 0,
  y: 10,
  duration: 1,
  onStart: function () {
    $(".loder-text>h1").textillate({ in: { effect: "fadeInUp" } });
  },
});

t1.from(
  ".loder-img",
  1,
  {
    height: "0%",
    duration: 1,
    delay: 1,
    ease: "cubic-bezier(0.19, 1, 0.22, 1)",
  },
  1
);

t1.to(
  ".loder-text>h1",
  1,
  {
    color: "#fff",
  },
  2
);

t1.to(".loder", {
  top: "-100vh",
  duration: 1,
  delay: 0.5,
  ease: "power1.out",
});

t1.from(".page1", {
  y: 100,
  opacity: 0,
  duration: 0.5,
});

var elem1 = document.querySelector(".page4-elem1");
elem1.addEventListener("mouseenter", function () {
  gsap.to(".page4-elem1>.page4-elem-top", {
    top: "-100%",
    duration: 0.5,
  });

  gsap.to(".page4-elem1>.page4-elem-bottom", {
    top: "-100%",
    duration: 0.5,
  });
});

elem1.addEventListener("mouseleave", function () {
  gsap.to(".page4-elem1>.page4-elem-top", {
    top: "0%",
    duration: 0.5,
  });

  gsap.to(".page4-elem1>.page4-elem-bottom", {
    top: "0%",
    duration: 0.5,
  });
});

var elem2 = document.querySelector(".page4-elem2");
elem2.addEventListener("mouseenter", function () {
  gsap.to(".page4-elem2>.page4-elem-top", {
    top: "-100%",
    duration: 0.5,
  });

  gsap.to(".page4-elem2>.page4-elem-bottom", {
    top: "-100%",
    duration: 0.5,
  });
});

elem2.addEventListener("mouseleave", function () {
  gsap.to(".page4-elem2>.page4-elem-top", {
    top: "0%",
    duration: 0.5,
  });

  gsap.to(".page4-elem2>.page4-elem-bottom", {
    top: "0%",
    duration: 0.5,
  });
});

var elem3 = document.querySelector(".page4-elem3");
elem3.addEventListener("mouseenter", function () {
  gsap.to(".page4-elem3>.page4-elem-top", {
    top: "-100%",
    duration: 0.5,
  });

  gsap.to(".page4-elem3>.page4-elem-bottom", {
    top: "-100%",
    duration: 0.5,
  });
});

elem3.addEventListener("mouseleave", function () {
  gsap.to(".page4-elem3>.page4-elem-top", {
    top: "0%",
    duration: 0.5,
  });

  gsap.to(".page4-elem3>.page4-elem-bottom", {
    top: "0%",
    duration: 0.5,
  });
});

var page5 = document.querySelector(".page5");
var cursor = document.querySelector(".cursor");
page5.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursor.style.opacity = 1;
  console.log(dets);
});

page5.addEventListener("mouseleave", function (dets) {
  cursor.style.opacity = 0;
});

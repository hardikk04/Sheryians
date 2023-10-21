function locoSrcoll() {
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

locoSrcoll();

var t1 = gsap.timeline();
function animation() {
  t1.to(".nav-part1>img,.nav-part2", {
    opacity: 0,
  });

  t1.to(".intro3>video", {
    opacity: 0,
    width: "40%",
  });

  t1.from(".page1", {
    opacity: 0,
    duration: 0.5,
  });

  t1.from(".center-heading-box>h1", {
    y: 100,
    duration: 0.1,
    opacity: 0,
    onStart: function () {
      $(".center-heading-box>h1").textillate({
        in: { effect: "fadeIn", duration: 0 },
      });
    },
  });

  t1.from(".intro1", {
    scale: 0,
    duration: 0.5,
    ease: "power1.inOut",
  });

  t1.from(".intro2", {
    scale: 0,
    duration: 0.5,
    delay: 0.2,
    ease: "power1.inOut",
  });

  t1.to(".intro1", {
    scale: 0,
    duration: 0.5,
    ease: "power1.inOut",
  });

  t1.to(".intro2", {
    scale: 0,
    duration: 0.5,
    ease: "power1.inOut",
  });

  t1.from(".intro3>video", {
    scale: 0,
    opacity: 1,
  });

  t1.to(".intro3>video", {
    width: "40%",
    opacity: 1,
    duration: 0.5,
    ease: "power1.inOut",
  });

  t1.to(".intro3>video", {
    width: "100%",
    delay: 0.2,
    duration: 0.5,
    ease: "power1.inOut",
  });

  t1.to(".main, .center-heading-box > h1,.nav-part1>img,.nav-part2", {
    backgroundColor: "#e4ddd4",
    color: "#242320",
    opacity: 1,
  });
}

animation();

function imgHover() {
  var page3Left = document.querySelector(".page3-left");
  var page3Lefth3 = document.querySelector(".page3-left-dets>h3");
  var page3Lefth4 = document.querySelector(".page3-left-dets>h4");

  var flag = 1;

  page3Left.addEventListener("mouseenter", function () {
    page3Lefth3.innerHTML =
      "HOK transforms London's 10 New Bridge Street into a sustainable oasis: Atenor's bold retrofit sets new standards for urban developments.";
    page3Lefth4.style.display = "none";
    t1.from(".page3-left-dets>h3", {
      y: 50,
      opacity: 0,
      duration: 0.4,
    });
  });

  page3Left.addEventListener("mouseleave", function () {
    page3Lefth3.innerHTML = "Fleet House";
    page3Lefth4.style.display = "block";
    t1.from(".page3-left-dets>h3, .page3-left-dets>h4", {
      opacity: 0,
      y: 50,
      duration: 0.4,
      stagger: 0.1,
    });
  });

  var page3Right = document.querySelector(".page3-right");
  var page3Righth3 = document.querySelector(".page3-right-dets>h3");
  var page3Righth4 = document.querySelector(".page3-right-dets>h4");

  page3Right.addEventListener("mouseenter", function () {
    page3Righth3.innerHTML =
      "Exploring architectural essence: Drawing inspiration from Herzog and de Meuron's 'Jenga Tower' at 56 Leonard Street to craft unique marketing collateral - CGIs, brochures, and apps.";
    page3Righth4.style.display = "none";
    t1.from(".page3-right-dets>h3", {
      y: 50,
      opacity: 0,
      duration: 0.4,
    });
  });

  page3Right.addEventListener("mouseleave", function () {
    page3Righth3.innerHTML = "56 Leonard Street";
    page3Righth4.style.display = "block";
    t1.from(".page3-right-dets>h3, .page3-right-dets>h4", {
      opacity: 0,
      y: 50,
      duration: 0.4,
      stagger: 0.1,
    });
  });

  var page4Box = document.querySelector(".page4-box");
  var page4h3 = document.querySelector(".page4-dets>h3");
  var page4h4 = document.querySelector(".page4-dets>h4");

  page4Box.addEventListener("mouseenter", function () {
    page4h3.innerHTML =
      "An exemplar heritage-led scheme, featuring new homes, retail and employment spaces, all wrapped in beautiful public realm.";
    page4h4.style.display = "none";
    t1.from(".page4-dets>h3", {
      y: 50,
      opacity: 0,
      duration: 0.4,
    });
  });

  page4Box.addEventListener("mouseleave", function () {
    page4h3.innerHTML = "Faraday Works";
    page4h4.style.display = "block";
    t1.from(".page4-dets>h3, .page4-dets>h4", {
      opacity: 0,
      y: 50,
      duration: 0.4,
      stagger: 0.1,
    });
  });
}
imgHover();

function locoMotiveAnimations() {
  t1.to(".center-heading-box", {
    // opacity: 1,
    scale: 0.8,
    y: 100,
    scrollTrigger: {
      trigger: ".center-heading-box",
      scroller: ".main",
      // markers: true,
      start: "top 35%",
      end: "top 25%",
      scrub: 1,
    },
  });

  t1.to(".page1-video-main", {
    y: -200,
    scrollTrigger: {
      trigger: ".page1-video-main > video",
      scroller: ".main",
      // markers: true,
      start: "top 110%",
      end: "top 100%",
      scrub: 1,
    },
  });

  t1.from(".page2-heading>h1", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    onStart: function () {
      $(".page2-heading>h1").textillate({ in: { effect: "fadeIn" } });
    },
    scrollTrigger: {
      trigger: ".page2-heading>h1",
      scroller: ".main",
      // markers: true,
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  t1.to(".page3-left-img>img, .page3-right-img>img", {
    scale: 1.2,
    scrollTrigger: {
      trigger: ".page3-left-img>img, .page3-right-img>img",
      scroller: ".main",
      // markers: true,
      start: "top 65%",
      end: "top 0%",
      scrub: 1,
    },
  });

  t1.to(".page4-img>img", {
    scale: 1.1,
    scrollTrigger: {
      trigger: ".page4-img>img",
      scroller: ".main",
      // markers: true,
      start: "top 75%",
      end: "top 0%",
      scrub: 1,
    },
  });

  t1.from(".page5-middle>img", {
    y: -850,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".page5-middle>img",
      scroller: ".main",
      // markers: true,
      start: "top 15%",
      end: "top 5%",
      scrub: 1,
    },
  });

  t1.from(".page6-heading>h1", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    onStart: function () {
      $(".page6-heading>h1").textillate({ in: { effect: "fadeIn" } });
    },
    scrollTrigger: {
      trigger: ".page6-heading",
      scroller: ".main",
      // markers: true,
      start: "top 55%",
      end: "top 45%",
      scrub: 1,
    },
  });
}

locoMotiveAnimations();

function page5animation() {
  document.querySelector(".about").addEventListener("mousemove", function () {
    document.querySelector(".icon-div").style.padding = "0vw";
    document.querySelector(".icon-div").style.height = "1vh";
    document.querySelector(".icon-div").style.width = "1vh";
    document.querySelector(".icon-div").style.backgroundColor = "#e4ddd4";
    document.querySelector(".icon-div>i").style.opacity = "0";
  });

  document.querySelector(".about").addEventListener("mouseleave", function () {
    document.querySelector(".icon-div").style.padding = "0.8vw";
    document.querySelector(".icon-div").style.height = "6vh";
    document.querySelector(".icon-div").style.width = "6vh";
    document.querySelector(".icon-div").style.backgroundColor = "transparent";
    document.querySelector(".icon-div").style.border = "1px solid #e4ddd446";
    document.querySelector(".icon-div>i").style.opacity = "1";
  });

  var crsr = document.querySelector(".page5-cursor");

  document
    .querySelector(".page5")
    .addEventListener("mousemove", function (dets) {
      crsr.style.left = dets.x + 10 + "px";
      crsr.style.top = dets.y - 40 + "px";
      gsap.to(".page5-cursor", {
        // duration: 0.5,
        scale: 1,
      });
    });
  document.querySelector(".page5").addEventListener("mouseleave", function () {
    gsap.to(".page5-cursor", {
      // duration: 0.5,
      scale: 0,
    });
  });

  document
    .querySelector(".page5-right")
    .addEventListener("mouseenter", function () {
      gsap.to(".page5-cursor", {
        opacity: 0,
        // duration: 0.5,
      });
    });

  document
    .querySelector(".page5-right")
    .addEventListener("mouseleave", function () {
      gsap.to(".page5-cursor", {
        opacity: 1,
      });
    });
}

page5animation();

document.querySelector(".sign-up").addEventListener("mousemove", function () {
  document.querySelector(".sign-up-icon").style.height = "1vh";
  document.querySelector(".sign-up-icon").style.width = "1vh";
  document.querySelector(".sign-up-icon").style.backgroundColor = "#242320";
  document.querySelector(".sign-up-icon>i").style.opacity = "0";
});

document.querySelector(".sign-up").addEventListener("mouseleave", function () {
  document.querySelector(".sign-up-icon").style.height = "6vh";
  document.querySelector(".sign-up-icon").style.width = "6vh";
  document.querySelector(".sign-up-icon").style.backgroundColor = "transparent";
  document.querySelector(".sign-up-icon>i").style.opacity = "1";
});

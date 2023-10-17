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

var div1 = document.querySelector(".nav-right > div:nth-child(3)");
var bg = document.querySelector(".nav-right > div:nth-child(3)>.bg");

var i3 = document.querySelector(".nav-right > div:nth-child(4)>i");
var div2 = document.querySelector(".nav-right > div:nth-child(4)");

div1.addEventListener("mouseover", function () {
  bg.style.top = "0%";
});
div1.addEventListener("mouseleave", function () {
  bg.style.top = "100%";
});

div2.addEventListener("mouseover", function () {
  i3.className = "ri-play-fill";
});
div2.addEventListener("mouseleave", function () {
  i3.className = "ri-user-fill";
});

function topbar() {
  var a1 = document.querySelector(".nav-center > a:nth-child(1)");
  var hover1 = document.querySelector(".hover1");

  a1.addEventListener("mouseover", function () {
    gsap.to(".hover1", {
      top: "0%",
      duration: 0.1,
    });
  });

  hover1.addEventListener("mouseover", function () {
    gsap.to(".hover1", {
      top: "0%",
      duration: 0.1,
    });
  });

  hover1.addEventListener("mouseleave", function () {
    gsap.to(".hover1", {
      top: "-80%",
      duration: 0.1,
    });
  });

  a1.addEventListener("mouseleave", function () {
    gsap.to(".hover1", {
      top: "-80%",
      duration: 0.1,
    });
  });

  var a2 = document.querySelector(".nav-center > a:nth-child(4)");
  var hover2 = document.querySelector(".hover2");

  a2.addEventListener("mouseover", function () {
    gsap.to(".hover2", {
      top: "0%",
      duration: 0.1,
    });
  });

  hover2.addEventListener("mouseover", function () {
    gsap.to(".hover2", {
      top: "0%",
      duration: 0.1,
    });
  });

  hover2.addEventListener("mouseleave", function () {
    gsap.to(".hover2", {
      top: "-80%",
      duration: 0.1,
    });
  });

  a2.addEventListener("mouseleave", function () {
    gsap.to(".hover2", {
      top: "-80%",
      duration: 0.1,
    });
  });
}

topbar();

var t1 = gsap.timeline();

function anime() {
  t1.from(".page1", {
    duration: 1,
    opacity: 0,
    delay: 0.5,
  });

  t1.from(
    ".page1-main-left",
    1,
    {
      y: -200,
    },
    0.5
  );

  t1.from(
    ".page1-main-right",
    1,
    {
      y: 200,
    },
    0.5
  );

  gsap.from(".page2-left,.page-animation", {
    height: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".page2-left",
      scroller: ".main",
      start: "top 60%",
      end: "top 10%",
      // markers: true,
      scrub: 1,
    },
  });

  gsap.from(".page2-right>h3", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2-left",
      scroller: ".main",
      start: "top 40%",
      end: "top 10%",
      // markers: true,
      scrub: 1,
    },
  });

  gsap.from(".page3>h3", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".page3>h3",
      scroller: ".main",
      start: "top 80%",
      end: "top 50%",
      // markers: true,
      scrub: 1,
    },
  });

  gsap.from(".scroller", {
    x: -100,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".scroller",
      scroller: ".main",
      start: "top 90%",
      end: "top 80%",
      // markers: true,
      scrub: 1,
    },
  });

  gsap.from(".page5>div", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".page5>div",
      scroller: ".main",
      start: "top 60%",
      end: "top 20%",
      // markers: true,
      scrub: 1,
    },
  });

  gsap.from(
    ".page7-up>h1:nth-child(1)",
    1,
    {
      y: -100,
      scrollTrigger: {
        trigger: ".page7-up>h1:nth-child(1)",
        scroller: ".main",
        start: "top 80%",
        end: "top 60%",
        // markers: true,
        scrub: 1,
      },
    },
    0.5
  );

  t1.from(
    ".page7-up>h1:nth-child(2)",
    1,
    {
      y: 100,
      scrollTrigger: {
        trigger: ".page7-up>h1:nth-child(2)",
        scroller: ".main",
        start: "top 100%",
        end: "top 80%",
        // markers: true,
        scrub: 1,
      },
    },
    0.5
  );
}

anime();

function btnanime() {
  var icon = document.querySelector(".icon");
  var bgg = document.querySelector(".bgg");

  var sel = document.querySelector(".sel");
  var bggg = document.querySelector(".bggg");

  var pg6 = document.querySelector(".pg6");
  var bgggg = document.querySelector(".bgggg");

  icon.addEventListener("mouseover", function () {
    bgg.style.top = "0%";
  });
  icon.addEventListener("mouseleave", function () {
    bgg.style.top = "100%";
  });

  sel.addEventListener("mouseover", function () {
    bggg.style.top = "0%";
  });
  sel.addEventListener("mouseleave", function () {
    bggg.style.top = "100%";
  });

  pg6.addEventListener("mouseover", function () {
    bgggg.style.top = "0%";
  });
  pg6.addEventListener("mouseleave", function () {
    bgggg.style.top = "100%";
  });
}

btnanime();

function btnani() {
  var moveleft = document.querySelector(".page4-left");
  var btnleft = document.querySelector(".left-btn");

  moveleft.addEventListener("mousemove", function (dets) {
    if (dets.x + "px" <= "840px") {
      btnleft.style.left = dets.x + "px";
    }
  });

  moveleft.addEventListener("mouseleave", function () {
    btnleft.style.left = "50%";
    btnleft.style.transition = "all ease .5s";
  });

  var moveright = document.querySelector(".page4-right");
  var btnright = document.querySelector(".right-btn");

  moveright.addEventListener("mousemove", function (dets) {
    if (dets.x + "px" <= "1730px") {
      btnright.style.left = dets.x - 900 + "px";
    }
  });

  moveright.addEventListener("mouseleave", function () {
    btnright.style.left = "50%";
    btnright.style.transition = "all ease .5s";
  });
}

btnani();


var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 10 + "px"
    crsr.style.top = dets.y - 10 + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration : 1,
    height: "120px",
    scrollTrigger:
    {
        trigger: "#nav",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:
    {
        trigger: "#main",
        scroller:"body",
        start: "top -20%",
        end: "top -70%",
        scrub: 4,
    }
})

var all=document.querySelectorAll("#nav ul li a")
all.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid white"
        crsr.style.backgroundColor = "transparent"

    })
    element.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"

    })
})

gsap.from("#about-us,#about-us-left,#about-us-mid,#about-us-right",{
    y: 50,
    opacity: 0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 3,
    }
})
// gsap.from("#card-container,#card1,#card2,#card3",{
//     y: 50,
//     opacity: 0,
//     duration:2,
//     stagger:0.4,
//     scrollTrigger:{
//         trigger:"#card-container",
//         scroller: "body",
//         start: "top 70%",
//         end: "top 50%",
//         scrub: 2,
//     }
// })

gsap.from("#page3-main,#page3-left,#page3-right",{
    y: 50,
    opacity: 0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page3-main",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
    }
})
gsap.from("#img-up",{
    y: -70,
    x: -70,
    opacity: 0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#img-up",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
    }
})

gsap.from("#img-down",{
    y: 70,
    x: 70,
    opacity: 0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#img-up",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
    }
})

gsap.from("#uni",{
    y: 80,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#uni",
        scroller:"body",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
    }
})
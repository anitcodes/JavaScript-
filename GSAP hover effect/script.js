// JS code to move circle

// var circle = document.getElementById("circle");

// window.addEventListener("mousemove", function(dets){
//     circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
// })



// GSAP code

var circle = document.getElementById("circle");
var frame = document.querySelector(".frame");
var bg = document.querySelector("#main");

window.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .3,
        ease: Expo
    })
})

frame.addEventListener("mousemove", function(dets){
    gsap.to(circle, {
        scale: 5
    })

    gsap.to(".frame span",{
        color: "white",
        duration: .1,
        y: "-5vw"
    })
})

frame.addEventListener("mouseleave", function(dets){
    gsap.to(circle, {
        scale: 1
    })

    gsap.to(".frame span",{
        color: "rgb(231, 74, 12)",
        duration: .1,
        y: 0
    })
})



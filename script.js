// loader animation

window.addEventListener("load",()=>{
gsap.to(".loader",{
y:"-100%",
duration:1.5
})
})

// cursor glow

const cursor=document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"
})

// hero animation

gsap.from(".hero-title",{
opacity:0,
y:100,
duration:1
})

gsap.from(".hero-sub",{
opacity:0,
y:50,
delay:.5
})

// scroll animations

gsap.utils.toArray("section").forEach(section=>{

gsap.from(section,{
scrollTrigger:{
trigger:section,
start:"top 80%"
},
opacity:0,
y:100,
duration:1
})


})
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

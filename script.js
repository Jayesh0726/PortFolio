
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// Intro Page


let ti = gsap.timeline();
function time(){
    let a = 0;
  setInterval(()=>{
    a = a + Math.floor(Math.random()*20);
    if(a<100){
      document.querySelector("#loader_s h1").innerHTML = a + "%";
    }
    else{
      a = 100;
      document.querySelector("#loader_s h1").innerHTML = a + "%";
    }
  } , 150);
}
        ti.to("#loader_s h1",{
              delay: 0.5,
              duration:1,
          
              onStart:time()
          })
          ti.to("#loader_s",{
              delay:0.5,
              duration:1.5,
              top:"-100vh"
            })
 ti.from("#logo1, .menu>li, .nav_bar>.fa-solid",{
              y: -50,
              opacity: 0,
              duration: 1,
              stagger: 0.2
          })
const links = document.querySelectorAll('#navbar, .nav_bar, .menu li a');
    links.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const targetSectionId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetSectionId);
                    locoScroll.scrollTo(targetSection);
      });
  });           

ti.from("#content2>img",{ 
  scale:0.5,
  opacity:0,
  duration:0.5
})
ti.from(".content1>#name>h1, .content1>h2",{
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})
ti.from(".logo>img",{
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    
})
// About
ti.from(".content3",{
  y:100,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    trigger:".content3",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 80%",
    scrub:.2
    // markers: true
  }  
})
// Experience
ti.from(".post, .company",{
  y:20,
  opacity:0,
  duration:0.1,
  stagger:0.1,
  scrollTrigger:{
    trigger:".content4",
    scroller:"#main",
    start:"top bottom",
    end:"bottom 90%",
    scrub:.2,
    // markers: true
  }  
})

ti.from(".content4",{
  x:-100,
  opacity:0,
  duration:0.5,
  delay: 0.2,
  scrollTrigger:{
    trigger:".content4",
    scroller:"#main",
    start:"top bottom",
    end:"bottom 80%",
    scrub:.2,
    // markers: true
  }  
})

ti.from(".primg",{
  scale:0.5,
  opacity:0,
  stagger:0.5,
  duration:0.5,
  scrollTrigger:{
    trigger:".primg",
    scroller:"#main",
    start:"top 90%",
    end:"bottom top",
    scrub:.2,
  }  
})

ti.from(".title1",{
  y:50,
  opacity:0,
  duration:0.5,
  delay:0.2,
  scrollTrigger:{
    trigger:".title1",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 80%",
    scrub:.2,
  }  
})
ti.from(".description1",{
  x:-50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:".description1",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 65%",
    scrub:.2,
  }  
})

ti.from(".title2",{
  y:50,
  opacity:0,
  duration:0.5,
  delay:0.2,
  scrollTrigger:{
    trigger:".title2",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 80%",
    scrub:.2,
  }  
})

ti.from(".description2",{
  x:50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:".description2",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 65%",
    scrub:.2,
  }  
})

ti.from(".title3",{
  y:50,
  opacity:0,
  duration:0.5,
  delay:0.2,
  scrollTrigger:{
    trigger:".title3",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 80%",
    scrub:.2,
  }  
})

ti.from(".description3",{
  x:-50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:".description3",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 65%",
    scrub:.2,
  }  
})

ti.from(".collName1",{
  x:-50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:".collName1",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 80%",
    scrub:.2,
  }  
})

ti.from(".stream1",{
  x:-50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:".stream1",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 80%",
    scrub:.2,
  }  
})

ti.from(".collName2",{
  x:-50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:".collName2",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 80%",
    scrub:.2,
  }  
})

ti.from(".stream2",{
  x:-50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:".stream2",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 80%",
    scrub:.2,
  }  
})

ti.from(".collName3",{
  x:-50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:".collName3",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 80%",
    scrub:.2,
  }  
})

ti.from(".stream3",{
  x:-50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  scrollTrigger:{
    trigger:".stream3",
    scroller:"#main",
    start:"top 90%",
    end:"bottom 80%",
    scrub:.2,
  }  
})

ti.from(".linklogo",{
  scale:0.5,
  opacity:0,
  duration:0.5,
  delay:0.5,
  stagger:0.3,
  scrollTrigger:{
    trigger:".linklogo",
    scroller:"#main",
    start:"top bottom",
    end:"bottom 80%",
    scrub:.2,
  }  
})

ti.to(".cv2>i",{
    y:7,
    yoyo:true,
    repeat:-1,
    duration:1
})

let menu = document.getElementsByClassName("menu")[0];

function openmenu(){
  menu.style.right = "0px";
}
function closemenu(){
  menu.style.right = "-200px"
}
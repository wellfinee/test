gsap.registerPlugin(ScrollTrigger);

const windowElement = document.querySelector('.window');

const horisontal = gsap.to(windowElement, {
  x: -(windowElement.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: true,
    start: "top top",
    end: () => "+=" + (windowElement.scrollWidth - window.innerWidth),
    invalidateOnRefresh: true,
  }
})

gsap.from(".anim", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".anim",
    start: "left center",
    end: "right start",
    scrub: true,
    containerAnimation: horisontal,
  }
})

window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});
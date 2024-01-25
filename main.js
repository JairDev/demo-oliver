const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
Splitting();

const split = Splitting({
  target: "[data-opacity-text]",
  by: "chars",
});

// console.log(split);

// // gsap.to("[data-hover-text]", { x: 600, duration: 2.5 });

const tl = gsap.timeline({
  ease: "none",
  scrollTrigger: {
    trigger: "[data-content-video]",
    start: "top -=50",
    end: "bottom -=1000",
    pin: true,
    scrub: 2,
    // markers: true,
  },
});

tl.from("[data-wrapper-videos]", {
  scale: 2.7,
  opacity: 0,
  duration: 3,
});
tl.to(
  "[data-layer-top]",
  {
    scaleY: 2.1,
    duration: 1,
  },
  "-=1"
);
tl.to(
  "[data-layer-bottom]",
  {
    scaleY: 3,
    duration: 1,
  },
  "-=1"
);
split.forEach((element) => {
  tl.from(
    element.chars,
    {
      opacity: 0,
      stagger: 0.05,
    },
    "-=2.5"
  );
});

split.forEach((element) => {
  // console.log(element.chars);
  tl.to(
    element.chars,
    {
      opacity: 0,
      ease: "none",
      stagger: 0.05,
    },
    "-=2"
  );
});

tl.from(
  "[data-video-2]",
  {
    duration: 0.5,
    // ease: "expoScale(0.5,7,none)",
    xPercent: 100,
  },
  "-=0.5"
);
tl.fromTo(
  "[data-video-small]",
  {
    duration: 1,
    width: "90%",
  },
  {
    duration: 1,
    width: "40%",
  }
);

// tl.to("[data-video-big]", {
//   duration: 1,
//   // ease: "expoScale(0.5,7,none)",
//   // xPercent: 100,
//   width: "60%",
// });

tl.to(
  "[data-content-video-footer]",
  {
    duration: 0.4,
    y: -180,
  },
  "-=1.5"
);

console.log("hola gsap");

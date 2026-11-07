
gsap.timeline().fromTo(
  "#adlab-image-logo",
  {
    x: -1200,
    y: -400,
    scale: 0.5,
    rotation: -20,
    skewX: 235,
    skewY: -115,
    autoAlpha: 0,
  },
  {
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    skewX: 0,
    skewY: 0,
    autoAlpha: 1,
    duration: 4.5,
    ease: "power3.out",
  },
);

gsap.fromTo(
  "#adlab-white-letter-a",
  {
    x: "100vw",
    rotation: 360,
    autoAlpha: 0,
  },
  {
    x: 0,
    rotation: 0,
    autoAlpha: 1,
    duration: 2.5,
    ease: "power3.out",
  },
);

function flipLetterA() {
  gsap.to("#adlab-white-letter-a", {
    rotationX: "+=360",
    duration: 1.2,
    ease: "power2.inOut",
    transformOrigin: "50% 50%",
    overwrite: "auto",
  });
}

const headlineTL = gsap.timeline({
  repeat: -1,
  delay: 5,
});
headlineTL
  .to("#adlab-headline", {
    autoAlpha: 0,
    duration: 1,
    onStart: flipLetterA,
  })
  .to(
    "#adlab-headline-2",
    {
      autoAlpha: 1,
      duration: 1,
    },
    "<",
  )

  // Hold headline 2 for five seconds
  .to({}, { duration: 5 })

  .to("#adlab-headline-2", {
    autoAlpha: 0,
    duration: 1,
    onStart: flipLetterA,
  })
  .to(
    "#adlab-headline",
    {
      autoAlpha: 1,
      duration: 1,
    },
    "<",
  )

  // Hold headline 1 for five seconds
  .to({}, { duration: 5 });
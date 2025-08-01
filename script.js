const play_btn = document.getElementById("play-btn");
const pause_btn = document.getElementById("pause-btn");
const reverse_btn = document.getElementById("reverse-btn");

// const duration=0.8;
// let delay=0.6;

// // const tl=gsap.timeline({duration:0.5});

// //first step
// gsap.to("#card-3",{rotateY:-180,transformOrigin:"left",duration,delay})
// gsap.to("#card-6",{rotateY:-180,transformOrigin:"left",duration,delay})
// gsap.to("#card-9",{rotateY:-180,transformOrigin:"left",duration,delay})

// //step two
// delay+=duration;
// gsap.set("#card-3",{visibility:"hidden",delay})
// gsap.set("#card-2 img", {
//   attr: { src: "./images/rect1.png" },delay:delay-0.1
// });
// gsap.set("#card-6",{visibility:"hidden",delay})
// gsap.set("#card-5 img", {
//   attr: { src: "./images/rect1.png" },delay:delay-0.1
// });
// gsap.set("#card-9",{visibility:"hidden",delay})
// gsap.set("#card-8 img", {
//   attr: { src: "./images/rect1.png" },delay:delay-0.1
// });

// //step-3
// delay+=duration;
// gsap.to("#card-2",{transformOrigin:"left",rotateY:-180,duration,delay})
// gsap.to("#card-5",{transformOrigin:"left",rotateY:-180,duration,delay})
// gsap.to("#card-8",{transformOrigin:"left",rotateY:-180,duration,delay})

// //step-4
// delay+=duration;
// gsap.set("#card-2",{visibility:"hidden",delay})
// gsap.set("#card-1 img", {
//   attr: { src: "./images/rect1.png" },delay:delay-0.1
// });
// gsap.set("#card-5",{visibility:"hidden",delay})
// gsap.set("#card-4 img", {
//   attr: { src: "./images/rect1.png" },delay:delay-0.1
// });
// gsap.set("#card-8",{visibility:"hidden",delay})
// gsap.set("#card-7 img", {
//   attr: { src: "./images/rect1.png" },delay:delay-0.1
// });

// //step-5
// delay+=duration;
// gsap.to("#card-1",{transformOrigin:"bottom",rotateX:-180,duration,delay})
// delay+=duration;
// gsap.to("#card-7",{transformOrigin:"top",rotateX:180,duration,delay})

const duration = 0.6;
const tl = gsap.timeline({ paused: true });

// Step 1: Rotate cards 3, 6, 9
tl.to("#card-3", { rotateY: -180, transformOrigin: "left", duration }, 0.6)
  .to("#card-6", { rotateY: -180, transformOrigin: "left", duration }, 0.6)
  .to("#card-9", { rotateY: -180, transformOrigin: "left", duration }, 0.6)

  // Step 2: Hide cards and change images
  .set("#card-3", { visibility: "hidden" }, 1.2)
  .set("#card-2 img", { attr: { src: "./images/rect1.png" } }, 1.1)
  .set("#card-6", { visibility: "hidden" }, 1.2)
  .set("#card-5 img", { attr: { src: "./images/rect1.png" } }, 1.1)
  .set("#card-9", { visibility: "hidden" }, 1.2)
  .set("#card-8 img", { attr: { src: "./images/rect1.png" } }, 1.1)

  // Step 3: Rotate cards 2, 5, 8
  .to("#card-2", { transformOrigin: "left", rotateY: -180, duration }, 1.8)
  .to("#card-5", { transformOrigin: "left", rotateY: -180, duration }, 1.8)
  .to("#card-8", { transformOrigin: "left", rotateY: -180, duration }, 1.8)

  // Step 4: Hide cards and change images
  .set("#card-2", { visibility: "hidden" }, 2.4)
  .set("#card-1 img", { attr: { src: "./images/rect1.png" } }, 2.3)
  .set("#card-5", { visibility: "hidden" }, 2.4)
  .set("#card-4 img", { attr: { src: "./images/rect1.png" } }, 2.3)
  .set("#card-8", { visibility: "hidden" }, 2.4)
  .set("#card-7 img", { attr: { src: "./images/rect1.png" } }, 2.3)

  // Step 5: Rotate remaining cards
  .to("#card-1", { transformOrigin: "bottom", rotateX: -180, duration }, 3.0)
  .to("#card-7", { transformOrigin: "top", rotateX: 180, duration }, 3.6);

play_btn.addEventListener("click", () => tl.play());
pause_btn.addEventListener("click", () => tl.pause());
reverse_btn.addEventListener("click", () => tl.reverse());

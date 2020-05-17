var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0.2,
    duration: "200%" // this works just fine with duration 0 as well
    // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
    // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
  },
});

// get all slides
var slides = document.querySelectorAll("section");

// create scene for every slide

for (var i=0; i<slides.length; i++) {
  new ScrollMagic.Scene({
      triggerElement: slides[i],
    })
    .setPin(slides[i], {pushFollowers: false})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
}

// var controller = new ScrollMagic.Controller();

// 		// define movement of panels
// 		var wipeAnimation = new TimelineMax()
// 			.fromTo("#section-1", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
// 			.fromTo("#section-2",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
// 			.fromTo("#section-3", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

// 		// create scene to pin and link animation
// 		new ScrollMagic.Scene({
// 				triggerElement: "body",
// 				triggerHook: "onLeave",
// 				duration: "300%"
// 			})
// 			.setPin("body")
// 			.setTween(wipeAnimation)
// 			.addIndicators() // add indicators (requires plugin)
// 			.addTo(controller);

// const controller = new ScrollMagic.Controller({
//   globalSceneOptions: {
//     triggerHook: 'onLeave',
//     duration: "200%" // this works just fine with duration 0 as well
//     // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
//     // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
//   }
// });

// var slides = document.querySelectorAll("section");

// for (var i=0; i<slides.length; i++) {
//   new ScrollMagic.Scene({
//       triggerElement: slides[i]
//     })
//     .setPin(slides[i], {pushFollowers: false})
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);
// }

// const controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({triggerElement: "#section-2", duration: 300})
// 								.setPin("#section-2")
// 								.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
// 								.addTo(controller);
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0.2,
    duration: "200%"
  },
});

var slides = document.querySelectorAll("section");

for (var i=0; i<slides.length; i++) {
  new ScrollMagic.Scene({
      triggerElement: slides[i],
    })
    .setPin(slides[i], {pushFollowers: false})
    .addTo(controller);
}

const controller2 =  new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0.3
  }
});

new ScrollMagic.Scene({
  triggerElement: "#section-3",
  offset: -150,
  duration: "80%",
})
.setClassToggle("#section-3-big", "visible")
.addTo(controller2);

new ScrollMagic.Scene({
  triggerElement: "#section-3",
  duration: "80%",
})
.setClassToggle("#section-3-video", "visible")
.addTo(controller2);

new ScrollMagic.Scene({
  triggerElement: "#section-4",
  offset: -150,
  duration: "80%",
})
.setClassToggle("#section-4-big", "visible")
.addTo(controller2);

new ScrollMagic.Scene({
  triggerElement: "#section-4",
  duration: "80%",
})
.setClassToggle("#contact-form", "visible")
.addTo(controller2);
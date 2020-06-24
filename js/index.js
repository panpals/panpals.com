// // document.querySelectorAll("a").forEach(link => {
// //   // console.log(link);
// //   // console.log("h");
// //   link.onclick = e => {
// //     const navbar = document.getElementsByClassName("navbar")[0];
// //     const navbarHeight = navbar.clientHeight;

// //     let top;

// //     if(link.innerHTML == "Home") {
// //       top = document.getElementById("section-1").getBoundingClientRect().top;
// //     } else if(link.innerHTML == "About Us") {
// //       top = document.getElementById("section-2").getBoundingClientRect().top;
// //     }

// //     window.scrollTo(0, top + window.pageYOffset - navbarHeight);
// //   }
// // });

// var controller = new ScrollMagic.Controller({
//   globalSceneOptions: {
//     triggerHook: 0.2,
//     duration: "200%"
//   },
// });

// var slides = document.querySelectorAll("section");

// for (var i=0; i<slides.length; i++) {
//   new ScrollMagic.Scene({
//       triggerElement: slides[i],
//     })
//     .setPin(slides[i], {pushFollowers: false})
//     .addTo(controller);
// }

// const controller2 =  new ScrollMagic.Controller({
//   globalSceneOptions: {
//     triggerHook: 0.3
//   }
// });

// new ScrollMagic.Scene({
//   triggerElement: "#section-2",
//   offset: -150,
//   duration: "80%",
// })
// .setClassToggle("#section-2-big", "visible")
// .addTo(controller2);

// new ScrollMagic.Scene({
//   triggerElement: "#section-2",
//   duration: "80%",
// })
// .setClassToggle(".section-2-text", "visible")
// .addTo(controller2);

// new ScrollMagic.Scene({
//   triggerElement: "#section-2",
//   duration: "80%",
// })
// .setClassToggle("#get-in-touch", "visible")
// .addTo(controller2);

// new ScrollMagic.Scene({
//   triggerElement: "#section-2",
//   duration: "80%",
// })
// .setClassToggle(".section-2-button", "visible")
// .addTo(controller2);

// new ScrollMagic.Scene({
//   triggerElement: "#section-3",
//   offset: -150,
//   duration: "80%",
// })
// .setClassToggle("#section-3-big", "visible")
// .addTo(controller2);

// new ScrollMagic.Scene({
//   triggerElement: "#section-3",
//   duration: "80%",
// })
// .setClassToggle("#section-3-text", "visible")
// .addTo(controller2);

// new ScrollMagic.Scene({
//   triggerElement: "#section-4",
//   offset: -150,
//   duration: "80%",
// })
// .setClassToggle("#section-4-big", "visible")
// .addTo(controller2);

// new ScrollMagic.Scene({
//   triggerElement: "#section-4",
//   duration: "80%",
// })
// .setClassToggle("#contact-form", "visible")
// .addTo(controller2);

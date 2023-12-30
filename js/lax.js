/* ======================== parallax ============================================*/
$(document).ready(function(){

  //Init ScrollMagic. Tells browser to use scroll bar and trigger animation
  var controller = new ScrollMagic.Controller();

	//pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
   	duration: '45%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);



  //  ===========================parallax scene


   var parallaxTl = new TimelineMax();
   parallaxTl
      .from('.content-wrapper', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg', 2, {y: '-30%', ease:Power0.easeNone}, 0)
      ;

   var slideParallaxScene = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax',
     triggerHook: 1,
     duration: '100%'
   })
   .setTween(parallaxTl)
   .addTo(controller);

   var parallaxTl2 = new TimelineMax();
   parallaxTl2
      .from('.content-wrapper2', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg2', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene2 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax2',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl2)
   .addTo(controller);

   var parallaxTl3 = new TimelineMax();
   parallaxTl3
      .from('.content-wrapper3', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg3', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene3 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax3',
     triggerHook: 3,
     duration: '100%'
   })
   .setTween(parallaxTl3)
   .addTo(controller);

   var parallaxTl4 = new TimelineMax();
   parallaxTl4
      .from('.content-wrapper4', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg4', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene4 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax4',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl4)
   .addTo(controller);

   var parallaxTl5 = new TimelineMax();
   parallaxTl5
      .from('.content-wrapper5', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg5', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene5 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax5',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl5)
   .addTo(controller);

   var parallaxTl6 = new TimelineMax();
   parallaxTl6
      .from('.content-wrapper6', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg6', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene6 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax6',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl6)
   .addTo(controller);

   var parallaxTl7 = new TimelineMax();
   parallaxTl7
      .from('.content-wrapper7', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg7', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene7 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax7',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl7)
   .addTo(controller);

   var parallaxTl8 = new TimelineMax();
   parallaxTl8
      .from('.content-wrapper8', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg8', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene8 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax8',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl8)
   .addTo(controller);

   var parallaxTl9 = new TimelineMax();
   parallaxTl9
      .from('.content-wrapper9', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg9', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene9 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax9',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl9)
   .addTo(controller);

   var parallaxTl10 = new TimelineMax();
   parallaxTl10
      .from('.content-wrapper10 ', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg10 ', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene10 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax10',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl10)
   .addTo(controller);

   var parallaxTl11 = new TimelineMax();
   parallaxTl11
      .from('.content-wrapper11', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg11 ', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene11 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax11',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl11)
   .addTo(controller);

   var parallaxTl12 = new TimelineMax();
   parallaxTl12
      .from('.content-wrapper12', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg12 ', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene12 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax12',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl12)
   .addTo(controller);

   var parallaxTl13 = new TimelineMax();
   parallaxTl13
      .from('.content-wrapper13', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg13', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene13 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax13',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl13)
   .addTo(controller);

   var parallaxTl14 = new TimelineMax();
   parallaxTl14
      .from('.content-wrapper14', 1.5, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from('.bcg14', 2, {y: '-30%', ease:Power0.easeNone}, 1)
      ;

   var slideParallaxScene14 = new ScrollMagic.Scene({
     triggerElement: '.bcg-parralax14',
     triggerHook: 2,
     duration: '100%'
   })
   .setTween(parallaxTl14)
   .addTo(controller);



  //animation is always defined in a scene
  //build a scene
  var ourScene = new ScrollMagic.Scene({
    //options for scenes are always defined inside curly brackets
    //define trigger elements
    triggerElement: '#project01',
    triggerHook: 0.9
  })
  //chain setclass toggle method. Change class on project01
  .setClassToggle('#project01', 'fade-in') //add class to project01
  .addTo(controller);
});

// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// You can use a ScrollTrigger in a tween or timeline



// Caja: mover con scroll
var ani_x = gsap.to(".girl_dog", {

   x: 600,
   y: 300,
   duration: 5,
  scale:2,
 
  scrollTrigger: {
    trigger: ".girl_dog",
    start: "top 100",
    end: "top -=300px",
    scrub: true,
    markers: true,
    id: "dog"
  } 
  
});

// Caja: mover con scroll
var ani_x = gsap.to(".girl_bike", {

   x: 300,
   y: 300,
  scale: 2,
  
   duration: 5,
  
  scrollTrigger: {
    trigger: ".girl_bike",
    start: "top 100",
    end: "top -=300px",
    scrub: true,
    markers: true,
    id: "bike"
  } 
  
});


/********* SONIDO ************/

//  *****+ BUTTON mute - unmute 
const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

const audio1 = document.querySelector("#audio1");
const audio2 = document.querySelector("#audio2");
const audio3 = document.querySelector("#audio3");

const audio4 = document.querySelector("#audio4");



button.addEventListener("click", () => {
  if (audio.paused) {
    audio1.volume = 0.0;
    audio1.play(); 
     audio2.volume = 0.0;
    audio2.play(); 
     audio3.volume = 0.0;
    audio3.play(); 
     audio4.volume = 0.0;
    audio4.play(); 
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    
  } else {
    audio1.pause(); 
    audio2.pause(); 
    audio3.pause(); 
    audio4.pause(); 
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});





/**** audiofade function ****/

 $(function() {
        var audio1 = new AudioFade('#audio1', 10, 600, 150).init();
        var audio2 = new AudioFade('#audio2', 300, 600, 100).init();
       var audio3 = new AudioFade('#audio3', 600, 900,100).init();
   var audio4 = new AudioFade('#audio4', 900, 1200, 200).init();
     });

/**** GSAP  effects *****/
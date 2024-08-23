// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
// video funciton
function playVideo() {
    var video = document.getElementById("myVideo");
    video.currentTime = 0;  // Reset video to start
    video.play();
}

function resetVideo() {
    var video = document.getElementById("myVideo");
    video.pause();          // Pause the video
    video.currentTime = 0;  // Reset video to start
}
// 
// 
function playVideoA() {
    var video = document.getElementById("myVideoA");
    video.currentTime = 0;  // Reset video to start
    video.play();
}

function resetVideoA() {
    var video = document.getElementById("myVideo3A");
    video.pause();          // Pause the video
    video.currentTime = 0;  // Reset video to start
}
// 
// 
function playVideoB() {
    var video = document.getElementById("myVideoB");
    video.currentTime = 0;  // Reset video to start
    video.play();
}

function resetVideoB() {
    var video = document.getElementById("myVideoB");
    video.pause();          // Pause the video
    video.currentTime = 0;  // Reset video to start
}
// swiper js
// swiper js
// swiper js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 35,
    loop: true,
    autoplay: {
        delay: 1000,
    },
    speed: 2000,
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
        
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


var tl = gsap.timeline()
tl.from(".loader h2",{
    x: 60,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
})
tl.to(".loader h2",{
    opacity: 0,
    x: -60,
    duration: 1,
    stagger: 0.1,
})
tl.to(".loader",{
    opacity: 0,
    
    
})
tl.to(".loader",{
  
    display: "none"
    
})


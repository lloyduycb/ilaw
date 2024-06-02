const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
    init: function () {
        const videos = document.querySelectorAll('video');
        const activeIndex = this.realIndex;
        const activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
        const activeVideo = activeSlide.getElementsByTagName('video')[0];    
        activeVideo.muted = false;
        Array.prototype.forEach.call(videos, function(video){
            video.pause();
            video.currentTime = 0;
        })
        activeVideo.play();
        },
        slideChange: function () {
        const videos = document.querySelectorAll('video');
        const activeIndex = this.realIndex;
        const activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
        const activeVideo = activeSlide.getElementsByTagName('video')[0];    
        activeVideo.muted = false;
        Array.prototype.forEach.call(videos, function(video){
            video.pause();
            video.currentTime = 0;
        })
        activeVideo.play();
    }
}
});
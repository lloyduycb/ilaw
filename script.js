document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    video.currentTime = 9; // Set the starting time to 9 seconds

    video.addEventListener('timeupdate', function() {
        if (video.currentTime < 9) {
            video.currentTime = 9; // Ensure video starts at 9 seconds
        }
    });
});
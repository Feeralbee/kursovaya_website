function stop() {
    var video = document.getElementById("dog");
    var btn = document.getElementById("stop_btn");
    if (video.paused) {
        video.play();
        btn.innerHTML = "Пауза";
    } else {
        video.pause();
        btn.innerHTML = "Воспроизведение";
    }
}
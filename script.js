const audio = document.getElementById('audio');
const play = document.getElementById('play');
const time = document.getElementById('time');

play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        play.textContent = 'Ⅱ';
    } else {
        audio.pause();
        play.textContent = '▶';
    }
});

audio.addEventListener('timeupdate', () => {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);

    time.textContent =
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');
});

audio.addEventListener('ended', () => {
    play.textContent = '▶';
    time.textContent = '00:00';
});
window.onload = function() {
    const music = document.getElementById('backgroundMusic');
    music.volume = 0.2;
    music.play();

    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
        alert('Game started!');
    });
}

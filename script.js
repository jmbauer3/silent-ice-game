window.onload = function() {
    const music = document.getElementById('backgroundMusic');
    const startButton = document.getElementById('start-button');
    const mainMenu = document.getElementById('main-menu');

    music.volume = 0.2;
    music.play();

    startButton.addEventListener('click', () => {
        mainMenu.style.display = 'none';
        document.body.style.backgroundColor = 'black';
    });
}

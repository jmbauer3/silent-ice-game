window.onload = function() {
    const music = document.getElementById('backgroundMusic');
    const startButton = document.getElementById('start-button');
    const mainMenu = document.getElementById('main-menu');

    // Ensure the music plays when the page loads
    music.volume = 0.2;
    music.play().catch(error => {
        console.error('Failed to play music:', error);
        // Handle autoplay policy restriction by user interaction
        startButton.addEventListener('click', () => {
            music.play();
            mainMenu.style.display = 'none';
            document.body.style.backgroundImage = "url('assets/images/bubbles.png')";
        });
    });

    // Ensure the button click changes the background image
    startButton.addEventListener('click', () => {
        mainMenu.style.display = 'none';
        document.body.style.backgroundImage = "url('assets/images/bubbles.png')";
    });
}

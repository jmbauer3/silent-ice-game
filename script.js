window.onload = function() {
    const music = document.getElementById('backgroundMusic');
    const images = [
        'assets/images/image1.jpg',
        'assets/images/image2.jpg',
        'assets/images/image3.jpg'
    ];
    let currentImageIndex = 0;

    // Function to change background image
    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    }

    // Set initial background image
    document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;

    // Change background image every 10 seconds
    setInterval(changeBackgroundImage, 10000);

    // Ensure the music plays when the page loads
    music.volume = 0.2;
    music.play().catch(error => {
        console.error('Failed to play music automatically:', error);
        // Handle autoplay policy restriction by user interaction
        document.body.addEventListener('click', () => {
            music.play();
        }, { once: true });
    });
}

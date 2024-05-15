window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    // Background music
    const music = document.getElementById('backgroundMusic');
    music.volume = 0.2;
    music.play();

    // Game variables
    const iceColor = '#A9C9FF';
    const tensionNoiseColor = '#C1DFF0';
    let tensionLevel = 0;

    // Function to draw the ice landscape
    function drawIce() {
        ctx.fillStyle = iceColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Function to simulate tension (like fridge noise)
    function addTensionNoise() {
        ctx.fillStyle = tensionNoiseColor;
        for (let i = 0; i < tensionLevel; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            ctx.fillRect(x, y, 2, 2);
        }
    }

    // Main game loop
    function gameLoop() {
        drawIce();
        addTensionNoise();
        requestAnimationFrame(gameLoop);
    }

    // Start the game loop
    gameLoop();

    // Increase tension over time
    setInterval(() => {
        tensionLevel += 10;
        if (tensionLevel > 1000) tensionLevel = 1000; // Cap the tension level
    }, 1000);
}

window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // DOM elements
    const startScreen = document.getElementById('start-screen');
    const gameContainer = document.getElementById('game-container');
    const winScreen = document.getElementById('win-screen');
    const gameOverScreen = document.getElementById('game-over-screen');
    const music = document.getElementById('backgroundMusic');

    // Buttons
    const startButton = document.getElementById('start-button');
    const playAgainWin = document.getElementById('play-again-win');
    const shareWin = document.getElementById('share-win');
    const playAgainGameOver = document.getElementById('play-again-game-over');
    const shareGameOver = document.getElementById('share-game-over');

    // Game variables
    const iceColor = '#A9C9FF';
    const tensionNoiseColor = '#C1DFF0';
    let tensionLevel = 0;
    let iceSamples = 0;
    let oxygen = 100; // Oxygen level
    let gameOver = false;
    let monsterCaught = false;

    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    music.volume = 0.2;
    music.play();

    function showElement(element) {
        element.classList.remove('hidden');
    }

    function hideElement(element) {
        element.classList.add('hidden');
    }

    function startGame() {
        iceSamples = 0;
        oxygen = 100;
        tensionLevel = 0;
        gameOver = false;
        monsterCaught = false;
        hideElement(startScreen);
        hideElement(winScreen);
        hideElement(gameOverScreen);
        showElement(gameContainer);
        gameLoop();
    }

    function endGame(win) {
        gameOver = true;
        hideElement(gameContainer);
        if (win) {
            showElement(winScreen);
        } else {
            showElement(gameOverScreen);
        }
    }

    function drawIce() {
        ctx.fillStyle = iceColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function addTensionNoise() {
        ctx.fillStyle = tensionNoiseColor;
        for (let i = 0; i < tensionLevel; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            ctx.fillRect(x, y, 2, 2);
        }
    }

    function gameLoop() {
        if (gameOver) return;

        drawIce();
        addTensionNoise();

        // Game logic
        oxygen -= 0.1; // Decrease oxygen over time
        if (oxygen <= 0 || monsterCaught) {
            endGame(false);
        } else if (iceSamples >= 10) {
            endGame(true);
        }

        // Increase tension over time
        tensionLevel += 1;
        if (tensionLevel > 1000) tensionLevel = 1000;

        requestAnimationFrame(gameLoop);
    }

    // Event listeners
    startButton.addEventListener('click', startGame);
    playAgainWin.addEventListener('click', startGame);
    playAgainGameOver.addEventListener('click', startGame);

    shareWin.addEventListener('click', () => {
        alert("Share this game with your friends!");
    });
    shareGameOver.addEventListener('click', () => {
        alert("Share this game with your friends!");
    });
}

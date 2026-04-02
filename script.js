let score = 0;
let highScore = 0;
let time = 10;
let gameRunning = false;

function startGame() {
    score = 0;
    time = 10;
    gameRunning = true;

    document.getElementById("score").innerText = score;
    document.getElementById("time").innerText = time;

    let timer = setInterval(function() {
        time--;
        document.getElementById("time").innerText = time;

        if (time <= 0) {
            clearInterval(timer);
            gameRunning = false;

            if (score > highScore) {
                highScore = score;
                document.getElementById("high").innerText = highScore;
            }

            alert("Game Over! Your Score: " + score);
        }
    }, 1000);
}

function increase() {
    if (gameRunning) {
        score++;
        document.getElementById("score").innerText = score;

        // random background color
        document.body.style.backgroundColor =
            "rgb(" + Math.floor(Math.random()*255) + "," +
                     Math.floor(Math.random()*255) + "," +
                     Math.floor(Math.random()*255) + ")";
    }
}
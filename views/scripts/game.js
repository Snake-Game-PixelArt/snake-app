class Game {
    constructor() {
        this.newGame();
    }

    endGame() {
        this.ended_at = new Date().getTime();

        let lastGames = JSON.parse(
            localStorage.getItem("games") ||
            sessionStorage.getItem("games") ||
            JSON.stringify([])
        );

        lastGames.push({
            started_at: game.started_at,
            ended_at: game.ended_at,
            score: game.snake.total
        });

        localStorage.setItem("games", JSON.stringify(lastGames));
        sessionStorage.setItem("games", JSON.stringify(lastGames));

        document.getElementById("gameEndOptions").style.height = "100%";
        document.getElementById("gameEnded_bestscore").innerText = Math.max(
            ...lastGames.map(g => g.score)
        );
        document.getElementById("gameEnded_score").innerText = this.snake.total;
        document.getElementById("gameEnded_time").innerText = formatTimeDifference(
            this.started_at,
            this.ended_at
        );
    }

    newGame() {
        document.getElementById("gameEndOptions").style.height = "0%";
        clearBoard();
        this.snake = new Snake();
        this.apple = new Apple();
        this.started_at = null;
        this.ended_at = null;
    }
}

let game = new Game();

document.getElementById("newGame").addEventListener("click", () => {
    game.newGame();
});

window.addEventListener("keydown", function (ev) {
    if (game.snake.dead) return;
    if (game.snake.directionChanged) {
        if (game.snake.directionBuffer[game.snake.directionBuffer.length - 1] !==
            ev.code
        ) {
            game.snake.directionBuffer.push(ev.code);
        }
        return;
    }
    game.snake.changeDirection(ev.code);
});

function update() {
    clearBoard();
    game.snake.update();
    game.apple.update();
    pixelsGrid.style.boxShadow = pixelsGridView
        .map(pb => pb.pixelBox)
        .join(",");


    if (game.snake.directionBuffer.length > 0) {
        game.snake.changeDirection(game.snake.directionBuffer.shift())
    } else {
        game.snake.directionChanged = false;
    }
}

setInterval(update, 130);
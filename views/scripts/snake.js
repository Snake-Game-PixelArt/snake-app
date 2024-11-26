class Snake {
    constructor() {
        this.x = pixelsGridView[Math.floor(pixelsGridView.length / 2)].cords[0];
        this.y = pixelsGridView[Math.floor(pixelsGridView.length / 2)].cords[1];
        this.speedX = 0;
        this.speedY = 0;
        this.total = 0;
        this.tail = [];
        this.dead = false;
        this.directionChanged = false;
        this.directionBuffer = [];
        this.firstMove = false;
    }

    checkDead() {
        if (this.dead) return;
        if (
            this.x + this.speedX >= gridBoxes ||
            this.x + this.speedX < 0 ||
            this.y + this.speedY >= gridBoxes ||
            this.y + this.speedY < 0 ||
            this.tail.map(([x, y]) => this.x === x && this.y === y).includes(true)
        ) {
            this.speedX = 0;
            this.speedY = 0;
            this.dead = true;
            game.endGame();
        }
    }

    checkApple() {
        if (
            this.x + this.speedX == game.apple.x &&
            this.y + this.speedY == game.apple.y
        ) {
            game.apple.newRandSpot(this.tail);
            this.total++;
        }
    }

    changeDirection(code) {
        this.directionChanged = true;
        if (!this.firstMove) {
            game.started_at = new Date().getTime();
            this.firstMove = true;
        }
        switch (code) {
            case "ArrowUp":
                if (this.speedY != 1) {
                    this.speedY = -1;
                    this.speedX = 0;
                }
                break;
            case "ArrowDown":
                if (this.speedY != 1) {
                    this.speedY = 1;
                    this.speedX = 0;
                }
                break;
            case "ArrowLeft":
                if (this.speedX != 1) {
                    this.speedY = 0;
                    this.speedX = -1;
                }
                break;
            case "ArrowRight":
                if (this.speedX != 1) {
                    this.speedY = 0;
                    this.speedX = 1;
                }
                break;
        }
    }

    update() {
        this.checkDead();

        if ((this.speedX != 0 || this.speedY != 0) && this.dead !== true) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }

            this.tail[this.total - 1] = [this.x, this.y];
            this.checkApple();

            // Velocity
            this.x += this.speedX;
            this.y += this.speedY;
        }

        for (let i = 0; i < this.tail.length; i++) {
            changePixelColor(
                pixelsGridView.findIndex(
                    pb => pb.cords[0] == this.tail[i][0] && pb.cords[1] == this.tail[i][1]
                ),
                COLORS.SNAKE
            );
        }

        changePixelColor(
            pixelsGridView.findIndex(
                pb => pb.cords[0] == this.x && pb.cords[1] == this.y
            ),
            COLORS.SNAKE
        );
    }
}
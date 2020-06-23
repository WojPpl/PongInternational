class Player {
    constructor(gameWidth, gameHeight) {
        this.width = 100;
        this.height = 20;
        this.position = {
          x: gameWidth / 2 - this.width / 2,
          y: gameHeight - this.height - 20
        };
        this.speed = 10;
        this.direction = 0;
        this.gameWidth = gameWidth;
    }

    draw(context) {
        context.fillStyle = "#ffffff";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    moveLeft() {
        this.direction = -this.speed;
    }

    moveRight() {
        this.direction = this.speed;
    }

    stop() {
        this.direction = 0;
    }

    update() {
        this.position.x += this.direction;
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
    }
}

export default Player
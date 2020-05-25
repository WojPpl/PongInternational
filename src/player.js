class Player {
    constructor(gameWidth, gameHeight) {
        this.width = 20;
        this.height = 100;
        this.position = {
          x: gameWidth - 30,
          y: gameHeight/2 - this.height/2
        };
        this.speed = 10;
        this.direction = 0;
    }

    draw(context) {
        context.fillStyle = "#0ff";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    moveUp() {
        this.direction = -this.speed;
    }

    moveDown() {
        this.direction = this.speed;
    }

    stop() {
        this.direction = 0;
    }

    update(timeChange) {
        if(!timeChange) return;
        this.position.y += this.direction;
        if(this.position.y < 0) this.position.y = 0;
        if(this.position.y > 500) this.position.y = 500;
    }
}

export default Player
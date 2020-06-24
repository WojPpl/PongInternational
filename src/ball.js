export default class Ball {
    constructor(gameWidth, gameHeight, player) {
        this.image = document.getElementById("ball");
        this.position = {x: 475, y: 290};
        this.speed = {x: 2, y: 2};
        this.size = 20;
        this.gameWidth = gameWidth - this.size;
        this.gameHeight = gameHeight - this.size;
        this.player = player;
    }
    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
    reset() {
        this.position = {x: 475, y: 290};
    }
    update(lives, aliens, context) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        aliens.map(alien => {if (alien.position.y === this.position.y) {alien.visible = false;}; alien.draw(context)});
        if(this.position.x > this.gameWidth || this.position.x < 0) {
            this.speed.x = -(this.speed.x) ;
        };

        if(this.position.y < 0) {
            this.speed.y = -(this.speed.y);
        }

        let ballBottom = this.position.y + this.size;
        let playerTop = this.player.position.y;
        let playerLeft = this.player.position.x;
        let playerRight = this.player.position.x + this.player.width;

        if (ballBottom >= playerTop && this.position.x >= playerLeft && this.position.x + this.size <= playerRight) {
            this.speed.x += 1;
            this.speed.y += 1;
            this.speed.y = -this.speed.y;
        }

        if(this.position.y > this.gameHeight) {
            this.reset();
            this.speed = {x: 2, y: 2};
            return lives - 1
        }

        return {lives: lives}
    }
}
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
    playSound(url){
        let audio = document.createElement('audio');
        audio.style.display = "none";
        audio.src = url;
        audio.autoplay = true;
        audio.onended = function(){
            audio.remove() //Remove when played.
        };
        document.body.appendChild(audio);
    }
    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
    update() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x > this.gameWidth || this.position.x < 0) {
            this.speed.x = -(this.speed.x) ;
        };

        if(this.position.y > this.gameHeight|| this.position.y < 0) {
            this.speed.y = -(this.speed.y);
        }

        let ballBottom = this.position.y + this.size;
        let playerTop = this.player.position.y;
        let playerLeft = this.player.position.x;
        let playerRight = this.player.position.x + this.player.width;

        if (ballBottom >= playerTop && this.position.x >= playerLeft && this.position.x + this.size <= playerRight) {
            this.speed.y = -this.speed.y;
            this.position.y = this.player.position.y - this.size;
            setTimeout(() => {
                this.playSound("src/sounds/hit.wav");
            }, 500)
        }
    }
}
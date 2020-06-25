class Alien {

    constructor(position) {
        this.image = document.getElementById("alien");
        this.position = position;
        this.width = 50;
        this.height = 47;
        this.visible = true;
    }

    update(x,y) {
        if (x >= this.position.x && x <= this.position.x + this.width && y >= this.position.y && y<= this.position.y + this.height) {
            this.visible = false;
        }
    }

    draw(context) {
        this.visible && context.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
}

export default Alien
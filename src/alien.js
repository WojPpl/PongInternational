class Alien {

    constructor(position) {
        this.image = document.getElementById("alien");
        this.position = position;
        this.width = 50;
        this.height = 47;
        this.visible = true;
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
class Block {
    constructor(options) {
        this.game = options.game;
        this.x = options.x;
        this.y = options.y;
        this.ctx = options.ctx
        this.color = Block.getRandomColor(Block.COLORS);
        this.dims = Block.DIMS;
        this.vel = 0;
    }

    static DIMS = 50;
    static COLORS = ["#FF0000", "#00FF00", "#0000FF"];
    static GRAVITY = 0.0005;

    static getRandomColor(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * this.dims, this.y * this.dims, this.dims, this.dims);
    }

    update() {
        // floor collision
        const blockBottom = this.y + 1;
        const floor = this.game.dimY;

        if (blockBottom <= floor) {
            this.y += this.vel;
            this.vel += Block.GRAVITY;
        } else {
            this.vel = 0;
            this.y = floor;
        }

        // if (!this.game.checkCollision(this)) {
        //     this.y += this.vel;
        //     this.vel += Block.GRAVITY;
        // } else {
        //     this.vel = 0
        // }
    }
    
    animate(ctx) {
        this.update();
        this.draw(ctx);
    }

    bounds() {
        return {
            top: this.y,
            bottom: (this.y + 1)
        }
    }
}

export default Block;
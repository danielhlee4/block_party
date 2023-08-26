class Block {
    constructor(options) {
        this.x = options.x;
        this.y = options.y;
        this.dimensions = Block.DIMS;
        this.color = options.color;
        this.ctx = options.ctx
    }

    static DIMS = 50;

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.dimensions, this.dimensions);
    }
}

export default Block;
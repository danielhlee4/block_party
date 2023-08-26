class Block {
    constructor(options) {
        this.x = options.x;
        this.y = options.y;
        this.ctx = options.ctx
        this.color = Block.getRandomColor(Block.COLORS);
        this.dims = Block.DIMS;
    }

    static DIMS = 50;
    static COLORS = ["#FF0000", "#00FF00", "#0000FF"];

    static getRandomColor(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * this.dims, this.y * this.dims, this.dims, this.dims);
    }
}

export default Block;
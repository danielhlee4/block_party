import Block from "./block.js";

class Game {
    constructor(ctx) {
        this.ctx;
        this.blocks = this.createMatrix(Game.NUM_COLS);

        this.addBlocks();
    }

    static NUM_COLS = 5;
    static NUM_HEIGHT = 5; // how many blocks high a column can stack
    static DIM_X = 250;
    static DIM_Y = 250;
    static BG_COLOR = "#708090";

    createMatrix(cols) {
        const matrix = [];
        for (let i = 0; i < cols; i++) {
            const col = [];
            matrix.push(col);
        }
        return matrix;
    }

    add(col) {
        this.blocks[col].push(new Block({game: this}))
    }

    addBlocks() {
        this.blocks.forEach((col) => {
            for (let i = 0; i < Game.NUM_HEIGHT; i++) {
                this.add(i);
            }
        })
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = Game.BG_COLOR;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.blocks.flat().forEach((block) => {
            block.draw(ctx);
        })
    }
}
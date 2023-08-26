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

    add(col_idx, x, y) {
        this.blocks[col_idx].push(new Block({ game: this, x: x, y: y }))
    }

    addBlocks() {
        this.blocks.forEach((col, col_idx) => {
            for (let stack = 0; stack < Game.NUM_HEIGHT; stack++) {
                let x = col_idx;
                let y = stack;
                this.add(col_idx, x, y);
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

export default Game;
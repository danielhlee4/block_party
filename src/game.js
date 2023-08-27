import Block from "./block.js";

class Game {
    constructor(ctx, canvas) {
        this.ctx;
        this.canvas = canvas;
        this.blocks = this.createMatrix(Game.NUM_COLS);

        this.addBlocks();

        this.canvas.addEventListener('click', this.handleCanvasClick.bind(globalThis));
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

    add(colIdx, x, y) {
        this.blocks[colIdx].push(new Block({ game: this, x: x, y: y }))
    }

    addBlocks() {
        this.blocks.forEach((col, colIdx) => {
            for (let stack = 0; stack < Game.NUM_HEIGHT; stack++) {
                let x = colIdx;
                let y = stack;
                this.add(colIdx, x, y);
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

    handleCanvasClick(event) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const clickedBlock = this.findBlockAt(mouseX, mouseY);
        if (clickedBlock) {
            this.removeBlock(clickedBlock);
            // draw new blocks above corresponding column
        }
    }

    
}

export default Game;
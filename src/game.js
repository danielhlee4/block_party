import Block from "./block.js";

class Game {
    constructor(ctx) {
        this.ctx;
        this.blocks = this.createMatrix(5);
    }

    createMatrix(cols) {
        const matrix = [];
        for (let i = 0; i < cols; i++) {
            const col = [];
            matrix.push(col);
        }
        return matrix;
    }
}
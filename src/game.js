import { forEach } from "core-js/core/array";
import Block from "./block.js";

class Game {
    constructor(ctx) {
        this.ctx;
        this.blocks = this.createMatrix(Game.NUM_COLS);

        this.addBlocks();
    }

    static NUM_COLS = 5;
    static NUM_HEIGHT = 5; // how many blocks high a column can be

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
}
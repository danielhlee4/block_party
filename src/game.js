import Block from "./block.js";

class Game {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.blocks = this.createMatrix(Game.NUM_COLS);
        this.dimY = Game.NUM_HEIGHT;

        this.addBlocks();

        this.canvas.addEventListener('click', this.handleCanvasClick.bind(this));
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
        this.blocks[colIdx].push(new Block({
            game: this,
            x: x,
            y: y
        }));
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

        console.log("Mouse Click Coordinates:", mouseX, mouseY);

        const clickedBlock = this.findBlockAt(mouseX, mouseY);
        if (clickedBlock) {
            console.log("Clicked Block:", clickedBlock);
            this.removeContiguousBlocks(clickedBlock);
            this.draw(this.ctx);
        }
    }

    findBlockAt(x, y) {
        const colIndex = Math.floor(x / Block.DIMS);
        const rowIndex = Math.floor(y / Block.DIMS);

        if (colIndex < 0 || colIndex >= Game.NUM_COLS || rowIndex < 0 || rowIndex >= Game.NUM_HEIGHT) {
            return null;
        }

        for (const block of this.blocks.flat()) {
            if (block.x === colIndex && block.y === rowIndex) {
                console.log("Find Block At:", block)
                return block;
            }
        }

        return null;
    }

    removeBlock(x, y) {
        const col = this.blocks[x];
        // temporarily replacing the populated block with a placeholder
        if (col && col[y]) {
            col.splice(y, 1);
        }
    }

    // Function uses DFS to remove contiguous blocks
    removeContiguousBlocks(startBlock) {
        const stack = [];
        const visited = new Set();
        const blocksToRemove = [];
    
        stack.push(startBlock);
    
        while (stack.length > 0) {
            const block = stack.pop();
            const neighbors = this.getNeighbors(block);
    
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor) && neighbor.color === startBlock.color) {
                    stack.push(neighbor);
                    visited.add(neighbor);
                }
            }
    
            visited.add(block);
            blocksToRemove.push(block);
        }
    
        if (blocksToRemove.length > 1) {
            blocksToRemove.forEach(block => {
                this.removeBlock(block.x, block.y);
            });
        }
    }

    getNeighbors(block) {
        const neighbors = [];

        const directions = [
            { dx: 0, dy: -1 }, // N
            { dx: 0, dy: 1 }, // S
            { dx: 1, dy: 0 }, // E
            { dx: -1, dy: 0 }, // W
        ];

        for (const dir of directions) {
            const newX = block.x + dir.dx;
            const newY = block.y + dir.dy;

            if (this.validPosition(newX, newY)) {
                const neighbor = this.blocks[newX][newY];
                neighbors.push(neighbor);
            }
        }

        return neighbors;
    }

    validPosition(x, y) {
        return x >= 0 && x < Game.NUM_COLS && y >= 0 && y < Game.NUM_HEIGHT;
    }

    animate() {
        this.ctx.clearRect (0, 0, Game.DIM_X, Game.DIM_Y);
        this.blocks.flat().forEach((block) => {
            block.animate(this.ctx);
        });

        requestAnimationFrame(this.animate.bind(this));
    }

    // checkCollision(block) {
    //     const colIdx = block.x;
    //     const currentBlockBounds = block.bounds();

    //     const blocksInSameCol = this.blocks[colIdx];

    //     for (const otherBlock of blocksInSameCol) {
    //         if (otherBlock !== block) {
    //             const otherBlockBounds = otherBlock.bounds();

    //             if (
    //                 currentBlockBounds.bottom > otherBlockBounds.top &&
    //                 currentBlockBounds.top < otherBlockBounds.bottom
    //             ) {
    //                 return true;
    //             }
    //         }
    //     }

    //     return false;
    // }
}

export default Game;
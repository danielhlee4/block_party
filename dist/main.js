/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Block {\n  constructor(options) {\n    this.game = options.game;\n    this.x = options.x;\n    this.y = options.y;\n    this.ctx = options.ctx;\n    this.color = Block.getRandomColor(Block.COLORS);\n    this.dims = Block.DIMS;\n    this.vel = 0;\n  }\n  static DIMS = 50;\n  static COLORS = [\"#FF0000\", \"#00FF00\", \"#0000FF\"];\n  static GRAVITY = 0.0005;\n  static getRandomColor(arr) {\n    const randomIndex = Math.floor(Math.random() * arr.length);\n    return arr[randomIndex];\n  }\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.x * this.dims, this.y * this.dims, this.dims, this.dims);\n  }\n  update() {\n    // floor collision\n    const blockBottom = this.y + 1;\n    const floor = this.game.dimY;\n    if (blockBottom <= floor) {\n      this.y += this.vel;\n      this.vel += Block.GRAVITY;\n    } else {\n      this.vel = 0;\n      this.y = floor;\n    }\n\n    // if (!this.game.checkCollision(this)) {\n    //     this.y += this.vel;\n    //     this.vel += Block.GRAVITY;\n    // } else {\n    //     this.vel = 0\n    // }\n  }\n\n  animate(ctx) {\n    this.update();\n    this.draw(ctx);\n  }\n  bounds() {\n    return {\n      top: this.y,\n      bottom: this.y + 1\n    };\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Block);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2suanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLEtBQUssQ0FBQztFQUNSQyxXQUFXQSxDQUFDQyxPQUFPLEVBQUU7SUFDakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0MsSUFBSTtJQUN4QixJQUFJLENBQUNDLENBQUMsR0FBR0YsT0FBTyxDQUFDRSxDQUFDO0lBQ2xCLElBQUksQ0FBQ0MsQ0FBQyxHQUFHSCxPQUFPLENBQUNHLENBQUM7SUFDbEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0ksR0FBRztJQUN0QixJQUFJLENBQUNDLEtBQUssR0FBR1AsS0FBSyxDQUFDUSxjQUFjLENBQUNSLEtBQUssQ0FBQ1MsTUFBTSxDQUFDO0lBQy9DLElBQUksQ0FBQ0MsSUFBSSxHQUFHVixLQUFLLENBQUNXLElBQUk7SUFDdEIsSUFBSSxDQUFDQyxHQUFHLEdBQUcsQ0FBQztFQUNoQjtFQUVBLE9BQU9ELElBQUksR0FBRyxFQUFFO0VBQ2hCLE9BQU9GLE1BQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO0VBQ2pELE9BQU9JLE9BQU8sR0FBRyxNQUFNO0VBRXZCLE9BQU9MLGNBQWNBLENBQUNNLEdBQUcsRUFBRTtJQUN2QixNQUFNQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdKLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDO0lBQzFELE9BQU9MLEdBQUcsQ0FBQ0MsV0FBVyxDQUFDO0VBQzNCO0VBRUFLLElBQUlBLENBQUNkLEdBQUcsRUFBRTtJQUNOQSxHQUFHLENBQUNlLFNBQVMsR0FBRyxJQUFJLENBQUNkLEtBQUs7SUFDMUJELEdBQUcsQ0FBQ2dCLFFBQVEsQ0FBQyxJQUFJLENBQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDTSxJQUFJLEVBQUUsSUFBSSxDQUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDSyxJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJLENBQUM7RUFDOUU7RUFFQWEsTUFBTUEsQ0FBQSxFQUFHO0lBQ0w7SUFDQSxNQUFNQyxXQUFXLEdBQUcsSUFBSSxDQUFDbkIsQ0FBQyxHQUFHLENBQUM7SUFDOUIsTUFBTVksS0FBSyxHQUFHLElBQUksQ0FBQ2QsSUFBSSxDQUFDc0IsSUFBSTtJQUU1QixJQUFJRCxXQUFXLElBQUlQLEtBQUssRUFBRTtNQUN0QixJQUFJLENBQUNaLENBQUMsSUFBSSxJQUFJLENBQUNPLEdBQUc7TUFDbEIsSUFBSSxDQUFDQSxHQUFHLElBQUlaLEtBQUssQ0FBQ2EsT0FBTztJQUM3QixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNELEdBQUcsR0FBRyxDQUFDO01BQ1osSUFBSSxDQUFDUCxDQUFDLEdBQUdZLEtBQUs7SUFDbEI7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0o7O0VBRUFTLE9BQU9BLENBQUNwQixHQUFHLEVBQUU7SUFDVCxJQUFJLENBQUNpQixNQUFNLENBQUMsQ0FBQztJQUNiLElBQUksQ0FBQ0gsSUFBSSxDQUFDZCxHQUFHLENBQUM7RUFDbEI7RUFFQXFCLE1BQU1BLENBQUEsRUFBRztJQUNMLE9BQU87TUFDSEMsR0FBRyxFQUFFLElBQUksQ0FBQ3ZCLENBQUM7TUFDWHdCLE1BQU0sRUFBRyxJQUFJLENBQUN4QixDQUFDLEdBQUc7SUFDdEIsQ0FBQztFQUNMO0FBQ0o7QUFFQSwrREFBZUwsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLzAxX2pzX2Jsb2Nrcy8uL3NyYy9ibG9jay5qcz83NDY0Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJsb2NrIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG9wdGlvbnMuZ2FtZTtcbiAgICAgICAgdGhpcy54ID0gb3B0aW9ucy54O1xuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgICAgIHRoaXMuY3R4ID0gb3B0aW9ucy5jdHhcbiAgICAgICAgdGhpcy5jb2xvciA9IEJsb2NrLmdldFJhbmRvbUNvbG9yKEJsb2NrLkNPTE9SUyk7XG4gICAgICAgIHRoaXMuZGltcyA9IEJsb2NrLkRJTVM7XG4gICAgICAgIHRoaXMudmVsID0gMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgRElNUyA9IDUwO1xuICAgIHN0YXRpYyBDT0xPUlMgPSBbXCIjRkYwMDAwXCIsIFwiIzAwRkYwMFwiLCBcIiMwMDAwRkZcIl07XG4gICAgc3RhdGljIEdSQVZJVFkgPSAwLjAwMDU7XG5cbiAgICBzdGF0aWMgZ2V0UmFuZG9tQ29sb3IoYXJyKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBhcnJbcmFuZG9tSW5kZXhdO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54ICogdGhpcy5kaW1zLCB0aGlzLnkgKiB0aGlzLmRpbXMsIHRoaXMuZGltcywgdGhpcy5kaW1zKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIC8vIGZsb29yIGNvbGxpc2lvblxuICAgICAgICBjb25zdCBibG9ja0JvdHRvbSA9IHRoaXMueSArIDE7XG4gICAgICAgIGNvbnN0IGZsb29yID0gdGhpcy5nYW1lLmRpbVk7XG5cbiAgICAgICAgaWYgKGJsb2NrQm90dG9tIDw9IGZsb29yKSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWw7XG4gICAgICAgICAgICB0aGlzLnZlbCArPSBCbG9jay5HUkFWSVRZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52ZWwgPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gZmxvb3I7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAoIXRoaXMuZ2FtZS5jaGVja0NvbGxpc2lvbih0aGlzKSkge1xuICAgICAgICAvLyAgICAgdGhpcy55ICs9IHRoaXMudmVsO1xuICAgICAgICAvLyAgICAgdGhpcy52ZWwgKz0gQmxvY2suR1JBVklUWTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMudmVsID0gMFxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIFxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgIH1cblxuICAgIGJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcDogdGhpcy55LFxuICAgICAgICAgICAgYm90dG9tOiAodGhpcy55ICsgMSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2s7Il0sIm5hbWVzIjpbIkJsb2NrIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiZ2FtZSIsIngiLCJ5IiwiY3R4IiwiY29sb3IiLCJnZXRSYW5kb21Db2xvciIsIkNPTE9SUyIsImRpbXMiLCJESU1TIiwidmVsIiwiR1JBVklUWSIsImFyciIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZHJhdyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidXBkYXRlIiwiYmxvY2tCb3R0b20iLCJkaW1ZIiwiYW5pbWF0ZSIsImJvdW5kcyIsInRvcCIsImJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/block.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.js */ \"./src/block.js\");\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.blocks = this.createMatrix(Game.NUM_COLS);\n    this.dimY = Game.NUM_HEIGHT;\n    this.addBlocks();\n    this.canvas.addEventListener('click', this.handleCanvasClick.bind(this));\n  }\n  static NUM_COLS = 5;\n  static NUM_HEIGHT = 5; // how many blocks high a column can stack\n  static DIM_X = 250;\n  static DIM_Y = 250;\n  static BG_COLOR = \"#708090\";\n  createMatrix(cols) {\n    const matrix = [];\n    for (let i = 0; i < cols; i++) {\n      const col = [];\n      matrix.push(col);\n    }\n    return matrix;\n  }\n  add(colIdx, x, y) {\n    this.blocks[colIdx].push(new _block_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      game: this,\n      x: x,\n      y: y\n    }));\n  }\n  addBlocks() {\n    this.blocks.forEach((col, colIdx) => {\n      for (let stack = 0; stack < Game.NUM_HEIGHT; stack++) {\n        let x = colIdx;\n        let y = stack;\n        this.add(colIdx, x, y);\n      }\n    });\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.blocks.flat().forEach(block => {\n      block.draw(ctx);\n    });\n  }\n  handleCanvasClick(event) {\n    const rect = this.canvas.getBoundingClientRect();\n    const mouseX = event.clientX - rect.left;\n    const mouseY = event.clientY - rect.top;\n    console.log(\"Mouse Click Coordinates:\", mouseX, mouseY);\n    const clickedBlock = this.findBlockAt(mouseX, mouseY);\n    if (clickedBlock) {\n      console.log(\"Clicked Block:\", clickedBlock);\n      this.removeContiguousBlocks(clickedBlock);\n      this.draw(this.ctx);\n    }\n  }\n  findBlockAt(x, y) {\n    const colIndex = Math.floor(x / _block_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIMS);\n    const rowIndex = Math.floor(y / _block_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIMS);\n    if (colIndex < 0 || colIndex >= Game.NUM_COLS || rowIndex < 0 || rowIndex >= Game.NUM_HEIGHT) {\n      return null;\n    }\n    for (const block of this.blocks.flat()) {\n      if (block.x === colIndex && block.y === rowIndex) {\n        console.log(\"Find Block At:\", block);\n        return block;\n      }\n    }\n    return null;\n  }\n  removeBlock(x, y) {\n    const col = this.blocks[x];\n    // temporarily replacing the populated block with a placeholder\n    if (col && col[y]) {\n      col.splice(y, 1);\n    }\n  }\n\n  // Function uses DFS to remove contiguous blocks\n  removeContiguousBlocks(startBlock) {\n    const stack = [];\n    const visited = new Set();\n    const blocksToRemove = [];\n    stack.push(startBlock);\n    while (stack.length > 0) {\n      const block = stack.pop();\n      const neighbors = this.getNeighbors(block);\n      for (const neighbor of neighbors) {\n        if (!visited.has(neighbor) && neighbor.color === startBlock.color) {\n          stack.push(neighbor);\n          visited.add(neighbor);\n        }\n      }\n      visited.add(block);\n      blocksToRemove.push(block);\n    }\n    if (blocksToRemove.length > 1) {\n      blocksToRemove.forEach(block => {\n        this.removeBlock(block.x, block.y);\n      });\n    }\n  }\n  getNeighbors(block) {\n    const neighbors = [];\n    const directions = [{\n      dx: 0,\n      dy: -1\n    },\n    // N\n    {\n      dx: 0,\n      dy: 1\n    },\n    // S\n    {\n      dx: 1,\n      dy: 0\n    },\n    // E\n    {\n      dx: -1,\n      dy: 0\n    } // W\n    ];\n\n    for (const dir of directions) {\n      const newX = block.x + dir.dx;\n      const newY = block.y + dir.dy;\n      if (this.validPosition(newX, newY)) {\n        const neighbor = this.blocks[newX][newY];\n        neighbors.push(neighbor);\n      }\n    }\n    return neighbors;\n  }\n  validPosition(x, y) {\n    return x >= 0 && x < Game.NUM_COLS && y >= 0 && y < Game.NUM_HEIGHT;\n  }\n  animate() {\n    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.blocks.flat().forEach(block => {\n      block.animate(this.ctx);\n    });\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  // checkCollision(block) {\n  //     const colIdx = block.x;\n  //     const currentBlockBounds = block.bounds();\n\n  //     const blocksInSameCol = this.blocks[colIdx];\n\n  //     for (const otherBlock of blocksInSameCol) {\n  //         if (otherBlock !== block) {\n  //             const otherBlockBounds = otherBlock.bounds();\n\n  //             if (\n  //                 currentBlockBounds.bottom > otherBlockBounds.top &&\n  //                 currentBlockBounds.top < otherBlockBounds.bottom\n  //             ) {\n  //                 return true;\n  //             }\n  //         }\n  //     }\n\n  //     return false;\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQ3pDLElBQUksQ0FBQzJDLFFBQVEsQ0FBQztNQUM1QjtJQUNKO0lBRUEsT0FBT0YsU0FBUztFQUNwQjtFQUVBVyxhQUFhQSxDQUFDakQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaEIsT0FBT0QsQ0FBQyxJQUFJLENBQUMsSUFBSUEsQ0FBQyxHQUFHdkIsSUFBSSxDQUFDTSxRQUFRLElBQUlrQixDQUFDLElBQUksQ0FBQyxJQUFJQSxDQUFDLEdBQUd4QixJQUFJLENBQUNRLFVBQVU7RUFDdkU7RUFFQWlFLE9BQU9BLENBQUEsRUFBRztJQUNOLElBQUksQ0FBQ3ZFLEdBQUcsQ0FBQzJCLFNBQVMsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFN0IsSUFBSSxDQUFDYSxLQUFLLEVBQUViLElBQUksQ0FBQ2MsS0FBSyxDQUFDO0lBQ2pELElBQUksQ0FBQ1YsTUFBTSxDQUFDNEIsSUFBSSxDQUFDLENBQUMsQ0FBQ04sT0FBTyxDQUFFTyxLQUFLLElBQUs7TUFDbENBLEtBQUssQ0FBQ3dDLE9BQU8sQ0FBQyxJQUFJLENBQUN2RSxHQUFHLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBRUZ3RSxxQkFBcUIsQ0FBQyxJQUFJLENBQUNELE9BQU8sQ0FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNsRDs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtBQUNKOztBQUVBLCtEQUFlWixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDFfanNfYmxvY2tzLy4vc3JjL2dhbWUuanM/N2RlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2sgZnJvbSBcIi4vYmxvY2suanNcIjtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IHRoaXMuY3JlYXRlTWF0cml4KEdhbWUuTlVNX0NPTFMpO1xuICAgICAgICB0aGlzLmRpbVkgPSBHYW1lLk5VTV9IRUlHSFQ7XG5cbiAgICAgICAgdGhpcy5hZGRCbG9ja3MoKTtcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2FudmFzQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIE5VTV9DT0xTID0gNTtcbiAgICBzdGF0aWMgTlVNX0hFSUdIVCA9IDU7IC8vIGhvdyBtYW55IGJsb2NrcyBoaWdoIGEgY29sdW1uIGNhbiBzdGFja1xuICAgIHN0YXRpYyBESU1fWCA9IDI1MDtcbiAgICBzdGF0aWMgRElNX1kgPSAyNTA7XG4gICAgc3RhdGljIEJHX0NPTE9SID0gXCIjNzA4MDkwXCI7XG5cbiAgICBjcmVhdGVNYXRyaXgoY29scykge1xuICAgICAgICBjb25zdCBtYXRyaXggPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IFtdO1xuICAgICAgICAgICAgbWF0cml4LnB1c2goY29sKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgIH1cblxuICAgIGFkZChjb2xJZHgsIHgsIHkpIHtcbiAgICAgICAgdGhpcy5ibG9ja3NbY29sSWR4XS5wdXNoKG5ldyBCbG9jayh7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLFxuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFkZEJsb2NrcygpIHtcbiAgICAgICAgdGhpcy5ibG9ja3MuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHN0YWNrID0gMDsgc3RhY2sgPCBHYW1lLk5VTV9IRUlHSFQ7IHN0YWNrKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGNvbElkeDtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHN0YWNrO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGNvbElkeCwgeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IEdhbWUuQkdfQ09MT1I7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcblxuICAgICAgICB0aGlzLmJsb2Nrcy5mbGF0KCkuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgICAgIGJsb2NrLmRyYXcoY3R4KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDYW52YXNDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IG1vdXNlWCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IG1vdXNlWSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdXNlIENsaWNrIENvb3JkaW5hdGVzOlwiLCBtb3VzZVgsIG1vdXNlWSk7XG5cbiAgICAgICAgY29uc3QgY2xpY2tlZEJsb2NrID0gdGhpcy5maW5kQmxvY2tBdChtb3VzZVgsIG1vdXNlWSk7XG4gICAgICAgIGlmIChjbGlja2VkQmxvY2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZCBCbG9jazpcIiwgY2xpY2tlZEJsb2NrKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29udGlndW91c0Jsb2NrcyhjbGlja2VkQmxvY2spO1xuICAgICAgICAgICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRCbG9ja0F0KHgsIHkpIHtcbiAgICAgICAgY29uc3QgY29sSW5kZXggPSBNYXRoLmZsb29yKHggLyBCbG9jay5ESU1TKTtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBNYXRoLmZsb29yKHkgLyBCbG9jay5ESU1TKTtcblxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IGNvbEluZGV4ID49IEdhbWUuTlVNX0NPTFMgfHwgcm93SW5kZXggPCAwIHx8IHJvd0luZGV4ID49IEdhbWUuTlVNX0hFSUdIVCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuYmxvY2tzLmZsYXQoKSkge1xuICAgICAgICAgICAgaWYgKGJsb2NrLnggPT09IGNvbEluZGV4ICYmIGJsb2NrLnkgPT09IHJvd0luZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaW5kIEJsb2NrIEF0OlwiLCBibG9jaylcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZW1vdmVCbG9jayh4LCB5KSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuYmxvY2tzW3hdO1xuICAgICAgICAvLyB0ZW1wb3JhcmlseSByZXBsYWNpbmcgdGhlIHBvcHVsYXRlZCBibG9jayB3aXRoIGEgcGxhY2Vob2xkZXJcbiAgICAgICAgaWYgKGNvbCAmJiBjb2xbeV0pIHtcbiAgICAgICAgICAgIGNvbC5zcGxpY2UoeSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB1c2VzIERGUyB0byByZW1vdmUgY29udGlndW91cyBibG9ja3NcbiAgICByZW1vdmVDb250aWd1b3VzQmxvY2tzKHN0YXJ0QmxvY2spIHtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICAgICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgYmxvY2tzVG9SZW1vdmUgPSBbXTtcbiAgICBcbiAgICAgICAgc3RhY2sucHVzaChzdGFydEJsb2NrKTtcbiAgICBcbiAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSB0aGlzLmdldE5laWdoYm9ycyhibG9jayk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5laWdoYm9yIG9mIG5laWdoYm9ycykge1xuICAgICAgICAgICAgICAgIGlmICghdmlzaXRlZC5oYXMobmVpZ2hib3IpICYmIG5laWdoYm9yLmNvbG9yID09PSBzdGFydEJsb2NrLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobmVpZ2hib3IpO1xuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkLmFkZChuZWlnaGJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdmlzaXRlZC5hZGQoYmxvY2spO1xuICAgICAgICAgICAgYmxvY2tzVG9SZW1vdmUucHVzaChibG9jayk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKGJsb2Nrc1RvUmVtb3ZlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGJsb2Nrc1RvUmVtb3ZlLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQmxvY2soYmxvY2sueCwgYmxvY2sueSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE5laWdoYm9ycyhibG9jaykge1xuICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSBbXTtcblxuICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0gW1xuICAgICAgICAgICAgeyBkeDogMCwgZHk6IC0xIH0sIC8vIE5cbiAgICAgICAgICAgIHsgZHg6IDAsIGR5OiAxIH0sIC8vIFNcbiAgICAgICAgICAgIHsgZHg6IDEsIGR5OiAwIH0sIC8vIEVcbiAgICAgICAgICAgIHsgZHg6IC0xLCBkeTogMCB9LCAvLyBXXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChjb25zdCBkaXIgb2YgZGlyZWN0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgbmV3WCA9IGJsb2NrLnggKyBkaXIuZHg7XG4gICAgICAgICAgICBjb25zdCBuZXdZID0gYmxvY2sueSArIGRpci5keTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRQb3NpdGlvbihuZXdYLCBuZXdZKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5laWdoYm9yID0gdGhpcy5ibG9ja3NbbmV3WF1bbmV3WV07XG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobmVpZ2hib3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5laWdoYm9ycztcbiAgICB9XG5cbiAgICB2YWxpZFBvc2l0aW9uKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgR2FtZS5OVU1fQ09MUyAmJiB5ID49IDAgJiYgeSA8IEdhbWUuTlVNX0hFSUdIVDtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QgKDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuICAgICAgICB0aGlzLmJsb2Nrcy5mbGF0KCkuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgICAgIGJsb2NrLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrQ29sbGlzaW9uKGJsb2NrKSB7XG4gICAgLy8gICAgIGNvbnN0IGNvbElkeCA9IGJsb2NrLng7XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRCbG9ja0JvdW5kcyA9IGJsb2NrLmJvdW5kcygpO1xuXG4gICAgLy8gICAgIGNvbnN0IGJsb2Nrc0luU2FtZUNvbCA9IHRoaXMuYmxvY2tzW2NvbElkeF07XG5cbiAgICAvLyAgICAgZm9yIChjb25zdCBvdGhlckJsb2NrIG9mIGJsb2Nrc0luU2FtZUNvbCkge1xuICAgIC8vICAgICAgICAgaWYgKG90aGVyQmxvY2sgIT09IGJsb2NrKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3Qgb3RoZXJCbG9ja0JvdW5kcyA9IG90aGVyQmxvY2suYm91bmRzKCk7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAoXG4gICAgLy8gICAgICAgICAgICAgICAgIGN1cnJlbnRCbG9ja0JvdW5kcy5ib3R0b20gPiBvdGhlckJsb2NrQm91bmRzLnRvcCAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBjdXJyZW50QmxvY2tCb3VuZHMudG9wIDwgb3RoZXJCbG9ja0JvdW5kcy5ib3R0b21cbiAgICAvLyAgICAgICAgICAgICApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiQmxvY2siLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjdHgiLCJjYW52YXMiLCJibG9ja3MiLCJjcmVhdGVNYXRyaXgiLCJOVU1fQ09MUyIsImRpbVkiLCJOVU1fSEVJR0hUIiwiYWRkQmxvY2tzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNhbnZhc0NsaWNrIiwiYmluZCIsIkRJTV9YIiwiRElNX1kiLCJCR19DT0xPUiIsImNvbHMiLCJtYXRyaXgiLCJpIiwiY29sIiwicHVzaCIsImFkZCIsImNvbElkeCIsIngiLCJ5IiwiZ2FtZSIsImZvckVhY2giLCJzdGFjayIsImRyYXciLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZsYXQiLCJibG9jayIsImV2ZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1vdXNlWCIsImNsaWVudFgiLCJsZWZ0IiwibW91c2VZIiwiY2xpZW50WSIsInRvcCIsImNvbnNvbGUiLCJsb2ciLCJjbGlja2VkQmxvY2siLCJmaW5kQmxvY2tBdCIsInJlbW92ZUNvbnRpZ3VvdXNCbG9ja3MiLCJjb2xJbmRleCIsIk1hdGgiLCJmbG9vciIsIkRJTVMiLCJyb3dJbmRleCIsInJlbW92ZUJsb2NrIiwic3BsaWNlIiwic3RhcnRCbG9jayIsInZpc2l0ZWQiLCJTZXQiLCJibG9ja3NUb1JlbW92ZSIsImxlbmd0aCIsInBvcCIsIm5laWdoYm9ycyIsImdldE5laWdoYm9ycyIsIm5laWdoYm9yIiwiaGFzIiwiY29sb3IiLCJkaXJlY3Rpb25zIiwiZHgiLCJkeSIsImRpciIsIm5ld1giLCJuZXdZIiwidmFsaWRQb3NpdGlvbiIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.js */ \"./src/block.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n// Imports go here\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas);\n  game.animate();\n  // game.draw(ctx);\n  window.game = game;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDK0I7QUFDSDtBQUU1QkUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDNUMsWUFBVztFQUNQLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3JELE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBRW5DLE1BQU1DLElBQUksR0FBRyxJQUFJUCxnREFBSSxDQUFDSyxHQUFHLEVBQUVGLE1BQU0sQ0FBQztFQUVsQ0ksSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztFQUNkO0VBQ0FDLE1BQU0sQ0FBQ0YsSUFBSSxHQUFHQSxJQUFJO0FBQ3RCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzAxX2pzX2Jsb2Nrcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHMgZ28gaGVyZVxuaW1wb3J0IEJsb2NrIGZyb20gXCIuL2Jsb2NrLmpzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lLmpzXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixcbmZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgsIGNhbnZhcyk7XG5cbiAgICBnYW1lLmFuaW1hdGUoKVxuICAgIC8vIGdhbWUuZHJhdyhjdHgpO1xuICAgIHdpbmRvdy5nYW1lID0gZ2FtZTtcbn0pOyJdLCJuYW1lcyI6WyJCbG9jayIsIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwiYW5pbWF0ZSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wMV9qc19ibG9ja3MvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\nclass Block {\n  constructor(options) {\n    this.x = options.x;\n    this.y = options.y;\n    this.ctx = options.ctx;\n    this.color = Block.getRandomColor(Block.COLORS);\n    this.dims = Block.DIMS;\n  }\n  static DIMS = 50;\n  static COLORS = [\"#FF0000\", \"#00FF00\", \"#0000FF\"];\n  static getRandomColor(arr) {\n    const randomIndex = Math.floor(Math.random() * arr.length);\n    return arr[randomIndex];\n  }\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.x * this.dims, this.y * this.dims, this.dims, this.dims);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Block);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2suanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLEtBQUssQ0FBQztFQUNSQyxXQUFXQSxDQUFDQyxPQUFPLEVBQUU7SUFDakIsSUFBSSxDQUFDQyxDQUFDLEdBQUdELE9BQU8sQ0FBQ0MsQ0FBQztJQUNsQixJQUFJLENBQUNDLENBQUMsR0FBR0YsT0FBTyxDQUFDRSxDQUFDO0lBQ2xCLElBQUksQ0FBQ0MsR0FBRyxHQUFHSCxPQUFPLENBQUNHLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdOLEtBQUssQ0FBQ08sY0FBYyxDQUFDUCxLQUFLLENBQUNRLE1BQU0sQ0FBQztJQUMvQyxJQUFJLENBQUNDLElBQUksR0FBR1QsS0FBSyxDQUFDVSxJQUFJO0VBQzFCO0VBRUEsT0FBT0EsSUFBSSxHQUFHLEVBQUU7RUFDaEIsT0FBT0YsTUFBTSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7RUFFakQsT0FBT0QsY0FBY0EsQ0FBQ0ksR0FBRyxFQUFFO0lBQ3ZCLE1BQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR0osR0FBRyxDQUFDSyxNQUFNLENBQUM7SUFDMUQsT0FBT0wsR0FBRyxDQUFDQyxXQUFXLENBQUM7RUFDM0I7RUFFQUssSUFBSUEsQ0FBQ1osR0FBRyxFQUFFO0lBQ05BLEdBQUcsQ0FBQ2EsU0FBUyxHQUFHLElBQUksQ0FBQ1osS0FBSztJQUMxQkQsR0FBRyxDQUFDYyxRQUFRLENBQUMsSUFBSSxDQUFDaEIsQ0FBQyxHQUFHLElBQUksQ0FBQ00sSUFBSSxFQUFFLElBQUksQ0FBQ0wsQ0FBQyxHQUFHLElBQUksQ0FBQ0ssSUFBSSxFQUFFLElBQUksQ0FBQ0EsSUFBSSxFQUFFLElBQUksQ0FBQ0EsSUFBSSxDQUFDO0VBQzlFO0FBQ0o7QUFFQSwrREFBZVQsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLzAxX2pzX2Jsb2Nrcy8uL3NyYy9ibG9jay5qcz83NDY0Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJsb2NrIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICAgICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgICAgICB0aGlzLmN0eCA9IG9wdGlvbnMuY3R4XG4gICAgICAgIHRoaXMuY29sb3IgPSBCbG9jay5nZXRSYW5kb21Db2xvcihCbG9jay5DT0xPUlMpO1xuICAgICAgICB0aGlzLmRpbXMgPSBCbG9jay5ESU1TO1xuICAgIH1cblxuICAgIHN0YXRpYyBESU1TID0gNTA7XG4gICAgc3RhdGljIENPTE9SUyA9IFtcIiNGRjAwMDBcIiwgXCIjMDBGRjAwXCIsIFwiIzAwMDBGRlwiXTtcblxuICAgIHN0YXRpYyBnZXRSYW5kb21Db2xvcihhcnIpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGFycltyYW5kb21JbmRleF07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnggKiB0aGlzLmRpbXMsIHRoaXMueSAqIHRoaXMuZGltcywgdGhpcy5kaW1zLCB0aGlzLmRpbXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2s7Il0sIm5hbWVzIjpbIkJsb2NrIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwieCIsInkiLCJjdHgiLCJjb2xvciIsImdldFJhbmRvbUNvbG9yIiwiQ09MT1JTIiwiZGltcyIsIkRJTVMiLCJhcnIiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImRyYXciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/block.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.js */ \"./src/block.js\");\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.blocks = this.createMatrix(Game.NUM_COLS);\n    this.addBlocks();\n    this.canvas.addEventListener('click', this.handleCanvasClick.bind(this));\n  }\n  static NUM_COLS = 5;\n  static NUM_HEIGHT = 5; // how many blocks high a column can stack\n  static DIM_X = 250;\n  static DIM_Y = 250;\n  static BG_COLOR = \"#708090\";\n  createMatrix(cols) {\n    const matrix = [];\n    for (let i = 0; i < cols; i++) {\n      const col = [];\n      matrix.push(col);\n    }\n    return matrix;\n  }\n  add(colIdx, x, y) {\n    this.blocks[colIdx].push(new _block_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      game: this,\n      x: x,\n      y: y\n    }));\n  }\n  addBlocks() {\n    this.blocks.forEach((col, colIdx) => {\n      for (let stack = 0; stack < Game.NUM_HEIGHT; stack++) {\n        let x = colIdx;\n        let y = stack;\n        this.add(colIdx, x, y);\n      }\n    });\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.blocks.flat().forEach(block => {\n      block.draw(ctx);\n    });\n  }\n  handleCanvasClick(event) {\n    const rect = this.canvas.getBoundingClientRect();\n    const mouseX = event.clientX - rect.left;\n    const mouseY = event.clientY - rect.top;\n    console.log(\"Mouse Click Coordinates:\", mouseX, mouseY);\n    const clickedBlock = this.findBlockAt(mouseX, mouseY);\n    if (clickedBlock) {\n      console.log(\"Clicked Block:\", clickedBlock);\n      this.removeContiguousBlocks(clickedBlock);\n      this.draw(this.ctx);\n    }\n  }\n  findBlockAt(x, y) {\n    const colIndex = Math.floor(x / _block_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIMS);\n    const rowIndex = Math.floor(y / _block_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIMS);\n    if (colIndex < 0 || colIndex >= Game.NUM_COLS || rowIndex < 0 || rowIndex >= Game.NUM_HEIGHT) {\n      return null;\n    }\n    for (const block of this.blocks.flat()) {\n      if (block.x === colIndex && block.y === rowIndex) {\n        console.log(\"Find Block At:\", block);\n        return block;\n      }\n    }\n    return null;\n  }\n  removeBlock(x, y) {\n    const col = this.blocks[x];\n    // temporarily replacing the populated block with a placeholder\n    if (col && col[y]) {\n      col.splice(y, 1, new _block_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        game: this,\n        color: \"#708090\"\n      }));\n    }\n  }\n\n  // Function uses BFS to remove contiguous blocks\n  removeContiguousBlocks(startBlock) {\n    const queue = [];\n    const visited = new Set();\n    let contigousCount = 0;\n    queue.push(startBlock);\n\n    // Traverse contiguous neighbors with BFS\n    while (queue.length > 0) {\n      const block = queue.shift();\n      const neighbors = this.getNeighbors(block);\n      for (const neighbor of neighbors) {\n        if (!visited.has(neighbor) && neighbor.color == startBlock.color) {\n          queue.push(neighbor);\n          contigousCount++;\n        }\n      }\n      visited.add(block);\n    }\n\n    // If there are at least 2 contiguous blocks, remove them\n    if (contigousCount > 1) {\n      visited.forEach(block => {\n        this.removeBlock(block.x, block.y);\n      });\n      visited.clear();\n    }\n  }\n  getNeighbors(block) {\n    const neighbors = [];\n    const directions = [{\n      dx: 0,\n      dy: -1\n    },\n    // N\n    {\n      dx: 0,\n      dy: 1\n    },\n    // S\n    {\n      dx: 1,\n      dy: 0\n    },\n    // E\n    {\n      dx: -1,\n      dy: 0\n    } // W\n    ];\n\n    for (const dir of directions) {\n      const newX = block.x + dir.dx;\n      const newY = block.y + dir.dy;\n      if (this.validPosition(newX, newY)) {\n        const neighbor = this.blocks[newX][newY];\n        neighbors.push(neighbor);\n      }\n    }\n    return neighbors;\n  }\n  validPosition(x, y) {\n    return x >= 0 && x < Game.NUM_COLS && y >= 0 && y < Game.NUM_HEIGHT;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsQ0FBQzNDLElBQUksQ0FBQzZDLFFBQVEsQ0FBQztNQUM1QjtJQUNKO0lBRUEsT0FBT0YsU0FBUztFQUNwQjtFQUVBVyxhQUFhQSxDQUFDbkQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDaEIsT0FBT0QsQ0FBQyxJQUFJLENBQUMsSUFBSUEsQ0FBQyxHQUFHdEIsSUFBSSxDQUFDTSxRQUFRLElBQUlpQixDQUFDLElBQUksQ0FBQyxJQUFJQSxDQUFDLEdBQUd2QixJQUFJLENBQUNXLFVBQVU7RUFDdkU7QUFDSjtBQUVBLCtEQUFlWCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDFfanNfYmxvY2tzLy4vc3JjL2dhbWUuanM/N2RlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvY2sgZnJvbSBcIi4vYmxvY2suanNcIjtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IHRoaXMuY3JlYXRlTWF0cml4KEdhbWUuTlVNX0NPTFMpO1xuXG4gICAgICAgIHRoaXMuYWRkQmxvY2tzKCk7XG5cbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNhbnZhc0NsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBOVU1fQ09MUyA9IDU7XG4gICAgc3RhdGljIE5VTV9IRUlHSFQgPSA1OyAvLyBob3cgbWFueSBibG9ja3MgaGlnaCBhIGNvbHVtbiBjYW4gc3RhY2tcbiAgICBzdGF0aWMgRElNX1ggPSAyNTA7XG4gICAgc3RhdGljIERJTV9ZID0gMjUwO1xuICAgIHN0YXRpYyBCR19DT0xPUiA9IFwiIzcwODA5MFwiO1xuXG4gICAgY3JlYXRlTWF0cml4KGNvbHMpIHtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBbXTtcbiAgICAgICAgICAgIG1hdHJpeC5wdXNoKGNvbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICB9XG5cbiAgICBhZGQoY29sSWR4LCB4LCB5KSB7XG4gICAgICAgIHRoaXMuYmxvY2tzW2NvbElkeF0ucHVzaChuZXcgQmxvY2soeyBnYW1lOiB0aGlzLCB4OiB4LCB5OiB5IH0pKVxuICAgIH1cblxuICAgIGFkZEJsb2NrcygpIHtcbiAgICAgICAgdGhpcy5ibG9ja3MuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHN0YWNrID0gMDsgc3RhY2sgPCBHYW1lLk5VTV9IRUlHSFQ7IHN0YWNrKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGNvbElkeDtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHN0YWNrO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGNvbElkeCwgeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IEdhbWUuQkdfQ09MT1I7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcblxuICAgICAgICB0aGlzLmJsb2Nrcy5mbGF0KCkuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgICAgIGJsb2NrLmRyYXcoY3R4KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDYW52YXNDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IG1vdXNlWCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IG1vdXNlWSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIk1vdXNlIENsaWNrIENvb3JkaW5hdGVzOlwiLCBtb3VzZVgsIG1vdXNlWSk7XG5cbiAgICAgICAgY29uc3QgY2xpY2tlZEJsb2NrID0gdGhpcy5maW5kQmxvY2tBdChtb3VzZVgsIG1vdXNlWSk7XG4gICAgICAgIGlmIChjbGlja2VkQmxvY2spIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZCBCbG9jazpcIiwgY2xpY2tlZEJsb2NrKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29udGlndW91c0Jsb2NrcyhjbGlja2VkQmxvY2spO1xuICAgICAgICAgICAgdGhpcy5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRCbG9ja0F0KHgsIHkpIHtcbiAgICAgICAgY29uc3QgY29sSW5kZXggPSBNYXRoLmZsb29yKHggLyBCbG9jay5ESU1TKTtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBNYXRoLmZsb29yKHkgLyBCbG9jay5ESU1TKTtcblxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IGNvbEluZGV4ID49IEdhbWUuTlVNX0NPTFMgfHwgcm93SW5kZXggPCAwIHx8IHJvd0luZGV4ID49IEdhbWUuTlVNX0hFSUdIVCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuYmxvY2tzLmZsYXQoKSkge1xuICAgICAgICAgICAgaWYgKGJsb2NrLnggPT09IGNvbEluZGV4ICYmIGJsb2NrLnkgPT09IHJvd0luZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaW5kIEJsb2NrIEF0OlwiLCBibG9jaylcbiAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZW1vdmVCbG9jayh4LCB5KSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuYmxvY2tzW3hdO1xuICAgICAgICAvLyB0ZW1wb3JhcmlseSByZXBsYWNpbmcgdGhlIHBvcHVsYXRlZCBibG9jayB3aXRoIGEgcGxhY2Vob2xkZXJcbiAgICAgICAgaWYgKGNvbCAmJiBjb2xbeV0pIHtcbiAgICAgICAgICAgIGNvbC5zcGxpY2UoeSwgMSwgbmV3IEJsb2NrKHsgZ2FtZTogdGhpcywgY29sb3I6IFwiIzcwODA5MFwiIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHVzZXMgQkZTIHRvIHJlbW92ZSBjb250aWd1b3VzIGJsb2Nrc1xuICAgIHJlbW92ZUNvbnRpZ3VvdXNCbG9ja3Moc3RhcnRCbG9jaykge1xuICAgICAgICBjb25zdCBxdWV1ZSA9IFtdO1xuICAgICAgICBjb25zdCB2aXNpdGVkID0gbmV3IFNldCgpO1xuICAgICAgICBsZXQgY29udGlnb3VzQ291bnQgPSAwO1xuXG4gICAgICAgIHF1ZXVlLnB1c2goc3RhcnRCbG9jayk7XG5cbiAgICAgICAgLy8gVHJhdmVyc2UgY29udGlndW91cyBuZWlnaGJvcnMgd2l0aCBCRlNcbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMuZ2V0TmVpZ2hib3JzKGJsb2NrKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBuZWlnaGJvcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKG5laWdoYm9yKSAmJiBuZWlnaGJvci5jb2xvciA9PSBzdGFydEJsb2NrLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobmVpZ2hib3IpO1xuICAgICAgICAgICAgICAgICAgICBjb250aWdvdXNDb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmlzaXRlZC5hZGQoYmxvY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGF0IGxlYXN0IDIgY29udGlndW91cyBibG9ja3MsIHJlbW92ZSB0aGVtXG4gICAgICAgIGlmIChjb250aWdvdXNDb3VudCA+IDEpIHtcbiAgICAgICAgICAgIHZpc2l0ZWQuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCbG9jayhibG9jay54LCBibG9jay55KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2aXNpdGVkLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXROZWlnaGJvcnMoYmxvY2spIHtcbiAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gW107XG5cbiAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHsgZHg6IDAsIGR5OiAtMSB9LCAvLyBOXG4gICAgICAgICAgICB7IGR4OiAwLCBkeTogMSB9LCAvLyBTXG4gICAgICAgICAgICB7IGR4OiAxLCBkeTogMCB9LCAvLyBFXG4gICAgICAgICAgICB7IGR4OiAtMSwgZHk6IDAgfSwgLy8gV1xuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZGlyIG9mIGRpcmVjdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ggPSBibG9jay54ICsgZGlyLmR4O1xuICAgICAgICAgICAgY29uc3QgbmV3WSA9IGJsb2NrLnkgKyBkaXIuZHk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkUG9zaXRpb24obmV3WCwgbmV3WSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZWlnaGJvciA9IHRoaXMuYmxvY2tzW25ld1hdW25ld1ldO1xuICAgICAgICAgICAgICAgIG5laWdoYm9ycy5wdXNoKG5laWdoYm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZWlnaGJvcnM7XG4gICAgfVxuXG4gICAgdmFsaWRQb3NpdGlvbih4LCB5KSB7XG4gICAgICAgIHJldHVybiB4ID49IDAgJiYgeCA8IEdhbWUuTlVNX0NPTFMgJiYgeSA+PSAwICYmIHkgPCBHYW1lLk5VTV9IRUlHSFQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJCbG9jayIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsImNhbnZhcyIsImJsb2NrcyIsImNyZWF0ZU1hdHJpeCIsIk5VTV9DT0xTIiwiYWRkQmxvY2tzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNhbnZhc0NsaWNrIiwiYmluZCIsIk5VTV9IRUlHSFQiLCJESU1fWCIsIkRJTV9ZIiwiQkdfQ09MT1IiLCJjb2xzIiwibWF0cml4IiwiaSIsImNvbCIsInB1c2giLCJhZGQiLCJjb2xJZHgiLCJ4IiwieSIsImdhbWUiLCJmb3JFYWNoIiwic3RhY2siLCJkcmF3IiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmbGF0IiwiYmxvY2siLCJldmVudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtb3VzZVgiLCJjbGllbnRYIiwibGVmdCIsIm1vdXNlWSIsImNsaWVudFkiLCJ0b3AiLCJjb25zb2xlIiwibG9nIiwiY2xpY2tlZEJsb2NrIiwiZmluZEJsb2NrQXQiLCJyZW1vdmVDb250aWd1b3VzQmxvY2tzIiwiY29sSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJESU1TIiwicm93SW5kZXgiLCJyZW1vdmVCbG9jayIsInNwbGljZSIsImNvbG9yIiwic3RhcnRCbG9jayIsInF1ZXVlIiwidmlzaXRlZCIsIlNldCIsImNvbnRpZ291c0NvdW50IiwibGVuZ3RoIiwic2hpZnQiLCJuZWlnaGJvcnMiLCJnZXROZWlnaGJvcnMiLCJuZWlnaGJvciIsImhhcyIsImNsZWFyIiwiZGlyZWN0aW9ucyIsImR4IiwiZHkiLCJkaXIiLCJuZXdYIiwibmV3WSIsInZhbGlkUG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.js */ \"./src/block.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n// Imports go here\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas);\n  game.draw(ctx);\n  window.game = game;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDK0I7QUFDSDtBQUU1QkUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDNUMsWUFBVztFQUNQLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3JELE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBRW5DLE1BQU1DLElBQUksR0FBRyxJQUFJUCxnREFBSSxDQUFDSyxHQUFHLEVBQUVGLE1BQU0sQ0FBQztFQUNsQ0ksSUFBSSxDQUFDQyxJQUFJLENBQUNILEdBQUcsQ0FBQztFQUNkSSxNQUFNLENBQUNGLElBQUksR0FBR0EsSUFBSTtBQUN0QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wMV9qc19ibG9ja3MvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzIGdvIGhlcmVcbmltcG9ydCBCbG9jayBmcm9tIFwiLi9ibG9jay5qc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZS5qc1wiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsXG5mdW5jdGlvbigpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4LCBjYW52YXMpO1xuICAgIGdhbWUuZHJhdyhjdHgpO1xuICAgIHdpbmRvdy5nYW1lID0gZ2FtZTtcbn0pOyJdLCJuYW1lcyI6WyJCbG9jayIsIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwiZHJhdyIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
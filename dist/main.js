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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.js */ \"./src/block.js\");\n\nclass Game {\n  constructor(ctx, canvas) {\n    this.ctx;\n    this.canvas = canvas;\n    this.blocks = this.createMatrix(Game.NUM_COLS);\n    this.addBlocks();\n    this.canvas.addEventListener('click', this.handleCanvasClick.bind(globalThis));\n  }\n  static NUM_COLS = 5;\n  static NUM_HEIGHT = 5; // how many blocks high a column can stack\n  static DIM_X = 250;\n  static DIM_Y = 250;\n  static BG_COLOR = \"#708090\";\n  createMatrix(cols) {\n    const matrix = [];\n    for (let i = 0; i < cols; i++) {\n      const col = [];\n      matrix.push(col);\n    }\n    return matrix;\n  }\n  add(colIdx, x, y) {\n    this.blocks[colIdx].push(new _block_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      game: this,\n      x: x,\n      y: y\n    }));\n  }\n  addBlocks() {\n    this.blocks.forEach((col, colIdx) => {\n      for (let stack = 0; stack < Game.NUM_HEIGHT; stack++) {\n        let x = colIdx;\n        let y = stack;\n        this.add(colIdx, x, y);\n      }\n    });\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.blocks.flat().forEach(block => {\n      block.draw(ctx);\n    });\n  }\n  handleCanvasClick(event) {\n    const rect = this.canvas.getBoundingClientRect();\n    const mouseX = event.clientX - rect.left;\n    const mouseY = event.clientY - rect.top;\n    const clickedBlock = this.findBlockAt(mouseX, mouseY);\n    if (clickedBlock) {\n      this.removeBlock(clickedBlock);\n      // draw new blocks above corresponding column\n    }\n  }\n\n  findBlockAt(x, y) {\n    const colIndex = Math.floor(x / _block_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIMS);\n    const rowIndex = Math.floor(y / _block_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIMS);\n    if (colIndex < 0 || colIndex >= Game.NUM_COLS || rowIndex < 0) {\n      return null;\n    }\n    const col = this.blocks[colIndex];\n    if (col && rowIndex < col.length) {\n      return col[rowIndex];\n    }\n    return null;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHSCxJQUFJLENBQUNJLElBQUk7SUFDeEMsTUFBTUMsTUFBTSxHQUFHTixLQUFLLENBQUNPLE9BQU8sR0FBR04sSUFBSSxDQUFDTyxHQUFHO0lBRXZDLE1BQU1DLFlBQVksR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ1AsTUFBTSxFQUFFRyxNQUFNLENBQUM7SUFDckQsSUFBSUcsWUFBWSxFQUFFO01BQ2QsSUFBSSxDQUFDRSxXQUFXLENBQUNGLFlBQVksQ0FBQztNQUM5QjtJQUNKO0VBQ0o7O0VBRUFDLFdBQVdBLENBQUNyQixDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNkLE1BQU1zQixRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDekIsQ0FBQyxHQUFHeEIsaURBQUssQ0FBQ2tELElBQUksQ0FBQztJQUMzQyxNQUFNQyxRQUFRLEdBQUdILElBQUksQ0FBQ0MsS0FBSyxDQUFDeEIsQ0FBQyxHQUFHekIsaURBQUssQ0FBQ2tELElBQUksQ0FBQztJQUUzQyxJQUFJSCxRQUFRLEdBQUcsQ0FBQyxJQUFJQSxRQUFRLElBQUk5QyxJQUFJLENBQUNNLFFBQVEsSUFBSTRDLFFBQVEsR0FBRyxDQUFDLEVBQUU7TUFDM0QsT0FBTyxJQUFJO0lBQ2Y7SUFFQSxNQUFNL0IsR0FBRyxHQUFHLElBQUksQ0FBQ2YsTUFBTSxDQUFDMEMsUUFBUSxDQUFDO0lBQ2pDLElBQUkzQixHQUFHLElBQUkrQixRQUFRLEdBQUcvQixHQUFHLENBQUNnQyxNQUFNLEVBQUU7TUFDOUIsT0FBT2hDLEdBQUcsQ0FBQytCLFFBQVEsQ0FBQztJQUN4QjtJQUVBLE9BQU8sSUFBSTtFQUNmO0FBQ0o7QUFFQSwrREFBZWxELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wMV9qc19ibG9ja3MvLi9zcmMvZ2FtZS5qcz83ZGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9jayBmcm9tIFwiLi9ibG9jay5qc1wiO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gdGhpcy5jcmVhdGVNYXRyaXgoR2FtZS5OVU1fQ09MUyk7XG5cbiAgICAgICAgdGhpcy5hZGRCbG9ja3MoKTtcblxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2FudmFzQ2xpY2suYmluZChnbG9iYWxUaGlzKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIE5VTV9DT0xTID0gNTtcbiAgICBzdGF0aWMgTlVNX0hFSUdIVCA9IDU7IC8vIGhvdyBtYW55IGJsb2NrcyBoaWdoIGEgY29sdW1uIGNhbiBzdGFja1xuICAgIHN0YXRpYyBESU1fWCA9IDI1MDtcbiAgICBzdGF0aWMgRElNX1kgPSAyNTA7XG4gICAgc3RhdGljIEJHX0NPTE9SID0gXCIjNzA4MDkwXCI7XG5cbiAgICBjcmVhdGVNYXRyaXgoY29scykge1xuICAgICAgICBjb25zdCBtYXRyaXggPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IFtdO1xuICAgICAgICAgICAgbWF0cml4LnB1c2goY29sKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgIH1cblxuICAgIGFkZChjb2xJZHgsIHgsIHkpIHtcbiAgICAgICAgdGhpcy5ibG9ja3NbY29sSWR4XS5wdXNoKG5ldyBCbG9jayh7IGdhbWU6IHRoaXMsIHg6IHgsIHk6IHkgfSkpXG4gICAgfVxuXG4gICAgYWRkQmxvY2tzKCkge1xuICAgICAgICB0aGlzLmJsb2Nrcy5mb3JFYWNoKChjb2wsIGNvbElkeCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgc3RhY2sgPSAwOyBzdGFjayA8IEdhbWUuTlVNX0hFSUdIVDsgc3RhY2srKykge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gY29sSWR4O1xuICAgICAgICAgICAgICAgIGxldCB5ID0gc3RhY2s7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoY29sSWR4LCB4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gR2FtZS5CR19DT0xPUjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIEdhbWUuRElNX1gsIEdhbWUuRElNX1kpO1xuXG4gICAgICAgIHRoaXMuYmxvY2tzLmZsYXQoKS5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICAgICAgYmxvY2suZHJhdyhjdHgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUNhbnZhc0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgbW91c2VYID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgY29uc3QgbW91c2VZID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgICAgIGNvbnN0IGNsaWNrZWRCbG9jayA9IHRoaXMuZmluZEJsb2NrQXQobW91c2VYLCBtb3VzZVkpO1xuICAgICAgICBpZiAoY2xpY2tlZEJsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUJsb2NrKGNsaWNrZWRCbG9jayk7XG4gICAgICAgICAgICAvLyBkcmF3IG5ldyBibG9ja3MgYWJvdmUgY29ycmVzcG9uZGluZyBjb2x1bW5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRCbG9ja0F0KHgsIHkpIHtcbiAgICAgICAgY29uc3QgY29sSW5kZXggPSBNYXRoLmZsb29yKHggLyBCbG9jay5ESU1TKTtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBNYXRoLmZsb29yKHkgLyBCbG9jay5ESU1TKTtcblxuICAgICAgICBpZiAoY29sSW5kZXggPCAwIHx8IGNvbEluZGV4ID49IEdhbWUuTlVNX0NPTFMgfHwgcm93SW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuYmxvY2tzW2NvbEluZGV4XTtcbiAgICAgICAgaWYgKGNvbCAmJiByb3dJbmRleCA8IGNvbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xbcm93SW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJCbG9jayIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImN0eCIsImNhbnZhcyIsImJsb2NrcyIsImNyZWF0ZU1hdHJpeCIsIk5VTV9DT0xTIiwiYWRkQmxvY2tzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNhbnZhc0NsaWNrIiwiYmluZCIsImdsb2JhbFRoaXMiLCJOVU1fSEVJR0hUIiwiRElNX1giLCJESU1fWSIsIkJHX0NPTE9SIiwiY29scyIsIm1hdHJpeCIsImkiLCJjb2wiLCJwdXNoIiwiYWRkIiwiY29sSWR4IiwieCIsInkiLCJnYW1lIiwiZm9yRWFjaCIsInN0YWNrIiwiZHJhdyIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmxhdCIsImJsb2NrIiwiZXZlbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibW91c2VYIiwiY2xpZW50WCIsImxlZnQiLCJtb3VzZVkiLCJjbGllbnRZIiwidG9wIiwiY2xpY2tlZEJsb2NrIiwiZmluZEJsb2NrQXQiLCJyZW1vdmVCbG9jayIsImNvbEluZGV4IiwiTWF0aCIsImZsb29yIiwiRElNUyIsInJvd0luZGV4IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.js */ \"./src/block.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n// Imports go here\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const game = new _game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n  game.draw(ctx);\n  window.game = game;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDK0I7QUFDSDtBQUU1QkUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFDNUMsWUFBVztFQUNQLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3JELE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBRW5DLE1BQU1DLElBQUksR0FBRyxJQUFJUCxnREFBSSxDQUFDSyxHQUFHLENBQUM7RUFDMUJFLElBQUksQ0FBQ0MsSUFBSSxDQUFDSCxHQUFHLENBQUM7RUFDZEksTUFBTSxDQUFDRixJQUFJLEdBQUdBLElBQUk7QUFDdEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDFfanNfYmxvY2tzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0cyBnbyBoZXJlXG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vYmxvY2suanNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWUuanNcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLFxuZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gICAgZ2FtZS5kcmF3KGN0eCk7XG4gICAgd2luZG93LmdhbWUgPSBnYW1lO1xufSk7Il0sIm5hbWVzIjpbIkJsb2NrIiwiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJkcmF3Iiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
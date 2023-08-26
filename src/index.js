// Imports go here
import Example from "./scripts/example";
import Block from "./block.js";

document.addEventListener("DOMContentLoaded",
function() {
    // window.Block = Block;

    const block = new Block({
        x: 100,
        y: 100,
        width: 50,
        height: 50,
        color: "#FF0000"
    });

    const canvasEle = document.getElementById("game-canvas");
    const ctx = canvasEle.getContext("2d");

    block.draw(ctx);

    console.log("Hello world!");

    const main = document.getElementById("main")
    new Example(main);
});
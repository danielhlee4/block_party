// Imports go here
import Example from "./scripts/example";
import Object from "./object.js";

document.addEventListener("DOMContentLoaded",
function() {
    window.Object = Object;

    const block = new Object({
        pos: [150, 200],
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
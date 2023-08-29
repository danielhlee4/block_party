// Imports go here
import Block from "./block.js";
import Game from "./game.js"

document.addEventListener("DOMContentLoaded",
function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    const game = new Game(ctx, canvas);

    game.animate()
    // game.draw(ctx);
    window.game = game;
});
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startGameButton = document.getElementById("btn__reset");
startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

const qwerty = document.getElementById('qwerty');

qwerty.addEventListener('click', (e) => {
 if (e.target.tagName === 'BUTTON') {
     game.handleInteraction(e.target);
 }

});
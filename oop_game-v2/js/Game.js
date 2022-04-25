/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Better late than never'),
            new Phrase('Beat around the bush'),
            new Phrase('Hit the sack'),
            new Phrase('Miss the boat'),
            new Phrase('The best of both worlds')
        ];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        var randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase
    }

    startGame() {
        const overlay = document.getElementById("overlay");
        overlay.style.display = 'none'; // hiding the screen overlay

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    
    }

    checkForWin() {
        const letters = document.querySelectorAll('.letter');
        const shown = document.querySelectorAll('.show')
        
        if(shown.length === letters.length){
            return true;
        } else { 
            return false;
        }
    }

    removeLife() {
        const liveHearts = document.querySelectorAll('.tries img');
        liveHearts[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if(this.missed > 4){
            this.gameOver();
        }
    }
    
    gameOver() {
        const overlay = document.getElementById("overlay");
        overlay.style.display = ""; // adding back the overlay

        if (this.checkForWin()) {
            document.getElementById("game-over-message").innerHTML = 'You won!'
            overlay.className = 'win' // applying appropriate class depending on the outcome of the game
            this.resetGame();
        } else {
            document.getElementById("game-over-message").innerHTML = 'You lost!'
            overlay.className = 'lose' // applying appropriate class depending on the outcome of the game
            this.resetGame();
        }
    }

    handleInteraction(button) {
        button.disabled = true;
        let guessedLetter = this.activePhrase.checkLetter(button.textContent);
        
        if(guessedLetter){
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()){
                this.gameOver();
            }
        } else {
            button.className = 'wrong';
            this.removeLife();
        }
     };

     resetGame() {
        const phraseDiv = document.getElementById("phrase");
        phraseDiv.querySelector("ul").innerHTML = '';

        this.missed = 0;
        
        const keyboard = document.getElementById('qwerty');
        const buttons = keyboard.getElementsByTagName('button');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].classList.remove('chosen');
            buttons[i].classList.remove('wrong');
        };

        const hearts = document.getElementsByClassName('tries');
        
        for (let i = 0; i < hearts.length; i++) {
            let icon = hearts[i].firstElementChild;
            icon.src = "images/liveHeart.png";        
        };

     }
}




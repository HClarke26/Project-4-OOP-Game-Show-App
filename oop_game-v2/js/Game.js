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
        overlay.style.display = 'none';

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

    removeLife(){
        const liveHearts = document.querySelectorAll('.tries img');
        liveHearts[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if(this.missed > 4){
            this.gameOver();
        }
    };
    
}




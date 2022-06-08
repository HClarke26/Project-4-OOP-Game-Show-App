/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        const phraseDiv = document.getElementById("phrase");
        const ul = phraseDiv.querySelector("ul");

        for(let i = 0; i < this.phrase.length; i++){
          // adding a li elemenet with the appropriate class for each letter in the phrase 
            if(this.phrase[i] !== " "){
                ul.innerHTML += `<li class="hide letter">${this.phrase[i]}</li>`;
            } else {
                ul.innerHTML += `<li class="space">${this.phrase[i]}</li>`;
            }
        }
        return this.phrase;
    }

    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    showMatchedLetter(letter) {
        let letters = document.querySelectorAll('#phrase li');
        for(let i = 0; i < letters.length; i++){
            if(letter === letters[i].textContent){
                letters[i].classList.remove('hide');
                letters[i].classList.add('show');
            }
        }

    }
}

function Hangman(word) { 
    var guessed = []; 
    this.shouldGuess = ''; 
    this.shouldGuessArray = []; 
    this.errors = 0; 
    this.guessedString =''; 
    this.wrongSymbols = []; 
    
    for (var i = 0; i < word.length; i++) { 
        this.shouldGuess = word.toLowerCase();
        this.shouldGuessArray[i]=this.shouldGuess[i]; 
    } 
    
    for (var i=0; i<word.length; i++) { 
        guessed[i]='_'; 
    } 
    
    this.guess = function(guess) {
        var letter = guess.toLowerCase();
        var wrongLetter = 0; 

        this.shouldGuessArray.forEach(function(item, i, shouldGuessArray) { 
            if (letter === shouldGuessArray[i]) { 
                guessed[i] = letter; 
            } else { 
                wrongLetter++; 
            } 
        }) 

        this.guessedString = guessed.join(''); 

        if (this.guessedString === this.shouldGuess) {
            return console.log('Yes, the word was ' + this.guessedString + '! Congratulations! You won!');
        }
        
        if (wrongLetter === this.shouldGuessArray.length) { 
            this.errors++;
            if (this.errors === 5) {
                return console.log('You lose :(');
            }
            console.log('wrong letter, errors left ' + this.getErrorsLeft() + ' | ' + letter); 
            this.wrongSymbols[this.wrongSymbols.length]=letter; 
            return; 
        }

        console.log(this.guessedString); 
        return; 
    } 
    
    this.getErrorsLeft = function() { 
        console.log(5 - this.errors); 
        return (5 - this.errors); 
    } 
            
    this.getGuessedString = function() { 
        console.log(this.guessedString); 
    } 
                
    this.getWrongSymbols = function() { 
        console.log(this.wrongSymbols); 
    } 
                
    this.getStatus = function() { 
        console.log(this.guessedString + ' | errors left ' + this.getErrorsLeft()) 
    } 

    this.startAgain = function(newWord) {
        
        this.shouldGuess = ''; 
        this.shouldGuessArray = []; 
        guessed = []; 
        this.guessedString ='';
        this.errors = 0;
        this.wrongSymbols = [];

        for (var i = 0; i < newWord.length; i++) { 
            this.shouldGuess = newWord.toLowerCase();
            this.shouldGuessArray[i] = this.shouldGuess[i]; 
        } 
        
        for (var i=0; i<newWord.length; i++) { 
            guessed[i]='_'; 
        } 
    }
}

var hangman = new Hangman ('MARIAM'); 
hangman.guess('m'); 
hangman.guess('a');
hangman.guess('h');
hangman.guess('J');
hangman.guess('R');
hangman.guess('i');
const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: function() {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      console.log(this.secretNum);
      this.getGuess();
      this.prevGuesses.push(this.playerGuess);
      this.check();
      this.render();
    },
    render: function(){
      // while( this.secretNum !== this.playerGuess){
      //   this.prevGuesses.push(this.playerGuess);
      //   this.getGuess();
      // }
      if(this.secretNum === this.playerGuess){
        console.log(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
      }else if(this.secretNum > this.playerGuess){
        console.log(`Your guess is too low ${this.playerGuess}`)
      }else if(this.secretNum < this.playerGuess){
        console.log(`Your guess is to high ${this.playerGuess}`)
      }
    },
    prevGuesses: [],
    getGuess: function(){
      this.playerGuess = prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`)
      this.playerGuess = parseInt(this.playerGuess);
     },
    check: function(){
      while(this.playerGuess < 1 || this.playerGuess> 100){
        alert('Your choice is not betwe1en 1 and 100');
        this.getGuess();
        console.log(this.playerGuess)
      }
  }
}
game.play()













  
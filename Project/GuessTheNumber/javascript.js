let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber)

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const startOver = document.querySelector('.resultParas');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p')

// const prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)

  })
}

function validateGuess(guess){
  // validate user input
  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess < 1){
    alert('please enter a number greater than 1')
  }
  else if(guess > 100){
    alert('please enter a number less than 100')
  }
  else{
    //  prevGuess.push(guess)
     if(numGuess === 10){
       updateValues(guess)
       displayMessage(`Game Over. Random number was ${randomNumber}`)
       endGame()
     }
     else{
       updateValues(guess)
       checkGuess(guess)
     }
  }
}


function checkGuess(guess){
//  check number whether it is equal or not to random number
   if(guess === randomNumber){
     displayMessage(`You guessed it right`)
     endGame()
   }
   else if(guess < randomNumber){
     displayMessage(`Number is too low`)
   }
   else if(guess > randomNumber){
     displayMessage(`Number is too high`)
   }
}


function updateValues(guess){
//  update user input
//  update array, number of guess 
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  remaining.innerHTML = `${11 - ++numGuess}`


}  


function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
   userInput.value = ''
   userInput.setAttribute('disabled', '')
  //  p.classList.add('button')
   p.innerHTML = `<button id ="newGame">Start New Game</button>`
   startOver.appendChild(p)
//    playGame = false
   newGame()
}


function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
   randomNumber = parseInt(Math.random() * 100 + 1);
   
   numGuess = 1
   guessSlot.innerHTML =''
   remaining.innerHTML = `${11 - numGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   displayMessage(``)
   playGame = true

  })
}

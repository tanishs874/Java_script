let random = parseInt(Math.random()*100+1)
// console.log(random)
const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess = []
let numguess = 1;
let playgame = true;

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = userinput.value;
    // console.log(guess)
    validateguess(guess)
  })
}

function validateguess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number.")
  }
  else if(guess < 1){
    alert(`Please enter a number greater than ${guess}`)
  }
  else if(guess>100){
    alert(`Please enter a number lesser than ${guess}`)
  }
  else{
    prevguess.push(guess)
    if(numguess === 11){
      displayguess(guess)
      displaymessage(`Game Over.random number was ${random}`)
      endgame()
    }
    else{
      displayguess(guess)
      checkguess(guess)
    }
  }
}

function checkguess(guess){
  if(guess === random){
    displaymessage(`You won the game`)
    endgame()
  }
  else if(guess < random){
    displaymessage(`Number is tooo low`)
  }
  else if(guess > random){
    displaymessage(`Number is too high`)
  }
}

function displayguess(guess){
  userinput.value = ''
  guessslot.innerHTML += `${guess},  `
  numguess++;
  remaining.innerHTML = `${11-numguess}`
}

function displaymessage(message){
  loworhi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame (){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess} `;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);

    playgame = true;
  });
}
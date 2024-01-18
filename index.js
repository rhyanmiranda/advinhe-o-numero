
let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10


function newGame() {
  window.location.reload()
}

function init() {
   computerNumber = Math.floor(Math.random() * 100 + 1)  // gerando numero random e armazenando na variável
  //  console.log(computerNumber)
}

function compareNumbers() {
  const userNumber = Number(document.getElementById('inputBox').value)
  userNumbers.push(' ' + userNumber)
  document.getElementById('guesses').innerHTML = userNumbers // retorna a array para a página

  if ( attempts < maxGuesses ) {
    if (userNumber > computerNumber) {
      document.getElementById('textOutput').innerHTML = 'Seu palpite é muito alto'
      document.getElementById('inputBox').value = ''
    } else if (userNumber < computerNumber) {
      document.getElementById('textOutput').innerHTML = 'Seu palpite é muito baixo'
      document.getElementById('inputBox').value = ''
    } else /* quando ganha */ {
      document.getElementById('textOutput').innerHTML = 'Parabéns !! Você Acertou !!'
      document.getElementById('inputBox').setAttribute('ReadOnly', 'ReadOnly') 
      // quando ganhar nao dá para digitar mais nada no InputBox
    } 

    document.getElementById('attempts').innerHTML = ++attempts

  }else /* quando perde */ {
    document.getElementById('textOutput').innerHTML = `Você Perdeu !! O número era : ${computerNumber}`
    document.getElementById('inputBox').setAttribute('ReadOnly', 'ReadOnly') 
    // quando perder nao dá para digitar mais nada no InputBox
  }
}
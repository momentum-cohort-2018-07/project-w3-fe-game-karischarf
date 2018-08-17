var canvas;
var canvasContext;
var ballX = 50;


//wait until window loads to run this function. Grab canvas element.
window.onload = function() {
  canvas = this.document.getElementById('gameCanvas')
  canvasContext = canvas.getContext('2d')
  
  //declaring this var in window.onload function because we won't need it outside of here
  var framesPerSecond = 30
  setInterval(callBoth,1000/framesPerSecond)

}

function callBoth() {
  moveEverything()
  drawEverything()
}

function moveEverything() {
  ballX = ballX + 5
}

function drawEverything() {
  canvasContext.fillStyle = 'pink'
  canvasContext.fillRect(0,0,canvas.clientWidth,canvas.height)
  canvasContext.strokeStyle = 'black'
  canvasContext.strokeRect(150,150,300,300)
  canvasContext.fillStyle = 'gray'
  canvasContext.fillRect(ballX,200,50,25)

}

// function startGame () {
//   let game = new Game('gameCanvas')
//   game.start()
// }




class Keyboarder {
  constructor () {
    this.keyState = {}

    window.addEventListener('keydown', function (e) {
      this.keyState[e.keyCode] = true
    }.bind(this))

    window.addEventListener('keyup', function (e) {
      this.keyState[e.keyCode] = false
    }.bind(this))
  }

  isDown (keyCode) {
    return this.keyState[keyCode] === true
  }

  on (keyCode, callback) {
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === keyCode) {
        callback()
      }
    })
  }
}

Keyboarder.KEYS = { LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40, S: 83 }

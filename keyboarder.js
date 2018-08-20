var canvas
var canvasContext
var ballX = 50
var ballSpeedX = 5


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

//this will move the postion of the ball and increase speed
function moveEverything() {
  ballX = ballX + ballSpeedX
  if(ballX > canvas.width) {
    ballSpeedX = -ballSpeedX
  }  
  if(ballX < 0) {
    ballSpeedX = -ballSpeedX
  }  
}

function drawEverything() {
  colorRect(0,0, canvas.clientWidth,canvas.height, 'pink')
  // canvasContext.fillStyle = 'pink'
  // canvasContext.fillRect(0,0,canvas.clientWidth,canvas.height)
  // canvasContext.strokeStyle = 'black'
  // canvasContext.strokeRect(100,100,400,400)
  colorRect(100,100,400,400, 'black')
  // canvasContext.fillStyle = 'gray'
  // canvasContext.fillRect(ballX,200,50,25)
  
  //draw ball
  canvasContext.fillStyle = 'gray'
  canvasContext.beginPath()
  canvasContext.arc(ballX, 100, 0, 0, Math.PI*2, true)
  // colorRect(ballX,200,50,25, 'gray')

}

function colorRect(leftX,topY, width,height, drawColor) {
  canvasContext.fillStyle = drawColor
  canvasContext.fillRect(leftX,topY, width,height) 
  
}
//starter code

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

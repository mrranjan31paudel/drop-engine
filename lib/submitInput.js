function submitBallInputs(e) {
  e.preventDefault();

  let ballProperties = {
    radius: parseInt(document.getElementById('inputRadius').value),
    mass: parseInt(document.getElementById('inputMass').value),
    height: parseInt(document.getElementById('inputHeight').value),
    color: document.getElementById('selectColor').value
  };

  createBall(ballProperties);
}

function createBall(ballProperties) {
  let canvas = document.getElementById('simulatoinCanvas');
  let ctx = canvas.getContext('2d');
  let ball = new CanvasBall(ballProperties.radius, ballProperties.mass, ballProperties.height, ballProperties.color, ctx);

  ball.init();
  dropBall(ball);
}
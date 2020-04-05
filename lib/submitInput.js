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
  ball = new Ball(ballProperties, simulationContainer);
  ball.init();

  dropBall();
}
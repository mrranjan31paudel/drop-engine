function dropBall() {
  ballMotionLoop = setInterval(function () {

    time += INTERVAL_SEC;
    getNewHeight();

    ball.moveBall();

    if (ball.posY + ball.diameter >= GROUND_LEVEL) {
      rebounceBall();
    }

    if (currentSpeed < 0.0001) {
      currentSpeed = 0;
      prevBallSpeed = ball.speed;
      ball.speed = currentSpeed;
      ball.height = ball.posY;
      ball.direction = 1;
      time = 0;
    }

    if (ball.posY < TOP_LEVEL) {
      ball.direction = 1;
      time = 0;
    }

    speedDiff = ball.speed - prevBallSpeed;
    if (speedDiff < 6 & speedDiff > -6 && speedDiff !== 0) {
      clearInterval(ballMotionLoop);
    }

  }, INTERVAL_MSEC);
}

function getNewHeight() {
  currentSpeed = ball.speed + ball.direction * ACC_GRAV * time;
  displacement = ball.speed * time + ball.direction * 0.5 * ACC_GRAV * time * time;
  ball.posY = ball.height + ball.direction * displacement;
}

function rebounceBall() {
  strikeCount++;
  ball.height = GROUND_LEVEL - ball.diameter;
  prevBallSpeed = ball.speed;
  ball.speed = currentSpeed * 0.7;
  ball.direction = -1;
  time = 0;
}

function pauseMotion(e) {
  e.preventDefault();
  clearInterval(ballMotionLoop);
}

function resumeMotion(e) {
  e.preventDefault();
  dropBall();
}
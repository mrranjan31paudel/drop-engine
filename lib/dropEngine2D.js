function dropBall(ball) {
  let time = 0;
  let prevBallSpeed = 0;
  let currentSpeed = 0;
  let displacement = 0;
  let strikeCount = 0;
  let htToReach = 0;

  function loop() {
    time += INTERVAL_SEC;

    if (ball.posY >= GROUND_LEVEL - ball.radius) {
      ball.speed = ACC_GRAV * time * 0.7;
      time = 0;
      ball.direction = -1;
      htToReach = GROUND_LEVEL - ball.posY - (ball.speed * time - 0.5 * ACC_GRAV * time ** 2);
    }

    if ()

      displacement = 0 + 0.5 * ACC_GRAV * time ** 2;
  }
  requestAnimationFrame(loop)
}

function pauseMotion(e) {
  e.preventDefault();
  clearInterval(ballMotionLoop);
}

function resumeMotion(e) {
  e.preventDefault();
  dropBall();
}

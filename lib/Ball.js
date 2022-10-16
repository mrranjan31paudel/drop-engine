function Ball({ radius, mass, height, color }, parentContainer) {
  this.radius = radius;
  this.diameter = 2 * radius;
  this.mass = mass;
  this.height = GROUND_LEVEL - height - 2 * radius;
  this.color = color;
  this.speed = 0;
  this.parent = parentContainer;
  this.posX = INITIAL_X_POS;
  this.posY = GROUND_LEVEL - height - 2 * radius;
  this.direction = 1;

  this.init = function () {

    let ballElement = document.createElement('div');
    ballElement.setAttribute('id', 'mainBall');
    ballElement.setAttribute('class', 'created-ball');
    ballElement.style.position = 'absolute';
    ballElement.style.top = `${this.posY}px`;
    ballElement.style.left = `${this.posX - this.radius}px`;
    ballElement.style.zIndex = '5';
    ballElement.style.width = `${2 * this.radius}px`;
    ballElement.style.height = `${2 * this.radius}px`;
    ballElement.style.borderRadius = `${this.radius}px`;
    ballElement.style.backgroundColor = color;

    this.element = ballElement;

    this.parent.appendChild(this.element);
  }

  this.moveBall = function () {
    this.element.style.top = `${this.posY}px`;
  }

  this.drawBall = function () {

  }
}

function CanvasBall(radius, mass, height, color, ctx) {
  this.radius = radius;
  this.diameter = 2 * radius;
  this.mass = mass;
  this.height = GROUND_LEVEL - height - 2 * radius;
  this.color = color;
  this.speed = 0;
  // this.parent = parentContainer;
  this.posX = INITIAL_X_POS;
  this.posY = GROUND_LEVEL - height - 2 * radius;
  this.direction = 1;

  this.init = function () {
    this.ctx = ctx;
  }

  this.moveBall = function (dy = 0) {
    this.posY += this.posY;
    if (this.posY + this.radius >= GROUND_LEVEL)
      this.posY = GROUND_LEVEL - this.radius;

    this.drawBall();
  }

  this.drawBall = function () {
    this.ctx.clearRect(0, 0, 400, 600);
    this.ctx.beginPath();
    this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.fillText(`${this.speed}`, this.posX + this.radius + 10, this.posY);
  }
}
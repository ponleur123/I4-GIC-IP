class Dinosaur {
    appearance = null;
    width = 30;
    height = 30;
    speed = 10;
    ctx = null;
    positionX = null;
    positionY = null;
    dy=0;
    constructor(ctx, x, y) {
      this.ctx = ctx;
      this.positionX = x;
      this.positionY = y;
      this.ctx.fillStyle = '#F9DC5C';
      this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    }
    setSpeed(baseSpeed, level) {
      this.speed = baseSpeed + level;
    }
    jump() {
      let jh = canvas.height - this.positionY;

      console.log('dinosaur is jumping!!');
    }
  }
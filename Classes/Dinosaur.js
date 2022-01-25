class Dinosaur {
    appearance = null;
    width = 30;
    height = 30;
    speed = 10;
    ctx = null;
    positionX = null;
    positionY = null;
    dy=0;
    constructor(gameContext) {
      this.gameContext = gameContext;
      this.positionX = this.gameContext.canvas.width;
      this.positionY = 100;
      this.shape = new Image();
      this.shape.src = "../T-Rex Game/animal.png";

      this.shape.onload = (()=> {
          this.gameContext.ctx.drawImage(this.shape,10,10,100,100,10,10,200,200)
      })
    }
    setSpeed(baseSpeed, level) {
      this.speed = baseSpeed + level;
    }
    jump() {
      let jh = canvas.height - this.positionY;

      console.log('dinosaur is jumping!!');
    }
  }
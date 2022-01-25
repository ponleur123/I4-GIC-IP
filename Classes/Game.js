class Game {
    // Properties
    playerName = null;
    dinosaur = null;
    score = null;
    speed = 10;
    level = 1;
    constructor(ctx) {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
    
    // Methods
    start() {
        let playerName = document.getElementById("player_name").value;
    //   Receive player name and save it.
      if (playerName) {
        this.playerName = playerName;
        console.log('Game is starting!!', this);
      } else {
        alert('Player name is required!!');
      }
  
      // Remove starting container from canvas
      let startingContainer = document.getElementById("starting-container");
      startingContainer.style.display = "none";
  
      // Initinalize dinosaur object and display it on the screen
      let dinosaur = new Dinosaur(this);
    //   dinosaur.jump();
      // Initialize tree object and display it on the screen
      let tree = new Tree(this);
      tree.move();
    }
    pause() {
      console.log('Pause the game');
    }
  }
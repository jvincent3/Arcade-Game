// Enemies our player must avoid
class Ladybug {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    constructor() {
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.x = 1;
        this.y;
        this.height = 80;
        this.width = 70;
        this.sprite = 'images/enemy-bug.png';
        this.coordY = [46, 128, 210];
        this.coordX = [-500, -100, -200, 0];
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt,difficulty) {
      switch (difficulty) {
        case "normal":
        this.x = this.x + (dt * 200);
          if (this.y === undefined) {
            this.y = this.coordY[Math.floor(Math.random() * Math.floor(3))];
            this.x = this.coordX[Math.floor(Math.random() * Math.floor(4))];
          }
          if(this.x > 505) {
            this.x = this.coordX[Math.floor(Math.random() * Math.floor(4))];
            this.y = this.coordY[Math.floor(Math.random() * Math.floor(3))];
          }
          break;
        case "hard":
          this.x = this.x + (dt * 200);
          if (this.y === undefined) {
            this.y = this.coordY[Math.floor(Math.random() * Math.floor(3))];
            this.x = this.coordX[Math.floor(Math.random() * Math.floor(4))];
          }
          if(this.x > 505) {
            this.x = this.coordX[Math.floor(Math.random() * Math.floor(4))];
            this.y = this.coordY[Math.floor(Math.random() * Math.floor(3))];
          }
        break;
        case "do not try":
          this.x = this.x + (dt * 200);
          this.y = Math.floor(Math.random() * Math.floor(210));
          this.x = Math.floor(Math.random() * Math.floor(505));

          break;
      }

    }
    // Draw the enemy on the screen, required method for game
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor() {
      this.sprite = 'images/char-horn-girl.png';
      this.x = 202;
      this.y = 380;
      this.height = 50;
      this.width = 90;
      this.moveUD = 84;
      this.moveLR = 101;
    }
    update() {

    }

    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(event) {
        switch (event) {
          case 'up':
            if (this.y > 0) {
            this.y -= this.moveUD;
            }
            console.log(this.x + ' ' + this.y);
            break;
          case 'down':
            if( this.y < 359) {
            this.y += this.moveUD;
            }
            console.log(this.x + ' ' + this.y);
            break;
          case 'right':
          if (this.x < 403)
            this.x += this.moveLR;
            console.log(this.x + ' ' + this.y);
            break;
          case 'left':
          if( this.x > 100) {
            this.x -= this.moveLR;
          }
            console.log(this.x + ' ' + this.y);
            break;

        }
        console.log(event);
    }
}

class Gem {
  constructor() {
    this.sprite = 'images/Gem Green.png';
    this.x;
    this.y;
    this.coordX = [0,101,202,303,404];
    this.coordY = [44,128, 212];
    this.height = 80;
    this.width = 100;
  }
  update() {
    if (this.x == undefined || this.y == undefined) {
    this.y = this.coordY[Math.floor(Math.random() * Math.floor(3))];
    this.x = this.coordX[Math.floor(Math.random() * Math.floor(4))];

    }
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const scoreEl = document.querySelectorAll('.score');
const startButton = document.getElementById('startButton');
let gem = new Gem();
let player = new Player();
let enemy = new Ladybug();
let allEnemies = [];
let diffic = "normal";
let scorePoints = 0;

function enemySpawner(diffic) {
  let ladybugs;
  switch (diffic) {

    case "normal":
      ladybugs = 3;
      console.log('norma');
      break;

    case "hard":
      ladybugs = 5;
      console.log('hard');
      break;
    case "do not try":
      ladybugs = 100;
      console.log('it works');
      break;
  }
      for (let i = 0 ; i < ladybugs ; i++) {
        allEnemies.push(new Ladybug());
      }
  
}

function modal() {
  const modal = document.getElementById('modal');

  modal.addEventListener('click', function(e){

    if(e.target.tagName == 'INPUT') {
      //Checks if this element contains src image
      if (e.target.nextElementSibling.src) {
      let imgsrc = e.target.nextElementSibling.src;
      let splitImgSrc = imgsrc.split('/');
      //Takes the last src address then adds it to the Player to change character
      player.sprite = "images/" + splitImgSrc[splitImgSrc.length - 1];
      } else {
      diffic = e.target.nextElementSibling.innerText.toLowerCase();;
      
      }
      console.log(diffic);
    }
  });
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

startButton.addEventListener('click', function () {
  enemySpawner(diffic);
});
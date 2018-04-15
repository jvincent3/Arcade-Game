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
        this.cordY = [46, 128, 210];
        this.cordX = [-500, -100, -200, 0];
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        this.x = this.x + (dt * 200);
          if (this.y === undefined) {
            this.y = this.cordY[Math.floor(Math.random() * Math.floor(3))];
            this.x = this.cordX[Math.floor(Math.random() * Math.floor(4))];
          }
          if(this.x > 505) {
            this.x = this.cordX[Math.floor(Math.random() * Math.floor(4))];
            this.y = this.cordY[Math.floor(Math.random() * Math.floor(3))];
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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player();
let enemy = new Ladybug();
let allEnemies = [];

function enemySpawner(amount) {
  for (let i = 0 ; i < amount ; i++) {
    allEnemies.push(new Ladybug())
    console.log('test');
  }
}

enemySpawner(3);

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

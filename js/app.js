// Enemies our player must avoid
class Enemy {
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
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        this.x = this.x + (dt * 200);
          if (this.y === undefined) {
            this.y = Math.floor(Math.random() * Math.floor(404));
          }
          if(this.x > 404) {
            this.x = 0;
            this.y = Math.floor(Math.random() * Math.floor(404));
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
      this.y = 404;
      this.height = 50;
      this.width = 90;
    }
    update() {

    }

    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(event) {
        switch (event) {
          case 'up':
            if (this.y > 100) {
            this.y -= 101;
            }
            console.log(this.x + ' ' + this.y);
            break;
          case 'down':
            if( this.y < 405) {
            this.y += 101;
            }
            console.log(this.x + ' ' + this.y);
            break;
          case 'right':
          if (this.x < 405)
            this.x += 101;
            console.log(this.x + ' ' + this.y);
            break;
          case 'left':
          if( this.x > 100) {
            this.x -= 101;
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
let enemy = new Enemy();
let enemy1 = new Enemy();
let enemy2 = new Enemy();
let allEnemies = [enemy]


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

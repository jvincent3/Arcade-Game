# frontend-nanodegree-arcade-game

This memory game is a Project for every student of the Front-End Web Nano Degree Scholarship. Our goal is to create a clone of the game frogger by using the skills we were tought and creativity.

## Play the game live

Click here: [Play it live and experience the adventure!](https://jvincent3.github.io/Arcade-Game/)

### Play the game locally

__Download and install NodeJS__
To play the game locally you will have to download  [Node.js](https://nodejs.org/en/). To check if you have succesfully downloaded your node you can easily write ```node -v``` in your command prompt, it will show you the current version of your Node.js.

Creating __Node modules__ first you will have to go to your project directory in your commant prompt:

 Once you managed to be in the directy now we can safely call in cmd prompt ```npm init``` to create a package.json, it will ask you for some information but you can easily skip through and use the default options by just pressing enter.
 
 ___Install the http-server package from npm___ 

Install http-server globally using npm to allow you to run a web server from your computer.

Open cmd and enter the follow:
  ```npm install -g http-server```
  
__Start a web server__

Go to the directory of your project with cmd-prompt
  ```cd \documents/github/project-example``` 
Once you're in the directy you can easily start the server by writing the following:
  ```http-server```
You should see something like the following:
  ``` 
  C:\documents/github/project-example>http-server
      Starting up http-server, serving ./
      Available on:
        http://192.168.0.5:8080
        http://127.0.0.1:8080
      Hit CTRL-C to stop the server 
  ```

## Instructions

* On start you will have to choose a character and a level of difficulty to play.

* Keyboard buttons to press to move the character:
  
  * Up Arrow Key: in order to move Up.
  * Down Arrow Key: in order to move Down.
  * Left Arrow Key: in order to move Left.
  * Right Arrow Key: in order to move Right.
  
* If player gets hit by a ladybug player goes back to the start.

* If player grabs a gem, score will increase by 50.

* Reach the water in order to scape from the ladybug attack.


## Dependencies


* __Bootstrap 4__:
* __jQuery__:

/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/content.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/instruction.ts" />
/// <reference path="states/gameover.ts"/>
var stage;
var game;

var ocean;
var ocean2;
var ocean3;

var plane;
var plane2;
var plane3;

var island;
var island2;
var island3;

var clouds = [];
var clouds2 = [];
var clouds3 = [];

var bullets = [];
var bullets2 = [];
var bullets3 = [];

var bulletWasShot = false;
var bulletTurn = 0;
var scoreboard;

var collision;
var collision2;
var collision3;

var tryAgain;
var playButton;
var instructionsButton;

var tryAgain2;
var playButton2;
var instructionsButton2;

var tryAgain3;
var playButton3;
var instructionsButton3;

var currentState;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload() {
    managers.assets.init();
    managers.assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    createjs.Sound.play('background', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
    stage.addEventListener("click", bulletShot);

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

function bulletShot(event) {
    if (currentState == constants.PLAY_STATE) {
        bulletWasShot = true;
    }
    if (currentState == constants.PLAY_STATE2) {
        bulletWasShot = true;
    }
    if (currentState == constants.PLAY_STATE3) {
        bulletWasShot = true;
    }
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
        MediaSource.apply;
    }
}

// Game Loop
function gameLoop(event) {
    currentStateFunction();
    stage.update();
}

function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentState = constants.MENU_STATE;
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentState = constants.PLAY_STATE;
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;

            // instantiate game over screen
            currentState = constants.GAME_OVER_STATE;
            states.gameOver();
            break;

        case constants.INSTRUCTIONS_STATE:
            currentState = constants.INSTRUCTIONS_STATE;
            currentStateFunction = states.instructionsState;
            states.instructions();
            break;

        case constants.PLAY_STATE2:
            // instantiate play screen
            currentState = constants.PLAY_STATE2;
            currentStateFunction = states.playState2;
            states.play2();
            break;

        case constants.PLAY_STATE3:
            // instantiate play screen
            currentState = constants.PLAY_STATE3;
            currentStateFunction = states.playState3;
            states.play3();
            break;
    }
}
//# sourceMappingURL=game.js.map

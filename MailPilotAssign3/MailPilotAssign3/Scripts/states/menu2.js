/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/content.ts" />
var states;
(function (states) {
    function playButtonClicked2(event) {
        stage.removeChild(game);
        plane2.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE2;
        changeState(currentState);
    }
    states.playButtonClicked2 = playButtonClicked2;

    function menuState2() {
        ocean.update();
        plane.update();
    }
    states.menuState2 = menuState2;

    function menu2() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean2 = new objects.Ocean2(stage, game);
        plane2 = new objects.Plane2(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "Universal Treasure Hunter");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        /*playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");*/
        playButton = new objects.Button(stage.canvas.width / 2, 190, "start");
        game.addChild(playButton);
        playButton.addEventListener("click", states.playButtonClicked);

        // Display Instructions button
        instructionsButton2 = new objects.Button(stage.canvas.width / 2, 370, "instructions");
        game.addChild(instructionsButton2);
        instructionsButton2.addEventListener("click", states.instructionsButtonClicked2);

        stage.addChild(game);
    }
    states.menu2 = menu2;
})(states || (states = {}));
//# sourceMappingURL=menu2.js.map

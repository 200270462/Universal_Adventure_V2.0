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
    function playButtonClicked3(event) {
        stage.removeChild(game);
        plane3.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE3;
        changeState(currentState);
    }
    states.playButtonClicked3 = playButtonClicked3;

    function menuState3() {
        ocean3.update();
        plane3.update();
    }
    states.menuState3 = menuState3;

    function menu3() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean3 = new objects.Ocean3(stage, game);
        plane3 = new objects.Plane3(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label3(stage.canvas.width / 2, 40, "Universal Treasure Hunter");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        /*playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");*/
        playButton = new objects.Button(stage.canvas.width / 2, 190, "black_start");
        game.addChild(playButton);
        playButton.addEventListener("click", states.playButtonClicked);

        // Display Instructions button
        instructionsButton3 = new objects.Button(stage.canvas.width / 2, 370, "black_instructions");
        game.addChild(instructionsButton3);
        instructionsButton3.addEventListener("click", states.instructionsButtonClicked3);

        stage.addChild(game);
    }
    states.menu3 = menu3;
})(states || (states = {}));
//# sourceMappingURL=menu3.js.map

/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/content.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    function gameOverState2() {
        ocean.update();
    }
    states.gameOverState2 = gameOverState2;

    // Restart Game when Try Again Button is clicked
    function tryAgainClicked2(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE2;
        changeState(currentState);
    }
    states.tryAgainClicked2 = tryAgainClicked2;

    // Game Over Scene
    function gameOver2() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        /*tryAgain = new objects.Button(stage.canvas.width / 2, 300, "tryAgainButton");*/
        tryAgain = new objects.Button(stage.canvas.width / 2, 300, "black_tryagain");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", states.tryAgainClicked);

        stage.addChild(game);
    }
    states.gameOver2 = gameOver2;
})(states || (states = {}));
//# sourceMappingURL=gameover2.js.map

/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/content.ts" />
module states {
    export function instructionsButtonClicked3(event: MouseEvent) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }

    export function instructionsState3() {
        ocean.update();
        plane.update();
    }

    export function instructions3() {
        var instructionsHeaderLabel: objects.Label;
        var instructionsText: objects.Content;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
        plane = new objects.Plane(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        instructionsHeaderLabel = new objects.Label(stage.canvas.width / 2, stage.canvas.height / 10, "Instructions:");
        game.addChild(instructionsHeaderLabel);

        //Display the instructions text
        instructionsText = new objects.Content(stage.canvas.width / 8, (stage.canvas.height / 10) * 2, constants.INSTRUCTIONS);
        game.addChild(instructionsText);

        // Display Play Again Button
        /*playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");*/
        playButton = new objects.Button(stage.canvas.width / 2, 450, "black_start");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
}  
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/content.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    export function playState3() {
        ocean3.update();
        island3.update();
        plane3.update();
  
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds3[count].update();
        }

        for (var count = 0; count < constants.BULLET_NUM; count++) {
            bullets3[count].update();
        }

        collision3.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane3.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        if (bulletWasShot) {
            if (bulletTurn < constants.BULLET_NUM)
                bulletTurn++;
            else
                bulletTurn = 0;

            bullets3[bulletTurn].reset(plane3.image.x, plane3.image.y);

            bulletWasShot = false;

        }
    }

    // play state Function
    export function play3(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean3 = new objects.Ocean3(stage, game);
        island3 = new objects.Island3(stage, game);
        plane3 = new objects.Plane3(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds3[count] = new objects.Cloud3(stage, game);
        }

        // Create multiple bullets
        for (var count = 0; count < constants.BULLET_NUM; count++) {
            bullets3[count] = new objects.Bullet3(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision3 = new managers.Collision3(plane3, island3, clouds, scoreboard, bullets);

        stage.addChild(game);
    }
}
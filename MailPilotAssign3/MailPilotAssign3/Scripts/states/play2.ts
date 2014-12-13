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
    export function playState2() {
        ocean2.update();
        island2.update();
        plane2.update();
       
  
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds2[count].update();
        }

        for (var count = 0; count < constants.BULLET_NUM; count++) {
            bullets2[count].update();
        }

        collision2.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane2.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        // Change to Level 3 State if player hits 1000 points
        if (scoreboard.score >= 1500) {
            stage.removeChild(game);
            plane2.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE3;
            changeState(currentState);
        }

        if (bulletWasShot) {
            if (bulletTurn < constants.BULLET_NUM)
                bulletTurn++;
            else
                bulletTurn = 0;

            bullets2[bulletTurn].reset(plane2.image.x, plane2.image.y);

            bulletWasShot = false;

        }
    }

    // play state Function
    export function play2(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean2 = new objects.Ocean2(stage, game);
        island2 = new objects.Island2(stage, game);
        plane2 = new objects.Plane2(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds2[count] = new objects.Cloud2(stage, game);
        }

        // Create multiple bullets
        for (var count = 0; count < constants.BULLET_NUM; count++) {
            bullets2[count] = new objects.Bullet2(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision2 = new managers.Collision2(plane2, island2, clouds, scoreboard, bullets);

        stage.addChild(game);
    }
}
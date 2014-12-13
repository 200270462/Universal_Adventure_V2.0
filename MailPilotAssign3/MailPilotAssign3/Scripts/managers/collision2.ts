/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision2 {
        // class variables
        private plane2: objects.Plane2;
        private island2: objects.Island2;
        private clouds = [];
        private bullets = [];
        private scoreboard: objects.Scoreboard;

        constructor(plane2: objects.Plane2, island2: objects.Island2, clouds, scoreboard: objects.Scoreboard, bullets) {
            this.plane2 = plane2;
            this.island2 = island2;
            this.clouds = clouds2;
            this.scoreboard = scoreboard;
            this.bullets = bullets2;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between plane and any cloud object
        private planeAndCloud(cloud2: objects.Cloud2) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.plane2.image.x;
            p1.y = this.plane2.image.y;
            p2.x = cloud2.image.x;
            p2.y = cloud2.image.y;
            if (this.distance(p1, p2) < ((this.plane2.height / 2) + (cloud2.height / 2))) {
                createjs.Sound.play("space_explosion2");
                createjs.Sound.play("enemy_explosion2");
                cloud2.destroy();
                this.scoreboard.lives -= 1;
                cloud2.reset();
            }
        }

        // check collision between bullets and aliens
        private bulletAndAlien(cloud: objects.Cloud, bullets: objects.Bullet) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = bullets.image.x;
            p1.y = bullets.image.y;
            p2.x = cloud.image.x;
            p2.y = cloud.image.y;
            if (this.distance(p1, p2) < ((bullets.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("enemy_explosion2");
                cloud.destroy();
                bullets.destroy();
                this.scoreboard.score += 200;
                cloud.reset();
            }
        }

        // check collision between plane and island
        private planeAndIsland() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.plane2.image.x;
            p1.y = this.plane2.image.y;
            p2.x = this.island2.image.x;
            p2.y = this.island2.image.y;
            if (this.distance(p1, p2) < ((this.plane2.height / 2) + (this.island2.height / 2))) {
                createjs.Sound.play("space_powerup2");
                this.scoreboard.score += 100;
                this.island2.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var x = 0; x < constants.CLOUD_NUM; x++) {
                this.planeAndCloud(this.clouds[x]);

                for (var y = 0; y < constants.BULLET_NUM; y++) {
                    this.bulletAndAlien(this.clouds[x], this.bullets[y]);
                }
            }
            this.planeAndIsland();
        }
    }
} 
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision3 {
        // class variables
        private plane3: objects.Plane3;
        private island3: objects.Island3;
        private clouds = [];
        private bullets = [];
        private scoreboard: objects.Scoreboard;

        constructor(plane3: objects.Plane3, island3: objects.Island3, clouds, scoreboard: objects.Scoreboard, bullets) {
            this.plane3 = plane3;
            this.island3 = island3;
            this.clouds = clouds3;
            this.scoreboard = scoreboard;
            this.bullets = bullets3;
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
        private planeAndCloud(cloud3: objects.Cloud3) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.plane3.image.x;
            p1.y = this.plane3.image.y;
            p2.x = cloud3.image.x;
            p2.y = cloud3.image.y;
            if (this.distance(p1, p2) < ((this.plane3.height / 2) + (cloud3.height / 2))) {
                createjs.Sound.play("space_explosion3");
                createjs.Sound.play("enemy_explosion3");
                cloud3.destroy();
                this.scoreboard.lives -= 1;
                cloud3.reset();
            }
        }

        // check collision between bullets and aliens
        private bulletAndAlien(cloud3: objects.Cloud3, bullets3: objects.Bullet3) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = bullets3.image.x;
            p1.y = bullets3.image.y;
            p2.x = cloud3.image.x;
            p2.y = cloud3.image.y;
            if (this.distance(p1, p2) < ((bullets3.height / 2) + (cloud3.height / 2))) {
                createjs.Sound.play("enemy_explosion3");
                cloud3.destroy();
                bullets3.destroy();
                this.scoreboard.score += 200;
                cloud3.reset();
            }
        }

        // check collision between plane and island
        private planeAndIsland() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.plane3.image.x;
            p1.y = this.plane3.image.y;
            p2.x = this.island3.image.x;
            p2.y = this.island3.image.y;
            if (this.distance(p1, p2) < ((this.plane3.height / 2) + (this.island3.height / 2))) {
                createjs.Sound.play("space_powerup3");
                this.scoreboard.score += 100;
                this.island3.reset();
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
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(plane, island, clouds, scoreboard, bullets) {
            this.clouds = [];
            this.bullets = [];
            this.plane = plane;
            this.island = island;
            this.clouds = clouds;
            this.scoreboard = scoreboard;
            this.bullets = bullets;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between plane and any cloud object
        Collision.prototype.planeAndCloud = function (cloud) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = cloud.image.x;
            p2.y = cloud.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("space_explosion");
                createjs.Sound.play("enemy_explosion");
                cloud.destroy();
                this.scoreboard.lives -= 1;
                cloud.reset();
            }
        };

        // check collision between bullets and aliens
        Collision.prototype.bulletAndAlien = function (cloud, bullets) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = bullets.image.x;
            p1.y = bullets.image.y;
            p2.x = cloud.image.x;
            p2.y = cloud.image.y;
            if (this.distance(p1, p2) < ((bullets.height / 2) + (cloud.height / 2))) {
                createjs.Sound.play("enemy_explosion");
                cloud.destroy();
                bullets.destroy();
                this.scoreboard.score += 200;
                cloud.reset();
            }
        };

        // check collision between plane and island
        Collision.prototype.planeAndIsland = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = this.island.image.x;
            p2.y = this.island.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (this.island.height / 2))) {
                createjs.Sound.play("space_powerup");
                this.scoreboard.score += 100;
                this.island.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var x = 0; x < constants.CLOUD_NUM; x++) {
                this.planeAndCloud(this.clouds[x]);

                for (var y = 0; y < constants.BULLET_NUM; y++) {
                    this.bulletAndAlien(this.clouds[x], this.bullets[y]);
                }
            }
            this.planeAndIsland();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map

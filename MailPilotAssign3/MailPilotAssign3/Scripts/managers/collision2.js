/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision2 = (function () {
        function Collision2(plane2, island2, clouds, scoreboard, bullets) {
            this.clouds = [];
            this.bullets = [];
            this.plane2 = plane2;
            this.island2 = island2;
            this.clouds = clouds2;
            this.scoreboard = scoreboard;
            this.bullets = bullets2;
        }
        // Utility method - Distance calculation between two points
        Collision2.prototype.distance = function (p1, p2) {
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
        Collision2.prototype.planeAndCloud = function (cloud2) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };

        // check collision between bullets and aliens
        Collision2.prototype.bulletAndAlien = function (cloud, bullets) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };

        // check collision between plane and island
        Collision2.prototype.planeAndIsland = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane2.image.x;
            p1.y = this.plane2.image.y;
            p2.x = this.island2.image.x;
            p2.y = this.island2.image.y;
            if (this.distance(p1, p2) < ((this.plane2.height / 2) + (this.island2.height / 2))) {
                createjs.Sound.play("space_powerup2");
                this.scoreboard.score += 100;
                this.island2.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision2.prototype.update = function () {
            for (var x = 0; x < constants.CLOUD_NUM; x++) {
                this.planeAndCloud(this.clouds[x]);

                for (var y = 0; y < constants.BULLET_NUM; y++) {
                    this.bulletAndAlien(this.clouds[x], this.bullets[y]);
                }
            }
            this.planeAndIsland();
        };
        return Collision2;
    })();
    managers.Collision2 = Collision2;
})(managers || (managers = {}));
//# sourceMappingURL=collision2.js.map

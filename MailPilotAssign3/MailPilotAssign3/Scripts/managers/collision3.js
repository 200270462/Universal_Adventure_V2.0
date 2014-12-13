/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision3 = (function () {
        function Collision3(plane3, island3, clouds, scoreboard, bullets) {
            this.clouds = [];
            this.bullets = [];
            this.plane3 = plane3;
            this.island3 = island3;
            this.clouds = clouds3;
            this.scoreboard = scoreboard;
            this.bullets = bullets3;
        }
        // Utility method - Distance calculation between two points
        Collision3.prototype.distance = function (p1, p2) {
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
        Collision3.prototype.planeAndCloud = function (cloud3) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };

        // check collision between bullets and aliens
        Collision3.prototype.bulletAndAlien = function (cloud3, bullets3) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };

        // check collision between plane and island
        Collision3.prototype.planeAndIsland = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane3.image.x;
            p1.y = this.plane3.image.y;
            p2.x = this.island3.image.x;
            p2.y = this.island3.image.y;
            if (this.distance(p1, p2) < ((this.plane3.height / 2) + (this.island3.height / 2))) {
                createjs.Sound.play("space_powerup3");
                this.scoreboard.score += 100;
                this.island3.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision3.prototype.update = function () {
            for (var x = 0; x < constants.CLOUD_NUM; x++) {
                this.planeAndCloud(this.clouds[x]);

                for (var y = 0; y < constants.BULLET_NUM; y++) {
                    this.bulletAndAlien(this.clouds[x], this.bullets[y]);
                }
            }
            this.planeAndIsland();
        };
        return Collision3;
    })();
    managers.Collision3 = Collision3;
})(managers || (managers = {}));
//# sourceMappingURL=collision3.js.map

/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Bullet Class
    var Bullet3 = (function () {
        function Bullet3(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.assets.atlas, "bullet3");
            this.image.x = stage.canvas.width;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            game.addChild(this.image);
        }
        Bullet3.prototype.update = function () {
            if (this.image.x > 0 && stage.canvas.width + this.width > this.image.x) {
                this.image.x += constants.BULLET_SPEED;
            } else {
                //this.destroy();
            }
        };

        Bullet3.prototype.reset = function (x, y) {
            this.bulletSound3 = createjs.Sound.play('space_shot');
            this.image.x = x;
            this.image.y = y;
        };

        Bullet3.prototype.destroy = function () {
            this.bulletSound3.stop();
            this.image.x = -600;
        };
        return Bullet3;
    })();
    objects.Bullet3 = Bullet3;
})(objects || (objects = {}));
//# sourceMappingURL=bullet3.js.map

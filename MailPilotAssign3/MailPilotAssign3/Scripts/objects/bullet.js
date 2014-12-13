/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Bullet Class
    var Bullet = (function () {
        function Bullet(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.assets.atlas, "bullet");
            this.image.x = stage.canvas.width;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            game.addChild(this.image);
        }
        Bullet.prototype.update = function () {
            if (this.image.x > 0 && stage.canvas.width + this.width > this.image.x) {
                this.image.x += constants.BULLET_SPEED;
            } else {
                //this.destroy();
            }
        };

        Bullet.prototype.reset = function (x, y) {
            this.bulletSound = createjs.Sound.play('space_shot');
            this.image.x = x;
            this.image.y = y;
        };

        Bullet.prototype.destroy = function () {
            this.bulletSound.stop();
            this.image.x = -600;
        };
        return Bullet;
    })();
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map

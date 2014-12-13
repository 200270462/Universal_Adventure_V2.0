/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Bullet Class
    var Bullet2 = (function () {
        function Bullet2(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.assets.atlas, "bullet2");
            this.image.x = stage.canvas.width;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            game.addChild(this.image);
        }
        Bullet2.prototype.update = function () {
            if (this.image.x > 0 && stage.canvas.width + this.width > this.image.x) {
                this.image.x += constants.BULLET_SPEED;
            } else {
                //this.destroy();
            }
        };

        Bullet2.prototype.reset = function (x, y) {
            this.bulletSound2 = createjs.Sound.play('space_shot');
            this.image.x = x;
            this.image.y = y;
        };

        Bullet2.prototype.destroy = function () {
            this.bulletSound2.stop();
            this.image.x = -600;
        };
        return Bullet2;
    })();
    objects.Bullet2 = Bullet2;
})(objects || (objects = {}));
//# sourceMappingURL=bullet2.js.map

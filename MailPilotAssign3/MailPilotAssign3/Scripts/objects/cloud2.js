/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Cloud2 = (function () {
        function Cloud2(stage, game) {
            this.stage = stage;
            this.game = game;

            /*this.image = new createjs.Sprite(managers.Assets.atlas, "cloud");*/
            this.image = new createjs.Sprite(managers.assets.atlas, "cloud2");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }
        Cloud2.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x -= this.dx;

            //if (this.image.y < this.stage.canvas.width + this.height) {
            if (this.image.x < -1 * (this.width)) {
                this.reset();
            }
        };

        Cloud2.prototype.reset = function () {
            /*this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
            this.dy = Math.floor(Math.random() * 5 + 5);
            this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.y = -this.height;*/
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = this.width + this.stage.canvas.width;
        };

        Cloud2.prototype.destroy = function () {
            //game.removeChild(this.image);
            this.image.y = 1000;
        };
        return Cloud2;
    })();
    objects.Cloud2 = Cloud2;
})(objects || (objects = {}));
//# sourceMappingURL=cloud2.js.map

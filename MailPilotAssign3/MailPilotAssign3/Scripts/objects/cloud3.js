/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Cloud class
    var Cloud3 = (function () {
        function Cloud3(stage, game) {
            this.stage = stage;
            this.game = game;

            /*this.image = new createjs.Sprite(managers.Assets.atlas, "cloud");*/
            this.image = new createjs.Sprite(managers.assets.atlas, "cloud3");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }
        Cloud3.prototype.update = function () {
            this.image.y += this.dy;
            this.image.x -= this.dx;

            //if (this.image.y < this.stage.canvas.width + this.height) {
            if (this.image.x < -1 * (this.width)) {
                this.reset();
            }
        };

        Cloud3.prototype.reset = function () {
            /*this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
            this.dy = Math.floor(Math.random() * 5 + 5);
            this.dx = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.y = -this.height;*/
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = this.width + this.stage.canvas.width;
        };

        Cloud3.prototype.destroy = function () {
            //game.removeChild(this.image);
            this.image.y = 1000;
        };
        return Cloud3;
    })();
    objects.Cloud3 = Cloud3;
})(objects || (objects = {}));
//# sourceMappingURL=cloud3.js.map

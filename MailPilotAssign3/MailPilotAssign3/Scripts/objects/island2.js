/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Island2 = (function () {
        function Island2(stage, game) {
            this.stage = stage;
            this.game = game;

            /*this.image = new createjs.Sprite(managers.Assets.atlas, "island");*/
            this.image = new createjs.Sprite(managers.assets.atlas, "island2");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Island2.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < -1 * (this.width)) {
                this.reset();
            }
        };

        Island2.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.width + this.stage.canvas.width;
        };

        Island2.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Island2;
    })();
    objects.Island2 = Island2;
})(objects || (objects = {}));
//# sourceMappingURL=island2.js.map

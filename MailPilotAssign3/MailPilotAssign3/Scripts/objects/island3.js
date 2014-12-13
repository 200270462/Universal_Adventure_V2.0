/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Island3 = (function () {
        function Island3(stage, game) {
            this.stage = stage;
            this.game = game;

            /*this.image = new createjs.Sprite(managers.Assets.atlas, "island");*/
            this.image = new createjs.Sprite(managers.assets.atlas, "island3");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Island3.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < -1 * (this.width)) {
                this.reset();
            }
        };

        Island3.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.width + this.stage.canvas.width;
        };

        Island3.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Island3;
    })();
    objects.Island3 = Island3;
})(objects || (objects = {}));
//# sourceMappingURL=island3.js.map

/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Ocean2 = (function () {
        function Ocean2(stage, game) {
            this.stage = stage;
            this.game = game;

            this.image = new createjs.Bitmap(managers.assets.loader.getResult("ocean2"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Ocean2.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < stage.canvas.width - this.width) {
                this.reset();
            }
        };

        Ocean2.prototype.reset = function () {
            this.image.x = 0;
        };

        Ocean2.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Ocean2;
    })();
    objects.Ocean2 = Ocean2;
})(objects || (objects = {}));
//# sourceMappingURL=ocean2.js.map

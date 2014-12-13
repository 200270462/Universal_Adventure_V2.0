/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Ocean3 = (function () {
        function Ocean3(stage, game) {
            this.stage = stage;
            this.game = game;

            /*this.image = new createjs.Bitmap(managers.Assets.loader.getResult("ocean"));*/
            this.image = new createjs.Bitmap(managers.assets.loader.getResult("ocean3"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = 5;

            game.addChild(this.image);
        }
        Ocean3.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < stage.canvas.width - this.width) {
                this.reset();
            }
        };

        Ocean3.prototype.reset = function () {
            this.image.x = 0;
        };

        Ocean3.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Ocean3;
    })();
    objects.Ocean3 = Ocean3;
})(objects || (objects = {}));
//# sourceMappingURL=ocean3.js.map

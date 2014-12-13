/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Plane Class
    var Plane3 = (function () {
        function Plane3(stage, game) {
            this.stage = stage;
            this.game = game;

            /*this.image = new createjs.Sprite(managers.Assets.atlas, "plane");*/
            this.image = new createjs.Sprite(managers.assets.atlas, "plane3");
            this.image.y = 240;
            this.image.x = 75;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);

            //this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
            this.engineSound = createjs.Sound.play('space_engine3', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Plane3.prototype.update = function () {
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;
        };

        Plane3.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Plane3;
    })();
    objects.Plane3 = Plane3;
})(objects || (objects = {}));
//# sourceMappingURL=plane3.js.map

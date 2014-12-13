/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Plane Class
    var Plane2 = (function () {
        function Plane2(stage, game) {
            this.stage = stage;
            this.game = game;

            /*this.image = new createjs.Sprite(managers.Assets.atlas, "plane");*/
            this.image = new createjs.Sprite(managers.assets.atlas, "plane2");
            this.image.y = 240;
            this.image.x = 75;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);

            //this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
            this.engineSound = createjs.Sound.play('space_engine2', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Plane2.prototype.update = function () {
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;
        };

        Plane2.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Plane2;
    })();
    objects.Plane2 = Plane2;
})(objects || (objects = {}));
//# sourceMappingURL=plane2.js.map

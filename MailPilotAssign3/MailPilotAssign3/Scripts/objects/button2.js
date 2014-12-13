var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    var Button2 = (function (_super) {
        __extends(Button2, _super);
        function Button2(x, y, buttonIDString) {
            _super.call(this, managers.assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }
        Button2.prototype.setButtonListeners = function () {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        };

        Button2.prototype.onButtonOver = function () {
            this.alpha = 0.8;
        };

        Button2.prototype.onButtonOut = function () {
            this.alpha = 1;
        };
        return Button2;
    })(createjs.Sprite);
    objects.Button2 = Button2;
})(objects || (objects = {}));
//# sourceMappingURL=button2.js.map

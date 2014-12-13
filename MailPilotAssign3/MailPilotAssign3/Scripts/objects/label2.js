var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var Label2 = (function (_super) {
        __extends(Label2, _super);
        function Label2(x, y, labelText) {
            _super.call(this, labelText, constants.GAME_FONT, constants.FONT_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
        return Label2;
    })(createjs.Text);
    objects.Label2 = Label2;
})(objects || (objects = {}));
//# sourceMappingURL=label2.js.map

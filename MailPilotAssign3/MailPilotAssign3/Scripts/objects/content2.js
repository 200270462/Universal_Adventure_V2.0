var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var Content2 = (function (_super) {
        __extends(Content2, _super);
        function Content2(x, y, contentText) {
            _super.call(this, contentText, constants.INSTRUCT_FONT, constants.FONT_COLOUR);
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.lineWidth = stage.canvas.width - (this.x * 2);
            this.lineHeight = 20;
        }
        return Content2;
    })(createjs.Text);
    objects.Content2 = Content2;
})(objects || (objects = {}));
//# sourceMappingURL=content2.js.map

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var Content = (function (_super) {
        __extends(Content, _super);
        function Content(x, y, contentText) {
            _super.call(this, contentText, constants.INSTRUCT_FONT, constants.FONT_COLOUR);
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.lineWidth = stage.canvas.width - (this.x * 2);
            this.lineHeight = 20;
        }
        return Content;
    })(createjs.Text);
    objects.Content = Content;
})(objects || (objects = {}));
//# sourceMappingURL=content.js.map

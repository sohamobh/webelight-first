/// <reference path="namespace_1.ts"/>
var App;
(function (App) {
    var circle = /** @class */ (function () {
        function circle() {
        }
        circle.prototype.draw = function () {
            console.log("CIRCLE");
        };
        return circle;
    }());
    App.circle = circle;
})(App || (App = {}));

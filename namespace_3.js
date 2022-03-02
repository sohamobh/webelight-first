/// <reference path="namespace_1.ts"/>
var App;
(function (App) {
    var triangle = /** @class */ (function () {
        function triangle() {
        }
        triangle.prototype.draw = function () {
            console.log("TRIANGLE");
        };
        return triangle;
    }());
    App.triangle = triangle;
})(App || (App = {}));

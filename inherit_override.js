var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var baseClass = /** @class */ (function () {
    function baseClass() {
    }
    baseClass.prototype.display = function () {
        console.log('This is Parent class');
    };
    return baseClass;
}());
var subClass = /** @class */ (function (_super) {
    __extends(subClass, _super);
    function subClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subClass.prototype.display = function () {
        _super.prototype.display.call(this); //super keyword will call the display function of parent class
        console.log('This is inherited class..');
    };
    return subClass;
}(baseClass));
var ob1 = new subClass();
ob1.display();

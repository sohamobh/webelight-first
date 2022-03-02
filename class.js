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
var myClass = /** @class */ (function () {
    function myClass() {
        this.lastname = 'Mobh';
    }
    myClass.prototype.getName = function () {
        console.log('My name is ' + this.name);
    };
    myClass.prototype.getAge = function () {
        console.log('My age is ' + this.age);
    };
    return myClass;
}());
var myObj = new myClass();
myObj.name = 'SOHA';
myObj.getName();
myObj.age = 21;
myObj.getAge();
console.log(myObj.lastname);
//class inheritance
//ability to create new classes from existing ones
var parentClass = /** @class */ (function () {
    function parentClass(prop2) {
        this.prop1 = prop2;
    }
    return parentClass;
}());
var childClass = /** @class */ (function (_super) {
    __extends(childClass, _super);
    function childClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    childClass.prototype.display = function () {
        console.log("Value of property 1 is " + this.prop1);
    };
    return childClass;
}(parentClass));
var obj = new childClass(11);
obj.display();

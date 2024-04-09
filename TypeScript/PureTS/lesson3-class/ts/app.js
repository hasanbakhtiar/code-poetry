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
var Car = /** @class */ (function () {
    function Car(brand, year, color) {
        this.ibrand = brand;
        this.iyear = year;
        this.icolor = color;
    }
    Car.prototype.a = function () {
    };
    return Car;
}());
var myCar = new Car("Mercedes 190E", 1990, "white");
console.log(myCar.ibrand);
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(brand, year, color) {
        return _super.call(this, brand, year, color) || this;
    }
    Moto.prototype.showData = function () {
        return this.ibrand;
    };
    return Moto;
}(Car));
var myMoto = new Car("Ducatti ", 1960, "dark");

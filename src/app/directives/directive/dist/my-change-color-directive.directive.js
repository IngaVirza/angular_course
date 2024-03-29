"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyChangeColorDirectiveDirective = void 0;
var core_1 = require("@angular/core");
var MyChangeColorDirectiveDirective = /** @class */ (function () {
    function MyChangeColorDirectiveDirective(el) {
        this._el = el;
    }
    MyChangeColorDirectiveDirective.prototype.ngAfterViewInit = function () {
        this.changeColor(this._el);
    };
    MyChangeColorDirectiveDirective.prototype.changeColor = function (el) {
        var _this = this;
        if (this.colors && this.colors.length !== 0) {
            setInterval(function () {
                el.nativeElement.style.color = _this.colors[Math.floor(Math.random() * _this.colors.length)];
            }, 2000);
        }
    };
    __decorate([
        core_1.Input('myChangeColor')
    ], MyChangeColorDirectiveDirective.prototype, "colors");
    MyChangeColorDirectiveDirective = __decorate([
        core_1.Directive({
            selector: '[myChangeColor]'
        })
    ], MyChangeColorDirectiveDirective);
    return MyChangeColorDirectiveDirective;
}());
exports.MyChangeColorDirectiveDirective = MyChangeColorDirectiveDirective;

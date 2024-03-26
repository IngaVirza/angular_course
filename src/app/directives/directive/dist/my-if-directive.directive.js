"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyIfDirectiveDirective = void 0;
var core_1 = require("@angular/core");
var MyIfDirectiveDirective = /** @class */ (function () {
    function MyIfDirectiveDirective(vcr, templateRef) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this._show = false;
    }
    Object.defineProperty(MyIfDirectiveDirective.prototype, "myIf", {
        set: function (show) {
            this._show = show;
            this.displayTemplate();
        },
        enumerable: false,
        configurable: true
    });
    MyIfDirectiveDirective.prototype.ngOnInit = function () {
        this.displayTemplate();
    };
    MyIfDirectiveDirective.prototype.displayTemplate = function () {
        this.vcr.clear();
        if (this._show) {
            this.vcr.createEmbeddedView(this.templateRef);
        }
    };
    __decorate([
        core_1.Input()
    ], MyIfDirectiveDirective.prototype, "myIf");
    MyIfDirectiveDirective = __decorate([
        core_1.Directive({
            selector: '[myIf]'
        })
    ], MyIfDirectiveDirective);
    return MyIfDirectiveDirective;
}());
exports.MyIfDirectiveDirective = MyIfDirectiveDirective;

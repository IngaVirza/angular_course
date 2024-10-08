"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyCalculatorModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var my_calculator_component_1 = require("./components/my-calculator/my-calculator.component");
var MyCalculatorModule = /** @class */ (function () {
    function MyCalculatorModule() {
    }
    MyCalculatorModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, platform_browser_1.BrowserModule],
            exports: [my_calculator_component_1.MyCalculatorComponent],
            declarations: [my_calculator_component_1.MyCalculatorComponent],
            providers: []
        })
    ], MyCalculatorModule);
    return MyCalculatorModule;
}());
exports.MyCalculatorModule = MyCalculatorModule;

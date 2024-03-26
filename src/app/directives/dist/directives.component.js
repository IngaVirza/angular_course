"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DirectivesPageComponent = void 0;
var core_1 = require("@angular/core");
var DirectivesPageComponent = /** @class */ (function () {
    function DirectivesPageComponent() {
        // ngFor
        this.colors = ['red', 'blue', 'green', 'yellow'];
        // ngIf
        this.isShow = true;
        //ngSwitch
        this.currentColor = this.colors[0];
        // ngStyle
        this.elementStyle = {
            color: 'red',
            opacity: 0.5
        };
        // ngClass
    }
    DirectivesPageComponent = __decorate([
        core_1.Component({
            selector: 'app-directives',
            templateUrl: './directives.component.html',
            styleUrl: './directives.component.scss'
        })
    ], DirectivesPageComponent);
    return DirectivesPageComponent;
}());
exports.DirectivesPageComponent = DirectivesPageComponent;

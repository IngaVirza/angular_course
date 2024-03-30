"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PipesComponent = void 0;
var core_1 = require("@angular/core");
var PipesComponent = /** @class */ (function () {
    function PipesComponent() {
        this.name = 'Inga loves Angular';
        this.surname = 'Developer';
        this.date = new Date().toDateString();
    }
    PipesComponent = __decorate([
        core_1.Component({
            selector: 'app-pipes',
            templateUrl: './pipes.component.html',
            styleUrl: './pipes.component.scss'
        })
    ], PipesComponent);
    return PipesComponent;
}());
exports.PipesComponent = PipesComponent;

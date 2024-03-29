"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChildComponent = void 0;
var core_1 = require("@angular/core");
var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.eventChange = new core_1.EventEmitter();
        console.log('%cConstructor', 'color: red');
    }
    ChildComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        console.log('Changes');
    };
    ChildComponent.prototype.ngOnInit = function () {
        console.log('%cOnInit', 'color: blue');
        this.tempTitle = this.title;
    };
    ChildComponent.prototype.ngDoCheck = function () {
        console.log('%cDoCheck', 'color: orange');
    };
    ChildComponent.prototype.ngAfterContentInit = function () {
        console.log('%cContent', 'color: yellow');
    };
    ChildComponent.prototype.ngAfterViewInit = function () {
        console.log('%cViewInit', 'color: violet');
    };
    ChildComponent.prototype.ngOnDestroy = function () {
        console.log('%cOnDestroy', 'color: green');
    };
    ChildComponent.prototype.clickHandler = function () {
        this.tempTitle = 'I am mutated';
        this.eventChange.emit(this.tempTitle);
    };
    __decorate([
        core_1.Input()
    ], ChildComponent.prototype, "title");
    __decorate([
        core_1.Output()
    ], ChildComponent.prototype, "eventChange");
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'app-child',
            templateUrl: './child.component.html',
            styleUrl: './child.component.scss'
        })
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DecoratorsPageComponent = void 0;
var core_1 = require("@angular/core");
var child_decorator_component_1 = require("../child-decorator/child-decorator.component");
var DecoratorsPageComponent = /** @class */ (function () {
    function DecoratorsPageComponent() {
        this.arr = [1, 2, 3, 4, 5];
        this.isShow = true;
    }
    DecoratorsPageComponent.prototype.ngAfterViewInit = function () {
        console.log(this.paragraph);
        console.log(this.paragraphTemplate);
        console.log(this.childComponent);
        console.log(this.childComponents);
    };
    __decorate([
        core_1.ViewChild('paragraph, sddf', { read: '' })
    ], DecoratorsPageComponent.prototype, "paragraph");
    __decorate([
        core_1.ViewChild('paragraphTemplate')
    ], DecoratorsPageComponent.prototype, "paragraphTemplate");
    __decorate([
        core_1.ViewChild(child_decorator_component_1.ChildDecoratorComponent)
    ], DecoratorsPageComponent.prototype, "childComponent");
    __decorate([
        core_1.ViewChildren(child_decorator_component_1.ChildDecoratorComponent)
    ], DecoratorsPageComponent.prototype, "childComponents");
    DecoratorsPageComponent = __decorate([
        core_1.Component({
            selector: 'app-decorators-page',
            templateUrl: './decorators-page.component.html',
            styleUrl: './decorators-page.component.scss'
        })
    ], DecoratorsPageComponent);
    return DecoratorsPageComponent;
}());
exports.DecoratorsPageComponent = DecoratorsPageComponent;

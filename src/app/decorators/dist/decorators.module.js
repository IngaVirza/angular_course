"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DecoratorsModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var decorators_page_component_1 = require("./components/decorators-page/decorators-page.component");
var decorators_routing_module_1 = require("./decorators-routing.module");
var child_decorator_component_1 = require("./components/child-decorator/child-decorator.component");
var DecoratorsModule = /** @class */ (function () {
    function DecoratorsModule() {
    }
    DecoratorsModule = __decorate([
        core_1.NgModule({
            declarations: [
                decorators_page_component_1.DecoratorsPageComponent,
                child_decorator_component_1.ChildDecoratorComponent
            ],
            imports: [common_1.CommonModule, decorators_routing_module_1.DecoratorsRouting]
        })
    ], DecoratorsModule);
    return DecoratorsModule;
}());
exports.DecoratorsModule = DecoratorsModule;

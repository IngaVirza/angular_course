"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DirectivesModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var my_change_color_directive_directive_1 = require("./directive/my-change-color-directive.directive");
var directives_routings_module_1 = require("./directives-routings.module");
var directives_component_1 = require("./directives.component");
var my_if_directive_directive_1 = require("./directive/my-if-directive.directive");
var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        core_1.NgModule({
            declarations: [directives_component_1.DirectivesPageComponent, my_change_color_directive_directive_1.MyChangeColorDirectiveDirective, my_if_directive_directive_1.MyIfDirectiveDirective],
            imports: [common_1.CommonModule, directives_routings_module_1.DirectivesRouting],
            exports: []
        })
    ], DirectivesModule);
    return DirectivesModule;
}());
exports.DirectivesModule = DirectivesModule;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LifeCycleModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var life_cycle_routing_module_1 = require("./life-cycle-routing.module");
var parent_component_1 = require("./parent/parent.component");
var child_component_1 = require("./child/child.component");
var LifeCycleModule = /** @class */ (function () {
    function LifeCycleModule() {
    }
    LifeCycleModule = __decorate([
        core_1.NgModule({
            declarations: [
                parent_component_1.ParentComponent,
                child_component_1.ChildComponent
            ],
            imports: [
                common_1.CommonModule,
                life_cycle_routing_module_1.LifeCycleRouting
            ],
            exports: []
        })
    ], LifeCycleModule);
    return LifeCycleModule;
}());
exports.LifeCycleModule = LifeCycleModule;

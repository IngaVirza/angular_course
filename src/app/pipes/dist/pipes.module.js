"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PipeModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var pipes_component_1 = require("./components/pipes/pipes.component");
var pipes_routing_module_1 = require("./pipes-routing.module");
var pipe_pipe_1 = require("./pipe/pipe.pipe");
var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        core_1.NgModule({
            declarations: [pipes_component_1.PipesComponent, pipe_pipe_1.MyCustomPipe],
            imports: [common_1.CommonModule, pipes_routing_module_1.PipesRouting]
        })
    ], PipeModule);
    return PipeModule;
}());
exports.PipeModule = PipeModule;

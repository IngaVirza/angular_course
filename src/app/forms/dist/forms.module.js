"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormsUIModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_component_1 = require("./components/forms/forms.component");
var forms_routing_module_1 = require("./forms-routing.module");
var rate_component_1 = require("./components/rate/rate.component");
var FormsUIModule = /** @class */ (function () {
    function FormsUIModule() {
    }
    FormsUIModule = __decorate([
        core_1.NgModule({
            declarations: [forms_component_1.FormsComponent, rate_component_1.RateComponent],
            imports: [common_1.CommonModule, forms_routing_module_1.FormsRouting, forms_1.ReactiveFormsModule, forms_1.FormsModule]
        })
    ], FormsUIModule);
    return FormsUIModule;
}());
exports.FormsUIModule = FormsUIModule;

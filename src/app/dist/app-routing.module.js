"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var my_calculator_component_1 = require("./calculator/components/my-calculator/my-calculator.component");
var empty_route_component_1 = require("./components/empty-route/empty-route.component");
var routes = [
    {
        path: 'calculator',
        component: my_calculator_component_1.MyCalculatorComponent
    },
    {
        path: '',
        redirectTo: 'calculator',
        pathMatch: 'full'
    },
    {
        path: 'directives',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./directives/directives.module'); }).then(function (m) { return m.DirectivesModule; });
        }
    },
    {
        path: 'requests',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./requests/request-module.module'); }).then(function (m) { return m.RequestModule; });
        }
    },
    {
        path: 'life-cycle',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./lifecycle/components/life-cycle.module'); }).then(function (m) { return m.LifeCycleModule; });
        }
    },
    {
        path: 'pipes',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pipes/pipes.module'); }).then(function (m) { return m.PipeModule; });
        }
    },
    {
        path: 'forms',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./forms/forms.module'); }).then(function (m) { return m.FormsUIModule; });
        }
    },
    {
        path: 'decorators',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./decorators/decorators.module'); }).then(function (m) { return m.DecoratorsModule; });
        }
    },
    {
        path: '**',
        component: empty_route_component_1.MyEmptyPage
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequestModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var request_routing_module_1 = require("./request-routing.module");
var post_service_1 = require("./services/post.service");
var post_list_component_1 = require("./components/post-list/post-list.component");
var post_item_component_1 = require("./components/post-item/post-item.component");
var RequestModule = /** @class */ (function () {
    function RequestModule() {
    }
    RequestModule = __decorate([
        core_1.NgModule({
            declarations: [post_list_component_1.PostListComponent, post_item_component_1.PostItemComponent],
            imports: [common_1.CommonModule, request_routing_module_1.RequestRouting, http_1.HttpClientModule],
            providers: [post_service_1.PostService]
        })
    ], RequestModule);
    return RequestModule;
}());
exports.RequestModule = RequestModule;

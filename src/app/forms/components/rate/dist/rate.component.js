"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RateComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RateComponent = /** @class */ (function () {
    function RateComponent() {
        this.ratesArr = [];
        this.disabled = false;
        this.touched = false;
        this.onChange = function (currentRate) { };
        this.onTouched = function () { };
    }
    RateComponent_1 = RateComponent;
    RateComponent.prototype.ngOnInit = function () {
        this.fillRatesArr();
    };
    RateComponent.prototype.onRate = function (index) {
        this.markAsTouched();
        if (!this.disabled) {
            this.currentRate = index;
            this.onChange(this.currentRate);
        }
    };
    // ControlValueAccesor methods start
    RateComponent.prototype.writeValue = function (rate) {
        this.currentRate = rate;
    };
    RateComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RateComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RateComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    RateComponent.prototype.markAsTouched = function () {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    };
    // ControlValueAccesor methods end
    RateComponent.prototype.fillRatesArr = function () {
        var cond = true;
        var count = 1;
        while (cond) {
            this.ratesArr.push(count);
            if (count === this.options.rates) {
                cond = false;
            }
            else {
                count++;
            }
        }
    };
    var RateComponent_1;
    __decorate([
        core_1.Input()
    ], RateComponent.prototype, "options");
    RateComponent = RateComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-rate',
            templateUrl: './rate.component.html',
            styleUrl: './rate.component.scss',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    multi: true,
                    useExisting: RateComponent_1
                }
            ]
        })
    ], RateComponent);
    return RateComponent;
}());
exports.RateComponent = RateComponent;

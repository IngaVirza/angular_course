"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalculatorComponent = void 0;
var core_1 = require("@angular/core");
var CalcOperations;
(function (CalcOperations) {
    CalcOperations["plus"] = "+";
    CalcOperations["minus"] = "-";
    CalcOperations["multiply"] = "*";
    CalcOperations["divide"] = "/";
})(CalcOperations || (CalcOperations = {}));
var CalcModifiers;
(function (CalcModifiers) {
    CalcModifiers["none"] = "none";
    CalcModifiers["sin"] = "sin";
    CalcModifiers["cos"] = "cos";
    CalcModifiers["square"] = "square";
})(CalcModifiers || (CalcModifiers = {}));
var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
        this.calcOperations = CalcOperations;
        this.calcModifiers = CalcModifiers;
        this.calcGroups = [
            {
                first: {
                    value: 5,
                    modificator: CalcModifiers.none
                },
                second: {
                    value: 5,
                    modificator: CalcModifiers.none
                },
                operation: CalcOperations.plus
            },
        ];
        this.initialCalcGroups = this.calcGroups;
        this.history = [];
        this.operationsBetweenGroups = [];
    }
    CalculatorComponent.prototype.addGroup = function () {
        this.calcGroups.push({
            first: {
                value: 0,
                modificator: CalcModifiers.none
            },
            second: {
                value: 0,
                modificator: CalcModifiers.none
            },
            operation: CalcOperations.plus
        });
        this.operationsBetweenGroups.push(CalcOperations.plus);
    };
    CalculatorComponent.prototype.removeGroup = function (index) {
        this.calcGroups.splice(index, 1);
    };
    CalculatorComponent.prototype.calcGroup = function () {
        var _this = this;
        var result = 0;
        var tempHistory = [];
        this.calcGroups.forEach(function (group, i) {
            if (i === 0) {
                result = _this.calc(_this.caclValueWithModif(group.first), _this.caclValueWithModif(group.second), group.operation);
            }
            else {
                var tempResult = _this.calc(_this.caclValueWithModif(group.first), _this.caclValueWithModif(group.second), group.operation);
                result = _this.calc(result, tempResult, _this.operationsBetweenGroups[i - 1]);
            }
            tempHistory.push("\n        (\n          " + (group.first.modificator !== CalcModifiers.none
                ? group.first.modificator
                : '') + " " + group.first.value + "\n          " + group.operation + "\n          " + (group.second.modificator !== CalcModifiers.none
                ? group.second.modificator
                : '') + " " + group.second.value + "\n          )\n        ");
        });
        tempHistory.push("= " + result);
        this.history.push(tempHistory.join(' '));
        this.result = result;
    };
    CalculatorComponent.prototype.caclValueWithModif = function (value) {
        switch (value.modificator) {
            case CalcModifiers.none:
                return value.value;
            case CalcModifiers.cos:
                return Math.cos(value.value);
            case CalcModifiers.sin:
                return Math.sin(value.value);
            case CalcModifiers.square:
                return Math.pow(value.value, 2);
        }
    };
    CalculatorComponent.prototype.calc = function (first, second, operation) {
        switch (operation) {
            case CalcOperations.plus:
                return first + second;
            case CalcOperations.minus:
                return first - second;
            case CalcOperations.multiply:
                return first * second;
            case CalcOperations.divide:
                return first / second;
        }
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'app-calculator',
            templateUrl: './calculator.component.html',
            styleUrl: './calculator.component.scss'
        })
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;

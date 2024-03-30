"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormsComponent = exports.conformPassword = exports.checkRegExp = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
function checkRegExp(regExp) {
    return function (control) {
        var forbidden = regExp.test(control.value);
        return !forbidden ? { forbiddenValue: { value: control.value } } : null;
    };
}
exports.checkRegExp = checkRegExp;
exports.conformPassword = function (control) {
    return control.value.password_one === control.value.password_two
        ? null
        : { PasswordDoNotMatch: true };
};
var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.myForm = new forms_1.FormGroup({
            login: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.validatorsForm = new forms_1.FormGroup({
            mail: new forms_1.FormControl('', checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)),
            password_one: new forms_1.FormControl(''),
            password_two: new forms_1.FormControl('')
        }, exports.conformPassword);
    }
    FormsComponent.prototype.ngOnInit = function () { };
    FormsComponent.prototype.handleValue = function () {
        if (this.myForm.valid) {
            console.log(this.myForm.value);
        }
        else {
            alert('Форма не валидна');
        }
    };
    FormsComponent = __decorate([
        core_1.Component({
            selector: 'app-forms',
            templateUrl: './forms.component.html',
            styleUrl: './forms.component.scss'
        })
    ], FormsComponent);
    return FormsComponent;
}());
exports.FormsComponent = FormsComponent;

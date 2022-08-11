import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../_services/auth.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function RegisterComponent_form_3_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Numele de utilizator este obligatoriu");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_form_3_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Numele de utilizator trebuie sa aiba cel putin 3 de caractere ");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_form_3_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Nume de utilizator trebuie sa aiba maxim 20 de caractere ");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_form_3_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, RegisterComponent_form_3_div_7_div_1_Template, 2, 0, "div", 21);
    i0.ɵɵtemplate(2, RegisterComponent_form_3_div_7_div_2_Template, 2, 0, "div", 21);
    i0.ɵɵtemplate(3, RegisterComponent_form_3_div_7_div_3_Template, 2, 0, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.errors.maxlength);
} }
function RegisterComponent_form_3_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Email is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_form_3_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Email must be a valid email address ");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_form_3_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, RegisterComponent_form_3_div_13_div_1_Template, 2, 0, "div", 21);
    i0.ɵɵtemplate(2, RegisterComponent_form_3_div_13_div_2_Template, 2, 0, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r5.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r5.errors.email);
} }
function RegisterComponent_form_3_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_form_3_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Password must be at least 6 characters ");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_form_3_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, RegisterComponent_form_3_div_19_div_1_Template, 2, 0, "div", 21);
    i0.ɵɵtemplate(2, RegisterComponent_form_3_div_19_div_2_Template, 2, 0, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r7 = i0.ɵɵreference(18);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r7.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r7.errors.minlength);
} }
function RegisterComponent_form_3_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1, " \u00CEnregistrarea a e\u0219uat!");
    i0.ɵɵelement(2, "br");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r9.errorMessage, " ");
} }
function RegisterComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 5, 6);
    i0.ɵɵlistener("ngSubmit", function RegisterComponent_form_3_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r18); const _r2 = i0.ɵɵreference(1); const ctx_r17 = i0.ɵɵnextContext(); return _r2.form.valid && ctx_r17.onSubmit(); });
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "label", 8);
    i0.ɵɵtext(4, "Nume de utilizator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 9, 10);
    i0.ɵɵlistener("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.form.username = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RegisterComponent_form_3_div_7_Template, 4, 3, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵelementStart(9, "label", 12);
    i0.ɵɵtext(10, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 13, 14);
    i0.ɵɵlistener("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.form.email = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, RegisterComponent_form_3_div_13_Template, 3, 2, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 7);
    i0.ɵɵelementStart(15, "label", 15);
    i0.ɵɵtext(16, "Parola");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 16, 17);
    i0.ɵɵlistener("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.form.password = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(19, RegisterComponent_form_3_div_19_Template, 3, 2, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 7);
    i0.ɵɵelementStart(21, "button", 18);
    i0.ɵɵtext(22, "\u00CEnregistreaz\u0103-te!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, RegisterComponent_form_3_div_23_Template, 4, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = i0.ɵɵreference(1);
    const _r3 = i0.ɵɵreference(6);
    const _r5 = i0.ɵɵreference(12);
    const _r7 = i0.ɵɵreference(18);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.form.username);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r3.errors && _r2.submitted);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r0.form.email);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r5.errors && _r2.submitted);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r0.form.password);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r7.errors && _r2.submitted);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", _r2.submitted && ctx_r0.isSignUpFailed);
} }
function RegisterComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtext(1, " \u00CEnregistrarea a fost un succes! ");
    i0.ɵɵelementEnd();
} }
export class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.form = {
            username: null,
            email: null,
            password: null
        };
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        const { username, email, password } = this.form;
        this.authService.register(username, email, password).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
        }, err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["app-register"]], decls: 11, vars: 2, consts: [[1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert-danger", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵtemplate(3, RegisterComponent_form_3_Template, 24, 7, "form", 3);
        i0.ɵɵtemplate(4, RegisterComponent_div_4_Template, 2, 0, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "br");
        i0.ɵɵelement(6, "br");
        i0.ɵɵelement(7, "br");
        i0.ɵɵelement(8, "br");
        i0.ɵɵelement(9, "br");
        i0.ɵɵelement(10, "br");
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.isSuccessful);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isSuccessful);
    } }, directives: [i2.NgIf, i3.ɵNgNoValidate, i3.NgControlStatusGroup, i3.NgForm, i3.DefaultValueAccessor, i3.RequiredValidator, i3.MinLengthValidator, i3.MaxLengthValidator, i3.NgControlStatus, i3.NgModel, i3.EmailValidator], styles: ["label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  -moz-border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  border-radius: 2px;\r\n  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card[_ngcontent-%COMP%] {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  -moz-border-radius: 50%;\r\n  -webkit-border-radius: 50%;\r\n  border-radius: 50%;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();
//# sourceMappingURL=register.component.js.map
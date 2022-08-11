import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../_services/auth.service";
import * as i2 from "../_services/token-storage.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function LoginComponent_form_3_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1, " Username is required! ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_form_3_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Password is required");
    i0.ɵɵelementEnd();
} }
function LoginComponent_form_3_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Password must be at least 6 characters ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_form_3_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, LoginComponent_form_3_div_13_div_1_Template, 2, 0, "div", 17);
    i0.ɵɵtemplate(2, LoginComponent_form_3_div_13_div_2_Template, 2, 0, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r5.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r5.errors.minlength);
} }
function LoginComponent_form_3_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Login failed: ", ctx_r7.errorMessage, " ");
} }
function LoginComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 5, 6);
    i0.ɵɵlistener("ngSubmit", function LoginComponent_form_3_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r11); const _r2 = i0.ɵɵreference(1); const ctx_r10 = i0.ɵɵnextContext(); return _r2.form.valid && ctx_r10.onSubmit(); });
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "label", 8);
    i0.ɵɵtext(4, "Nume de utilizator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 9, 10);
    i0.ɵɵlistener("ngModelChange", function LoginComponent_form_3_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.form.username = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, LoginComponent_form_3_div_7_Template, 2, 0, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵelementStart(9, "label", 12);
    i0.ɵɵtext(10, "Parola");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 13, 14);
    i0.ɵɵlistener("ngModelChange", function LoginComponent_form_3_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.form.password = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, LoginComponent_form_3_div_13_Template, 3, 2, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 7);
    i0.ɵɵelementStart(15, "button", 15);
    i0.ɵɵtext(16, " Autentifica-te ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 7);
    i0.ɵɵtemplate(18, LoginComponent_form_3_div_18_Template, 2, 1, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "br");
    i0.ɵɵelement(20, "br");
    i0.ɵɵelement(21, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = i0.ɵɵreference(1);
    const _r3 = i0.ɵɵreference(6);
    const _r5 = i0.ɵɵreference(12);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.form.username);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r3.errors && _r2.submitted);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r0.form.password);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r5.errors && _r2.submitted);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", _r2.submitted && ctx_r0.isLoginFailed);
} }
function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Autentificat ca ", ctx_r1.roles, ". ");
} }
export class LoginComponent {
    constructor(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {
            username: null,
            password: null
        };
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    }
    onSubmit() {
        const { username, password } = this.form;
        this.authService.login(username, password).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
        }, err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.TokenStorageService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 11, vars: 2, consts: [[1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"], [1, "alert", "alert-success"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "img", 2);
        i0.ɵɵtemplate(3, LoginComponent_form_3_Template, 22, 5, "form", 3);
        i0.ɵɵtemplate(4, LoginComponent_div_4_Template, 2, 1, "div", 4);
        i0.ɵɵelement(5, "br");
        i0.ɵɵelement(6, "br");
        i0.ɵɵelement(7, "br");
        i0.ɵɵelement(8, "br");
        i0.ɵɵelement(9, "br");
        i0.ɵɵelement(10, "br");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.isLoggedIn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isLoggedIn);
    } }, directives: [i3.NgIf, i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.NgForm, i4.DefaultValueAccessor, i4.RequiredValidator, i4.NgControlStatus, i4.NgModel, i4.MinLengthValidator], styles: ["label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  -moz-border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  border-radius: 2px;\r\n  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card[_ngcontent-%COMP%] {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  -moz-border-radius: 50%;\r\n  -webkit-border-radius: 50%;\r\n  border-radius: 50%;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.TokenStorageService }]; }, null); })();
//# sourceMappingURL=login.component.js.map
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../_services/token-storage.service";
import * as i2 from "@angular/common";
function ProfileComponent_div_0_li_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const role_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", role_r4, " ");
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "header", 3);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, " Profil ");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "br");
    i0.ɵɵtext(10, " Datele tale sunt: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div");
    i0.ɵɵelementStart(12, "p");
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14, "Email:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17, "Roles:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "ul");
    i0.ɵɵtemplate(19, ProfileComponent_div_0_li_19_Template, 2, 1, "li", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.currentUser.username);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Buna, ", ctx_r0.currentUser.username, "! ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.currentUser.email, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r0.currentUser.roles);
} }
function ProfileComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Te rog autentifica-te.\n");
} }
export class ProfileComponent {
    constructor(token) {
        this.token = token;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(i0.ɵɵdirectiveInject(i1.TokenStorageService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileComponent, selectors: [["app-profile"]], decls: 9, vars: 2, consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["loggedOut", ""], [1, "container"], [1, "jumbotron"], [4, "ngFor", "ngForOf"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ProfileComponent_div_0_Template, 20, 4, "div", 0);
        i0.ɵɵtemplate(1, ProfileComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelement(3, "br");
        i0.ɵɵelement(4, "br");
        i0.ɵɵelement(5, "br");
        i0.ɵɵelement(6, "br");
        i0.ɵɵelement(7, "br");
        i0.ɵɵelement(8, "br");
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.currentUser)("ngIfElse", _r1);
    } }, directives: [i2.NgIf, i2.NgForOf], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileComponent, [{
        type: Component,
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: i1.TokenStorageService }]; }, null); })();
//# sourceMappingURL=profile.component.js.map
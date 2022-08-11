import { Component, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./_services/token-storage.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function AppComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 13);
    i0.ɵɵtext(1, "Model 3D");
    i0.ɵɵelementEnd();
} }
function AppComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 14);
    i0.ɵɵtext(1, "Test de Personalitate");
    i0.ɵɵelementEnd();
} }
function AppComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 15);
    i0.ɵɵelementStart(1, "li", 4);
    i0.ɵɵelementStart(2, "a", 16);
    i0.ɵɵtext(3, "\u00CEnregistrez\u0103-te");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 4);
    i0.ɵɵelementStart(5, "a", 17);
    i0.ɵɵtext(6, "Autentific\u0103-te");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AppComponent_ul_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 15);
    i0.ɵɵelementStart(1, "li", 4);
    i0.ɵɵelementStart(2, "a", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 4);
    i0.ɵɵelementStart(5, "a", 19);
    i0.ɵɵlistener("click", function AppComponent_ul_13_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.logout(); });
    i0.ɵɵtext(6, "Ie\u0219ire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.username);
} }
export class AppComponent {
    constructor(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
        this.roles = [];
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
    }
    ngOnInit() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ADMIN');
            this.showModeratorBoard = this.roles.includes('OWNER');
            this.username = user.username;
        }
    }
    logout() {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.TokenStorageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 36, vars: 4, consts: [["id", "app"], [1, "navbar", "navbar-expand", "navbar-dark", "bg"], ["href", "#", 1, "navbar-brand"], ["routerLinkActive", "active", 1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "/home", "routerLink", "home", 1, "nav-link"], ["href", "/user", "class", "nav-link", "routerLink", "user", 4, "ngIf"], ["href", "/test", "class", "nav-link", "routerLink", "test", 4, "ngIf"], ["class", "navbar-nav ml-auto", 4, "ngIf"], [1, "container"], [1, "bg", "text-center", "text-white"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "#", 1, "text-white"], ["href", "/user", "routerLink", "user", 1, "nav-link"], ["href", "/test", "routerLink", "test", 1, "nav-link"], [1, "navbar-nav", "ml-auto"], ["href", "/register", "routerLink", "register", 1, "nav-link"], ["href", "/login", "routerLink", "login", 1, "nav-link"], ["href", "/profile", "routerLink", "profile", 1, "nav-link"], ["href", "", 1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "nav", 1);
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵtext(3, "FunAnimals");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ul", 3);
        i0.ɵɵelementStart(5, "li", 4);
        i0.ɵɵelementStart(6, "a", 5);
        i0.ɵɵtext(7, "Acas\u0103 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "li", 4);
        i0.ɵɵtemplate(9, AppComponent_a_9_Template, 2, 0, "a", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "li", 4);
        i0.ɵɵtemplate(11, AppComponent_a_11_Template, 2, 0, "a", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, AppComponent_ul_12_Template, 7, 0, "ul", 8);
        i0.ɵɵtemplate(13, AppComponent_ul_13_Template, 7, 1, "ul", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "br");
        i0.ɵɵelement(15, "br");
        i0.ɵɵelementStart(16, "div", 9);
        i0.ɵɵelement(17, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "br");
        i0.ɵɵelement(19, "br");
        i0.ɵɵelement(20, "br");
        i0.ɵɵelement(21, "br");
        i0.ɵɵelement(22, "br");
        i0.ɵɵelement(23, "br");
        i0.ɵɵelement(24, "br");
        i0.ɵɵelement(25, "br");
        i0.ɵɵelement(26, "br");
        i0.ɵɵelement(27, "br");
        i0.ɵɵelement(28, "br");
        i0.ɵɵelement(29, "br");
        i0.ɵɵelement(30, "br");
        i0.ɵɵelementStart(31, "footer", 10);
        i0.ɵɵelementStart(32, "div", 11);
        i0.ɵɵtext(33, " \u00A9 2021 Copyright: ");
        i0.ɵɵelementStart(34, "a", 12);
        i0.ɵɵtext(35, "FunAnimals");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.isLoggedIn);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isLoggedIn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isLoggedIn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isLoggedIn);
    } }, directives: [i2.RouterLinkActive, i2.RouterLinkWithHref, i3.NgIf, i2.RouterOutlet], styles: [".bg[_ngcontent-%COMP%]{\r\n  background-color: #8383af !important;\r\n}"] });
AppComponent.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppComponent, factory: AppComponent.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }, {
        type: Injectable
    }], function () { return [{ type: i1.TokenStorageService }]; }, null); })();
//# sourceMappingURL=app.component.js.map
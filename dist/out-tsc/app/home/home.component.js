import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../services/cat.service";
import * as i2 from "../_services/token-storage.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function HomeComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Bine ai venit, ", ctx_r0.username, " !");
} }
function HomeComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1");
    i0.ɵɵtext(1, "Bine ai venit, Str\u0103ine !");
    i0.ɵɵelementEnd();
} }
function HomeComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 39);
    i0.ɵɵlistener("click", function HomeComponent_a_13_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onOpenModal(ctx_r7.nullCat, "add"); });
    i0.ɵɵtext(1, "Adaug\u0103 o pisic\u0103 ");
    i0.ɵɵelementStart(2, "span", 40);
    i0.ɵɵtext(3, "(current)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function HomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelementStart(1, "a", 42);
    i0.ɵɵelementStart(2, "div", 43);
    i0.ɵɵelementStart(3, "div", 44);
    i0.ɵɵelementStart(4, "div", 45);
    i0.ɵɵelement(5, "img", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 47);
    i0.ɵɵelementStart(7, "h5");
    i0.ɵɵelementStart(8, "a", 42);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "ul", 48);
    i0.ɵɵelementStart(11, "li", 49);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "li", 50);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "home/", cat_r9 == null ? null : cat_r9.id, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("src", cat_r9 == null ? null : cat_r9.imageUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("href", "home/", cat_r9 == null ? null : cat_r9.id, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cat_r9 == null ? null : cat_r9.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", cat_r9 == null ? null : cat_r9.gender, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", cat_r9 == null ? null : cat_r9.age, " ");
} }
function HomeComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵelementStart(1, "div", 52);
    i0.ɵɵelementStart(2, "h4", 53);
    i0.ɵɵtext(3, "NO CATS!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "No Cats were found.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class HomeComponent {
    constructor(catService, tokenStorageService) {
        this.catService = catService;
        this.tokenStorageService = tokenStorageService;
        this.apiServerUrl = environment.apiBaseUrl;
        this.isLoggedIn = false;
        this.roles = [];
    }
    ngOnInit() {
        this.getCats();
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.username = user.username;
        }
    }
    getCats() {
        this.catService.getCats().subscribe((response) => {
            this.cats = response;
        }, (error) => {
            alert(error.message);
        });
    }
    onAddCat(addForm) {
        //document.getElementById('add-cat-form').click();
        this.catService.addCat(addForm.value).subscribe((response) => {
            console.log(response);
            this.getCats();
            addForm.reset();
        }, (error) => {
            alert(error.message);
            addForm.reset();
        });
    }
    onUpdateCat(cat) {
        this.catService.updateCat(cat).subscribe((response) => {
            console.log(response);
            this.getCats();
        }, (error) => {
            alert(error.message);
        });
    }
    onDeleteCat(catId) {
        this.catService.deleteCat(catId).subscribe((response) => {
            console.log(response);
            this.getCats();
        }, (error) => {
            alert(error.message);
        });
    }
    searchCats(key) {
        const results = [];
        for (const cat of this.cats) {
            if (cat.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
                cat.gender.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
                results.push(cat);
            }
        }
        this.cats = results;
        if (results.length === 0 || !key) {
            this.getCats();
        }
    }
    onOpenModal(cat, mode) {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode === 'add') {
            button.setAttribute('data-target', '#addCatModal');
        }
        if (mode === 'edit') {
            this.editCat = cat;
            button.setAttribute('data-target', '#updateCatModal');
        }
        if (mode === 'delete') {
            this.deleteCat = cat;
            button.setAttribute('data-target', '#deleteCatModal');
        }
        container === null || container === void 0 ? void 0 : container.appendChild(button);
        button.click();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.CatService), i0.ɵɵdirectiveInject(i2.TokenStorageService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 64, vars: 6, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"], [1, "background"], [1, "container", 2, "text-align", "center"], [4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg"], ["id", "navbarColor02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["class", "nav-link", 3, "click", 4, "ngIf"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "ngModel", "", "name", "key", "id", "searchName", "placeholder", "Caut\u0103 pisici...", "required", "", 1, "form-control", "mr-sm-2", 3, "ngModelChange"], ["key", "ngModel"], ["id", "main-container", 1, "container"], [1, "row", "clearfix"], ["class", "col-lg-3 col-md-4 col-sm-12", 4, "ngFor", "ngForOf"], ["id", "addCatModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "addCatModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "addCatModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["addForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "ngModel", "", "name", "name", "id", "name", "placeholder", "Nume", "required", "", 1, "form-control"], ["for", "gender"], ["type", "gender", "ngModel", "", "name", "gender", "id", "gender", "placeholder", "Gen", "required", "", 1, "form-control"], [1, "Age"], ["for", "age"], ["type", "text", "ngModel", "", "name", "age", "id", "age", "placeholder", "V\u00E2rst\u0103", "required", "", 1, "form-control"], ["for", "phone"], ["type", "text", "ngModel", "", "name", "imageUrl", "id", "imageUrl", "placeholder", "Poz\u0103 URL", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "id", "add-cat-form", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "col-lg-12 col-md-12 col-xl-12", 4, "ngIf"], [1, "nav-link", 3, "click"], [1, "sr-only"], [1, "col-lg-3", "col-md-4", "col-sm-12"], [3, "href"], [1, "card", "product_item"], [1, "body"], [1, "cp_img"], ["alt", "Admin", 1, "img-fluid", 3, "src"], [1, "product_details"], [1, "product_price", "list-unstyled"], [1, "old_price"], [1, "new_price"], [1, "col-lg-12", "col-md-12", "col-xl-12"], ["role", "alert", 1, "alert", "alert-info"], [1, "alert-heading"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelement(0, "link", 0);
        i0.ɵɵelement(1, "br");
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelement(3, "br");
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵtemplate(5, HomeComponent_h1_5_Template, 2, 1, "h1", 3);
        i0.ɵɵtemplate(6, HomeComponent_h1_6_Template, 2, 0, "h1", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "br");
        i0.ɵɵelement(8, "br");
        i0.ɵɵelementStart(9, "nav", 4);
        i0.ɵɵelementStart(10, "div", 5);
        i0.ɵɵelementStart(11, "ul", 6);
        i0.ɵɵelementStart(12, "li", 7);
        i0.ɵɵtemplate(13, HomeComponent_a_13_Template, 4, 0, "a", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "form", 9);
        i0.ɵɵelementStart(15, "input", 10, 11);
        i0.ɵɵlistener("ngModelChange", function HomeComponent_Template_input_ngModelChange_15_listener() { i0.ɵɵrestoreView(_r10); const _r3 = i0.ɵɵreference(16); return ctx.searchCats(_r3.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(17, "br");
        i0.ɵɵelement(18, "br");
        i0.ɵɵelement(19, "br");
        i0.ɵɵelement(20, "br");
        i0.ɵɵelementStart(21, "div", 12);
        i0.ɵɵelementStart(22, "div", 13);
        i0.ɵɵtemplate(23, HomeComponent_div_23_Template, 15, 6, "div", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 15);
        i0.ɵɵelementStart(25, "div", 16);
        i0.ɵɵelementStart(26, "div", 17);
        i0.ɵɵelementStart(27, "div", 18);
        i0.ɵɵelementStart(28, "h5", 19);
        i0.ɵɵtext(29, "Adaug\u0103 o pisic\u0103");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "button", 20);
        i0.ɵɵelementStart(31, "span", 21);
        i0.ɵɵtext(32, "\u00D7");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 22);
        i0.ɵɵelementStart(34, "form", 23, 24);
        i0.ɵɵlistener("ngSubmit", function HomeComponent_Template_form_ngSubmit_34_listener() { i0.ɵɵrestoreView(_r10); const _r5 = i0.ɵɵreference(35); return ctx.onAddCat(_r5); });
        i0.ɵɵelementStart(36, "div", 25);
        i0.ɵɵelementStart(37, "label", 26);
        i0.ɵɵtext(38, "Nume");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(39, "input", 27);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "div", 25);
        i0.ɵɵelementStart(41, "label", 28);
        i0.ɵɵtext(42, "Gen");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(43, "input", 29);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "div", 30);
        i0.ɵɵelementStart(45, "label", 31);
        i0.ɵɵtext(46, "V\u00E2rst\u0103");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(47, "input", 32);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "div", 25);
        i0.ɵɵelementStart(49, "label", 33);
        i0.ɵɵtext(50, "Poz\u0103 URL");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(51, "input", 34);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "div", 35);
        i0.ɵɵelementStart(53, "button", 36);
        i0.ɵɵtext(54, "\u00CEnchide");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "button", 37);
        i0.ɵɵtext(56, "Salveaz\u0103");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(57, HomeComponent_div_57_Template, 6, 0, "div", 38);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(58, "br");
        i0.ɵɵelement(59, "br");
        i0.ɵɵelement(60, "br");
        i0.ɵɵelement(61, "br");
        i0.ɵɵelement(62, "br");
        i0.ɵɵelement(63, "br");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r5 = i0.ɵɵreference(35);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.isLoggedIn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isLoggedIn);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.isLoggedIn);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngForOf", ctx.cats);
        i0.ɵɵadvance(32);
        i0.ɵɵproperty("disabled", _r5.invalid);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (ctx.cats == null ? null : ctx.cats.length) == 0);
    } }, directives: [i3.NgIf, i4.ɵNgNoValidate, i4.NgControlStatusGroup, i4.NgForm, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i4.RequiredValidator, i3.NgForOf], styles: ["body[_ngcontent-%COMP%]{\r\n    margin-top:20px;\r\n    background-color: #f4f7f6;\r\n}\r\n\r\n.background[_ngcontent-%COMP%]{\r\n  background-color: #e0e0eb;\r\n}\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n  background-color: #b1b1cd !important;\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%] {\r\n    margin-bottom: 0\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 16px;\r\n    padding-bottom: 13px;\r\n    border-bottom: 1px solid #e8e8e8\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    margin: 0;\r\n    border: none\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 80px\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   .comment-action[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: calc(100% - 80px)\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   .comment-action[_ngcontent-%COMP%]   .c_name[_ngcontent-%COMP%] {\r\n    margin: 0\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   .comment-action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    max-width: 95%;\r\n    display: block\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]:hover   .cp_img[_ngcontent-%COMP%] {\r\n    top: -40px\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]:hover   .cp_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]:hover   .cp_img[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\r\n    display: block\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .cp_img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n    -webkit-transform: translate(-50%);\r\n    -ms-transform: translate(-50%);\r\n    -moz-transform: translate(-50%);\r\n    -o-transform: translate(-50%);\r\n    -khtml-transform: translate(-50%);\r\n    width: 100%;\r\n    padding: 15px;\r\n    transition: all 0.2s ease-in-out\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .cp_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all 0.2s ease-in-out;\r\n    border-radius: 6px\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .cp_img[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\r\n    display: none;\r\n    text-align: center;\r\n    margin-top: 10px\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%] {\r\n    padding-top: 110%;\r\n    text-align: center\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: #444\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   .product_price[_ngcontent-%COMP%] {\r\n    margin: 0\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   .product_price[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   .product_price[_ngcontent-%COMP%]   .new_price[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    color: #ff4136\r\n}\r\n\r\n.product_item_list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle\r\n}\r\n\r\n.product_item_list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    margin: 0\r\n}\r\n\r\n.product_item_list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    box-shadow: none !important\r\n}\r\n\r\n.product-order-list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\r\n    width: 145px\r\n}\r\n\r\n.preview[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-pic[_ngcontent-%COMP%] {\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    font-size: 0\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    display: inline-block\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   nav-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    display: block\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 2px;\r\n    border-radius: 0 !important;\r\n    border-top: none !important;\r\n    border-left: none !important;\r\n    border-right: none !important\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n    margin-right: 0\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    -webkit-animation-name: opacity;\r\n    animation-name: opacity;\r\n    -webkit-animation-duration: .3s;\r\n    animation-duration: .3s\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\r\n    display: inline-block\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .sizes[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\r\n    margin-right: 10px\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .sizes[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]:first-of-type {\r\n    margin-left: 40px\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]:first-of-type {\r\n    margin-left: 20px\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .not-available[_ngcontent-%COMP%]:before {\r\n    font-family: Material-Design-Iconic-Font;\r\n    content: \"\\f136\";\r\n    color: #fff\r\n}\r\n\r\n@media screen and (max-width: 996px) {\r\n    .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px\r\n    }\r\n}\r\n\r\n@-webkit-keyframes opacity {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(3);\r\n        transform: scale(3)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n@keyframes opacity {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(3);\r\n        transform: scale(3)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n.cart-page[_ngcontent-%COMP%]   .cart-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\r\n    width: 145px\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%] {\r\n    width: 120px\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 0\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n    text-align: center;\r\n    background-color: #1ab1e3\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 8px 10px 10px;\r\n    color: #fff\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    vertical-align: middle\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    background-color: #fff\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] + .input-group-addon[_ngcontent-%COMP%] {\r\n    background-color: #1ab1e3\r\n}\r\n\r\n.ec-checkout[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-group.bootstrap-select.form-control[_ngcontent-%COMP%] {\r\n    padding: 0\r\n}\r\n\r\n.ec-checkout[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-group.bootstrap-select.form-control[_ngcontent-%COMP%]   .btn-round.btn-simple[_ngcontent-%COMP%] {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px\r\n}\r\n\r\n.ec-checkout[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul.card-type[_ngcontent-%COMP%] {\r\n    font-size: 0\r\n}\r\n\r\n.ec-checkout[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul.card-type[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 10px\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    margin-bottom: 30px;\r\n    transition: .5s;\r\n    border: 0;\r\n    border-radius: .55rem;\r\n    position: relative;\r\n    width: 100%;\r\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #424242;\r\n    padding: 20px;\r\n    font-weight: 400;\r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: i1.CatService }, { type: i2.TokenStorageService }]; }, null); })();
//# sourceMappingURL=home.component.js.map
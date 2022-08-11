import { style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/p-human.service";
import * as i2 from "@angular/router";
import * as i3 from "../services/cat.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function PHumanTestComponent_form_1_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵlistener("click", function PHumanTestComponent_form_1_div_1_div_32_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(3); return ctx_r5.onNext(ctx_r5.currentQuiz); });
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "\u00CEnainte");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PHumanTestComponent_form_1_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵlistener("click", function PHumanTestComponent_form_1_div_1_div_33_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(3); return ctx_r7.onSubmit(); });
    i0.ɵɵtext(2, "Trimite");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PHumanTestComponent_form_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "h2", 8);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵelementStart(6, "ul");
    i0.ɵɵelementStart(7, "label", 9);
    i0.ɵɵelementStart(8, "li", 10);
    i0.ɵɵelementStart(9, "input", 11);
    i0.ɵɵlistener("ngModelChange", function PHumanTestComponent_form_1_div_1_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.currentQuiz.answer = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 12);
    i0.ɵɵtext(11, " Sunt perfect de acord");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "label", 9);
    i0.ɵɵelementStart(13, "li", 10);
    i0.ɵɵelementStart(14, "input", 13);
    i0.ɵɵlistener("ngModelChange", function PHumanTestComponent_form_1_div_1_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.currentQuiz.answer = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 12);
    i0.ɵɵtext(16, " Sunt de acord ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "label", 9);
    i0.ɵɵelementStart(18, "li", 10);
    i0.ɵɵelementStart(19, "input", 14);
    i0.ɵɵlistener("ngModelChange", function PHumanTestComponent_form_1_div_1_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.currentQuiz.answer = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 12);
    i0.ɵɵtext(21, " Sunt indiferent ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "label", 9);
    i0.ɵɵelementStart(23, "li", 10);
    i0.ɵɵelementStart(24, "input", 15);
    i0.ɵɵlistener("ngModelChange", function PHumanTestComponent_form_1_div_1_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.currentQuiz.answer = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span", 12);
    i0.ɵɵtext(26, " Nu sunt de acord ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "label", 9);
    i0.ɵɵelementStart(28, "li", 10);
    i0.ɵɵelementStart(29, "input", 16);
    i0.ɵɵlistener("ngModelChange", function PHumanTestComponent_form_1_div_1_Template_input_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.currentQuiz.answer = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span", 12);
    i0.ɵɵtext(31, " Nu sunt deloc de acord ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(32, PHumanTestComponent_form_1_div_1_div_32_Template, 4, 0, "div", 17);
    i0.ɵɵtemplate(33, PHumanTestComponent_form_1_div_1_div_33_Template, 3, 0, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.currentQuiz.question);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r2.currentQuiz.answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r2.currentQuiz.answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r2.currentQuiz.answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r2.currentQuiz.answer);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r2.currentQuiz.answer);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.itQuiz + 1 < ctx_r2.quizzes.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.itQuiz == ctx_r2.quizzes.length - 1);
} }
function PHumanTestComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 3);
    i0.ɵɵtemplate(1, PHumanTestComponent_form_1_div_1_Template, 34, 8, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.currentQuiz);
} }
function PHumanTestComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "a", 26);
    i0.ɵɵelementStart(2, "div", 27);
    i0.ɵɵelementStart(3, "div", 28);
    i0.ɵɵelementStart(4, "div", 29);
    i0.ɵɵelement(5, "img", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 31);
    i0.ɵɵelementStart(7, "h5");
    i0.ɵɵelementStart(8, "a", 26);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "ul", 32);
    i0.ɵɵelementStart(11, "li", 33);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "li", 34);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cat_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "home/", cat_r17 == null ? null : cat_r17.id, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("src", cat_r17 == null ? null : cat_r17.imageUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("href", "home/", cat_r17 == null ? null : cat_r17.id, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cat_r17 == null ? null : cat_r17.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", cat_r17 == null ? null : cat_r17.gender, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", cat_r17 == null ? null : cat_r17.age, " ");
} }
function PHumanTestComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "div", 36);
    i0.ɵɵelementStart(2, "h4", 37);
    i0.ɵɵtext(3, "Nu avem pisici gasite!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Revino in alta zi!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PHumanTestComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelementStart(2, "h1", 20);
    i0.ɵɵtext(3, "Pisicile compatibile cu personalitatea ta sunt: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 21);
    i0.ɵɵelementStart(5, "div", 22);
    i0.ɵɵtemplate(6, PHumanTestComponent_div_2_div_6_Template, 15, 6, "div", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "br");
    i0.ɵɵtemplate(8, PHumanTestComponent_div_2_div_8_Template, 6, 0, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "br");
    i0.ɵɵelement(10, "br");
    i0.ɵɵelement(11, "br");
    i0.ɵɵelement(12, "br");
    i0.ɵɵelement(13, "br");
    i0.ɵɵelement(14, "br");
    i0.ɵɵelement(15, "br");
    i0.ɵɵelement(16, "br");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "br");
    i0.ɵɵelement(18, "br");
    i0.ɵɵelement(19, "br");
    i0.ɵɵelement(20, "br");
    i0.ɵɵelement(21, "br");
    i0.ɵɵelement(22, "br");
    i0.ɵɵelement(23, "br");
    i0.ɵɵelement(24, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.cats);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.cats == null ? null : ctx_r1.cats.length) == 0);
} }
export class PHumanTestComponent {
    constructor(quizService, router, catService) {
        this.quizService = quizService;
        this.router = router;
        this.catService = catService;
        this.start = true;
        this.end = false;
        this.pers = [0, 0, 0, 0, 0]; // cele 5 personalitati
        this.cats = [];
    }
    ngOnInit() {
        this.quizzes = this.quizService.getQuizzes();
        this.itQuiz = 0;
        this.currentQuiz = this.quizzes[this.itQuiz];
        this.catService.getCats().subscribe((response) => {
            this.cats = response;
        }, (error) => {
            alert(error.message);
        });
        console.log(this.quizzes);
    }
    // onAnswer() {
    //   this.answersSelected[this.itQuiz] = this.currentQuiz.answer;
    //   // console.log(this.currentQuiz);
    // }
    onNext(quiz) {
        this.itQuiz += 1;
        this.currentQuiz = this.quizzes[this.itQuiz];
        console.log(this.quizzes);
    }
    onSubmit() {
        this.start = false;
        this.end = true;
        let i;
        for (i = 0; i < this.quizzes.length; i++) {
            console.log(this.quizzes[i]);
            console.log(this.pers);
            if (this.quizzes[i].value > 0)
                this.pers[i % 5] += +this.quizzes[i].answer;
            else
                this.pers[i % 5] += 5 - +this.quizzes[i].answer;
        }
        console.log("AICI");
        console.log(this.pers);
        const results = [];
        let coef = 0;
        let mean_cat = 0;
        let ratings = [0, 0, 0, 0, 0];
        let cat;
        let val_pers = [0, 0, 0, 0, 0];
        let sum_pers_patrat = 0;
        let sum_cat_patrat = 0;
        let sum1 = 0;
        let sum2 = 0;
        const mean_pers = this.pers.reduce((a, b) => a + b, 0) / this.pers.length;
        console.log(mean_pers);
        console.log(typeof this.pers);
        for (let i = 0; i < 5; i++) {
            val_pers[i] = this.pers[i] - mean_pers;
            sum_pers_patrat += val_pers[i] * val_pers[i];
        }
        for (let i = 0; i < this.cats.length; i++) {
            //convertim din string in number
            //console.log(typeof this.cats[i].ratings);
            cat = this.cats[i].ratings.replace('[', '').replace(']', '').split(',');
            console.log(cat.length);
            if (cat.length > 1)
                for (let j = 0; j < 5; j++) {
                    ratings[j] = +cat[j];
                }
            else
                ratings = [0, 0, 0, 0, 0];
            //calculam coeficientul de corelatie
            mean_cat = ratings.reduce((a, b) => a + b, 0) / 5;
            console.log(mean_cat);
            for (let j = 0; j < 5; j++) {
                sum1 += val_pers[j] * (cat[j] - mean_cat);
                sum2 += (cat[j] - mean_cat) * (cat[j] - mean_cat);
            }
            sum2 = Math.sqrt(sum2 * sum_pers_patrat);
            coef = sum1 / sum2;
            // pe baza scorului trebuie sa gasesc pisicile care au aceeasi personalitate
            console.log(coef);
            if (coef >= 0.5) {
                results.push(this.cats[i]);
            }
        }
        this.cats = results;
    }
}
PHumanTestComponent.ɵfac = function PHumanTestComponent_Factory(t) { return new (t || PHumanTestComponent)(i0.ɵɵdirectiveInject(i1.PHumanService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.CatService)); };
PHumanTestComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PHumanTestComponent, selectors: [["app-p-human-test"]], decls: 3, vars: 2, consts: [[1, "bg"], ["name", "form", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["name", "form"], ["class", "container mb-5 bg", 4, "ngIf"], [1, "container", "mb-5", "bg"], [1, "row"], [1, "col-12"], [1, "fw-bold", "quiz"], [1, "box"], [1, "course"], ["type", "radio", "name", "input", "value", "5", 3, "ngModel", "ngModelChange"], [1, "subject"], ["type", "radio", "name", "input", "value", "4", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "input", "value", "3", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "input", "value", "2", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "input", "value", "1", 3, "ngModel", "ngModelChange"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "btn", "btn-custom", "btn-block", 3, "click"], [1, "fw-bold"], ["id", "main-container", 1, "container"], [1, "row", "clearfix"], ["class", "col-lg-3 col-md-4 col-sm-12", 4, "ngFor", "ngForOf"], ["class", "col-lg-12 col-md-12 col-xl-12", 4, "ngIf"], [1, "col-lg-3", "col-md-4", "col-sm-12"], [3, "href"], [1, "card", "product_item"], [1, "body"], [1, "cp_img"], ["alt", "Product", 1, "img-fluid", 3, "src"], [1, "product_details"], [1, "product_price", "list-unstyled"], [1, "old_price"], [1, "new_price"], [1, "col-lg-12", "col-md-12", "col-xl-12"], ["role", "alert", 1, "alert", "alert-info"], [1, "alert-heading"]], template: function PHumanTestComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PHumanTestComponent_form_1_Template, 2, 1, "form", 1);
        i0.ɵɵtemplate(2, PHumanTestComponent_div_2_Template, 25, 2, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.start);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.end);
    } }, directives: [i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatusGroup, i5.NgForm, i5.RadioControlValueAccessor, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i4.NgForOf], styles: ["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 2%\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    background-color: bisque;\r\n    padding: 10px\r\n}\r\n\r\n.subject[_ngcontent-%COMP%]{\r\n  padding-left: 3%;\r\n}\r\n\r\n.btn-custom[_ngcontent-%COMP%]{\r\n  background-color: #63639c;\r\n  padding: 1%;\r\n  \r\n  width: 90%;\r\n  margin-left: 7%;\r\n  margin-right: 5%;\r\n  font-size: large;\r\n  color: #ddd;\r\n}\r\n\r\n.quiz[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    margin: 30px auto;\r\n    background-color: #e0e0eb;\r\n    padding: 20px 15px\r\n}\r\n\r\nlabel.box[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    \r\n    margin: 2%;\r\n    padding:2%;\r\n    border-radius: 5px;\r\n    \r\n    border: 2px solid #7373a5;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n#one[_ngcontent-%COMP%]:checked ~ label.subject[_ngcontent-%COMP%] {\r\n    border-color: #8e498e\r\n}\r\n\r\nlabel.box[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%\r\n}\r\n\r\nlabel.box[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\r\n    height: 22px;\r\n    width: 22px;\r\n    border-radius: 50%;\r\n    margin-right: 15px;\r\n    border: 2px solid #ddd;\r\n    display: inline-block\r\n}\r\n\r\n.btn.btn-primary[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    margin-top: 20px\r\n}\r\n\r\n@media(max-width: 450px) {\r\n    .subject[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n\r\n.c_review[_ngcontent-%COMP%] {\r\n    margin-bottom: 0\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 16px;\r\n    padding-bottom: 13px;\r\n    border-bottom: 1px solid #e8e8e8\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n    margin: 0;\r\n    border: none\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 80px\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   .comment-action[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: calc(100% - 80px)\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   .comment-action[_ngcontent-%COMP%]   .c_name[_ngcontent-%COMP%] {\r\n    margin: 0\r\n}\r\n\r\n.c_review[_ngcontent-%COMP%]   .comment-action[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    max-width: 95%;\r\n    display: block\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]:hover   .cp_img[_ngcontent-%COMP%] {\r\n    top: -40px\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]:hover   .cp_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]:hover   .cp_img[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\r\n    display: block\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .cp_img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n    -webkit-transform: translate(-50%);\r\n    -ms-transform: translate(-50%);\r\n    -moz-transform: translate(-50%);\r\n    -o-transform: translate(-50%);\r\n    -khtml-transform: translate(-50%);\r\n    width: 100%;\r\n    padding: 15px;\r\n    transition: all 0.2s ease-in-out\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .cp_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all 0.2s ease-in-out;\r\n    border-radius: 6px\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .cp_img[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\r\n    display: none;\r\n    text-align: center;\r\n    margin-top: 10px\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%] {\r\n    padding-top: 110%;\r\n    text-align: center\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    color: #444\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   .product_price[_ngcontent-%COMP%] {\r\n    margin: 0\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   .product_price[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 10px\r\n}\r\n\r\n.product_item[_ngcontent-%COMP%]   .product_details[_ngcontent-%COMP%]   .product_price[_ngcontent-%COMP%]   .new_price[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n    color: #ff4136\r\n}\r\n\r\n.product_item_list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    vertical-align: middle\r\n}\r\n\r\n.product_item_list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    margin: 0\r\n}\r\n\r\n.product_item_list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    box-shadow: none !important\r\n}\r\n\r\n.product-order-list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\r\n    width: 145px\r\n}\r\n\r\n.preview[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-pic[_ngcontent-%COMP%] {\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-thumbnail.nav-tabs[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    font-size: 0\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    display: inline-block\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   nav-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    display: block\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 2px;\r\n    border-radius: 0 !important;\r\n    border-top: none !important;\r\n    border-left: none !important;\r\n    border-right: none !important\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .preview-thumbnail.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n    margin-right: 0\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\r\n    overflow: hidden\r\n}\r\n\r\n.preview[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    -webkit-animation-name: opacity;\r\n    animation-name: opacity;\r\n    -webkit-animation-duration: .3s;\r\n    animation-duration: .3s\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\r\n    display: inline-block\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .sizes[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\r\n    margin-right: 10px\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .sizes[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]:first-of-type {\r\n    margin-left: 40px\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]:first-of-type {\r\n    margin-left: 20px\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .not-available[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    line-height: 2em\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .colors[_ngcontent-%COMP%]   .not-available[_ngcontent-%COMP%]:before {\r\n    font-family: Material-Design-Iconic-Font;\r\n    content: \"\\f136\";\r\n    color: #fff\r\n}\r\n\r\n@media screen and (max-width: 996px) {\r\n    .preview[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px\r\n    }\r\n}\r\n\r\n@-webkit-keyframes opacity {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(3);\r\n        transform: scale(3)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n@keyframes opacity {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(3);\r\n        transform: scale(3)\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1)\r\n    }\r\n}\r\n\r\n.cart-page[_ngcontent-%COMP%]   .cart-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\r\n    width: 145px\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%] {\r\n    width: 120px\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 0\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n    text-align: center;\r\n    background-color: #1ab1e3\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: 8px 10px 10px;\r\n    color: #fff\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    vertical-align: middle\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    background-color: #fff\r\n}\r\n\r\n.cart-table[_ngcontent-%COMP%]   .quantity-grp[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] + .input-group-addon[_ngcontent-%COMP%] {\r\n    background-color: #1ab1e3\r\n}\r\n\r\n.ec-checkout[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-group.bootstrap-select.form-control[_ngcontent-%COMP%] {\r\n    padding: 0\r\n}\r\n\r\n.ec-checkout[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .btn-group.bootstrap-select.form-control[_ngcontent-%COMP%]   .btn-round.btn-simple[_ngcontent-%COMP%] {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px\r\n}\r\n\r\n.ec-checkout[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul.card-type[_ngcontent-%COMP%] {\r\n    font-size: 0\r\n}\r\n\r\n.ec-checkout[_ngcontent-%COMP%]   .wizard[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul.card-type[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 10px\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    margin: 2%;\r\n    transition: .5s;\r\n    border: 0;\r\n    border-radius: .55rem;\r\n    position: relative;\r\n    width: 100%;\r\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #424242;\r\n    padding: 20px;\r\n    font-weight: 400;\r\n}"], data: { animation: [
            trigger('answer', [
                transition('void => *', [
                    style({ opacity: 0, transform: 'translateY(-3rem)' }),
                ]),
            ]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PHumanTestComponent, [{
        type: Component,
        args: [{
                selector: 'app-p-human-test',
                templateUrl: './p-human-test.component.html',
                styleUrls: ['./p-human-test.component.css'],
                animations: [
                    trigger('answer', [
                        transition('void => *', [
                            style({ opacity: 0, transform: 'translateY(-3rem)' }),
                        ]),
                    ]),
                ],
            }]
    }], function () { return [{ type: i1.PHumanService }, { type: i2.Router }, { type: i3.CatService }]; }, null); })();
//# sourceMappingURL=p-human-test.component.js.map
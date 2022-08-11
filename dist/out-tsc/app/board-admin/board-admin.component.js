import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../_services/user.service";
export class BoardAdminComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getAdminBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
}
BoardAdminComponent.ɵfac = function BoardAdminComponent_Factory(t) { return new (t || BoardAdminComponent)(i0.ɵɵdirectiveInject(i1.UserService)); };
BoardAdminComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BoardAdminComponent, selectors: [["app-board-admin"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "jumbotron"]], template: function BoardAdminComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "header", 1);
        i0.ɵɵelementStart(2, "p");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.content);
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BoardAdminComponent, [{
        type: Component,
        args: [{
                selector: 'app-board-admin',
                templateUrl: './board-admin.component.html',
                styleUrls: ['./board-admin.component.css']
            }]
    }], function () { return [{ type: i1.UserService }]; }, null); })();
//# sourceMappingURL=board-admin.component.js.map
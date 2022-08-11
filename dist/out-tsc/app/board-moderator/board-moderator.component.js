import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../_services/user.service";
export class BoardModeratorComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getModeratorBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
}
BoardModeratorComponent.ɵfac = function BoardModeratorComponent_Factory(t) { return new (t || BoardModeratorComponent)(i0.ɵɵdirectiveInject(i1.UserService)); };
BoardModeratorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BoardModeratorComponent, selectors: [["app-board-moderator"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "jumbotron"]], template: function BoardModeratorComponent_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BoardModeratorComponent, [{
        type: Component,
        args: [{
                selector: 'app-board-moderator',
                templateUrl: './board-moderator.component.html',
                styleUrls: ['./board-moderator.component.css']
            }]
    }], function () { return [{ type: i1.UserService }]; }, null); })();
//# sourceMappingURL=board-moderator.component.js.map
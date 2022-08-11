import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../_services/user.service";
export class BoardUserComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getUserBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
}
BoardUserComponent.ɵfac = function BoardUserComponent_Factory(t) { return new (t || BoardUserComponent)(i0.ɵɵdirectiveInject(i1.UserService)); };
BoardUserComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BoardUserComponent, selectors: [["app-board-user"]], decls: 0, vars: 0, template: function BoardUserComponent_Template(rf, ctx) { }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BoardUserComponent, [{
        type: Component,
        args: [{
                selector: 'app-board-user',
                templateUrl: './board-user.component.html',
                styleUrls: ['./board-user.component.css']
            }]
    }], function () { return [{ type: i1.UserService }]; }, null); })();
//# sourceMappingURL=board-user.component.js.map
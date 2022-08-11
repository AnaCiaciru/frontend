import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CatService {
    constructor(http) {
        this.http = http;
        // this is the api
        this.apiServerUrl = environment.apiBaseUrl;
    }
    findOneCat(catId) {
        return this.http.get(`${this.apiServerUrl}/api/cat/find/${catId}`);
    }
    getCats() {
        return this.http.get(`${this.apiServerUrl}/api/cat/all`);
    }
    addCat(cat) {
        return this.http.post(`${this.apiServerUrl}/api/cat/add`, cat);
    }
    updateCat(cat) {
        return this.http.put(`${this.apiServerUrl}/api/cat/update`, cat);
    }
    addTest(test) {
        return this.http.put(`${this.apiServerUrl}/api/cat/addTest`, test);
    }
    deleteCat(catId) {
        return this.http.delete(`${this.apiServerUrl}/api/cat/delete/${catId}`);
    }
}
CatService.ɵfac = function CatService_Factory(t) { return new (t || CatService)(i0.ɵɵinject(i1.HttpClient)); };
CatService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CatService, factory: CatService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=cat.service.js.map
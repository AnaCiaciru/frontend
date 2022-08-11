import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CatService } from './services/cat.service';
import { CatProfileComponent } from './cat-profile/cat-profile.component';
import { PHumanTestComponent } from './p-human-test/p-human-test.component';
import { PCatTestComponent } from './p-cat-test/p-cat-test.component';
import * as i0 from "@angular/core";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [authInterceptorProviders, CatService], imports: [[BrowserModule, AppRoutingModule, FormsModule, HttpClientModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    LoginComponent,
                    RegisterComponent,
                    HomeComponent,
                    ProfileComponent,
                    BoardAdminComponent,
                    BoardModeratorComponent,
                    BoardUserComponent,
                    CatProfileComponent,
                    PHumanTestComponent,
                    PCatTestComponent
                ],
                imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
                providers: [authInterceptorProviders, CatService],
                bootstrap: [AppComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProfileComponent,
        BoardAdminComponent,
        BoardModeratorComponent,
        BoardUserComponent,
        CatProfileComponent,
        PHumanTestComponent,
        PCatTestComponent], imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule] }); })();
//# sourceMappingURL=app.module.js.map
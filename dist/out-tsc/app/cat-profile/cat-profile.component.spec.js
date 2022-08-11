/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { CatProfileComponent } from './cat-profile.component';
describe('CatProfileComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CatProfileComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CatProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cat-profile.component.spec.js.map
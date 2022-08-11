import { TestBed } from '@angular/core/testing';
import { BoardModeratorComponent } from './board-moderator.component';
describe('BoardModeratorComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BoardModeratorComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(BoardModeratorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=board-moderator.component.spec.js.map
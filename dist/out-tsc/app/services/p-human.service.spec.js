import { TestBed } from '@angular/core/testing';
import { PHumanService } from './p-human.service';
describe('PHumanService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PHumanService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=p-human.service.spec.js.map
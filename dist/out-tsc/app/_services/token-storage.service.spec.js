import { TestBed } from '@angular/core/testing';
import { TokenStorageService } from './token-storage.service';
describe('TokenStorageService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TokenStorageService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=token-storage.service.spec.js.map
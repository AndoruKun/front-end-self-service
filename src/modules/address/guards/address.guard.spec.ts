import { TestBed } from '@angular/core/testing';

import { AddressGuard } from './address.guard';

describe('Address Guards', () => {
    let addressGuard: AddressGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AddressGuard],
        });
        addressGuard = TestBed.inject(AddressGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            addressGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});

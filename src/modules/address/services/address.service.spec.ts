import { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';

describe('AddressService', () => {
    let addressService: AddressService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AddressService],
        });
        addressService = TestBed.inject(AddressService);
    });

    describe('getAddress$', () => {
        it('should return Observable<Address>', () => {
            expect(addressService).toBeDefined();
        });
    });
});

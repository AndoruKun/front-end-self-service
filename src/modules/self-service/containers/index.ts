import { AbsenceComponent } from './absence/absence.component';
import { BenefitComponent } from './benefit/benefit.component';
import { PersonalBiodataComponent } from './personal/biodata/personal-biodata.component';
import { PersonalAddressComponent } from './personal/address/personal-address.component';
import { PersonalFamilyComponent } from './personal/family/personal-family.component';
import { SelfServiceComponent } from './self-service/self-service.component';
import { AddressFormComponent } from './personal/address-form/address-form.component';
import { FamilyFormComponent } from './personal/family-form/family-form.component';

export const containers = [AbsenceComponent, BenefitComponent, PersonalBiodataComponent, PersonalAddressComponent, PersonalFamilyComponent, SelfServiceComponent, AddressFormComponent, FamilyFormComponent];

export * from './absence/absence.component';
export * from './benefit/benefit.component';
export * from './personal/biodata/personal-biodata.component';
export * from './personal/address/personal-address.component';
export * from './personal/family/personal-family.component';
export * from './self-service/self-service.component';
export * from './personal/address-form/address-form.component';
export * from './personal/family-form/family-form.component';

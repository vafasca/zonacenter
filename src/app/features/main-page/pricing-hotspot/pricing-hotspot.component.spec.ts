import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingHotspotComponent } from './pricing-hotspot.component';

describe('PricingHotspotComponent', () => {
  let component: PricingHotspotComponent;
  let fixture: ComponentFixture<PricingHotspotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingHotspotComponent]
    });
    fixture = TestBed.createComponent(PricingHotspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeOfferDetailsComponent } from './we-offer-details.component';

describe('WeOfferDetailsComponent', () => {
  let component: WeOfferDetailsComponent;
  let fixture: ComponentFixture<WeOfferDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeOfferDetailsComponent]
    });
    fixture = TestBed.createComponent(WeOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

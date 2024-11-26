import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationInterestComponent } from './information-interest.component';

describe('InformationInterestComponent', () => {
  let component: InformationInterestComponent;
  let fixture: ComponentFixture<InformationInterestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationInterestComponent]
    });
    fixture = TestBed.createComponent(InformationInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeaturesCompanyComponent } from './main-features-company.component';

describe('MainFeaturesCompanyComponent', () => {
  let component: MainFeaturesCompanyComponent;
  let fixture: ComponentFixture<MainFeaturesCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFeaturesCompanyComponent]
    });
    fixture = TestBed.createComponent(MainFeaturesCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

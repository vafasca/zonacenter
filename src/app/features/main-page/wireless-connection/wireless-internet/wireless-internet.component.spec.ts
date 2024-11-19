import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessInternetComponent } from './wireless-internet.component';

describe('WirelessInternetComponent', () => {
  let component: WirelessInternetComponent;
  let fixture: ComponentFixture<WirelessInternetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WirelessInternetComponent]
    });
    fixture = TestBed.createComponent(WirelessInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

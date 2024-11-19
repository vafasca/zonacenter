import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWirelessConnectionPageComponent } from './main-wireless-connection-page.component';

describe('MainWirelessConnectionPageComponent', () => {
  let component: MainWirelessConnectionPageComponent;
  let fixture: ComponentFixture<MainWirelessConnectionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainWirelessConnectionPageComponent]
    });
    fixture = TestBed.createComponent(MainWirelessConnectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHotspotComponent } from './main-hotspot.component';

describe('MainHotspotComponent', () => {
  let component: MainHotspotComponent;
  let fixture: ComponentFixture<MainHotspotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHotspotComponent]
    });
    fixture = TestBed.createComponent(MainHotspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

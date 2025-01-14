import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotMikrotikComponent } from './hotspot-mikrotik.component';

describe('HotspotMikrotikComponent', () => {
  let component: HotspotMikrotikComponent;
  let fixture: ComponentFixture<HotspotMikrotikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotspotMikrotikComponent]
    });
    fixture = TestBed.createComponent(HotspotMikrotikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

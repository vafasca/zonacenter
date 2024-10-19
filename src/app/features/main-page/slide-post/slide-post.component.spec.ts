import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePostComponent } from './slide-post.component';

describe('SlidePostComponent', () => {
  let component: SlidePostComponent;
  let fixture: ComponentFixture<SlidePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidePostComponent]
    });
    fixture = TestBed.createComponent(SlidePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

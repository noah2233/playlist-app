import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceTrackComponent } from './replace-track.component';

describe('ReplaceTrackComponent', () => {
  let component: ReplaceTrackComponent;
  let fixture: ComponentFixture<ReplaceTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

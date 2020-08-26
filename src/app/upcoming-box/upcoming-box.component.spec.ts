import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBoxComponent } from './upcoming-box.component';

describe('UpcomingBoxComponent', () => {
  let component: UpcomingBoxComponent;
  let fixture: ComponentFixture<UpcomingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

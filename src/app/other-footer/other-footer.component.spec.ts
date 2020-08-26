import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFooterComponent } from './other-footer.component';

describe('OtherFooterComponent', () => {
  let component: OtherFooterComponent;
  let fixture: ComponentFixture<OtherFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

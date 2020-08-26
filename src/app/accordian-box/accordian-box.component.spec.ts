import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianBoxComponent } from './accordian-box.component';

describe('AccordianBoxComponent', () => {
  let component: AccordianBoxComponent;
  let fixture: ComponentFixture<AccordianBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

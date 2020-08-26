import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBoxComponent } from './carousel-box.component';

describe('CarouselBoxComponent', () => {
  let component: CarouselBoxComponent;
  let fixture: ComponentFixture<CarouselBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

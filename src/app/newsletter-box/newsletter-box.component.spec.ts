import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterBoxComponent } from './newsletter-box.component';

describe('NewsletterBoxComponent', () => {
  let component: NewsletterBoxComponent;
  let fixture: ComponentFixture<NewsletterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

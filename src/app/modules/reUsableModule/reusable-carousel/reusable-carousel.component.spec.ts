import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCarouselComponent } from './reusable-carousel.component';

describe('ReusableCarouselComponent', () => {
  let component: ReusableCarouselComponent;
  let fixture: ComponentFixture<ReusableCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

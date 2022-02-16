import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEducationComponent } from './child-education.component';

describe('ChildEducationComponent', () => {
  let component: ChildEducationComponent;
  let fixture: ComponentFixture<ChildEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

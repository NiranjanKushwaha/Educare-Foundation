import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersCardComponent } from './volunteers-card.component';

describe('VolunteersCardComponent', () => {
  let component: VolunteersCardComponent;
  let fixture: ComponentFixture<VolunteersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteersCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

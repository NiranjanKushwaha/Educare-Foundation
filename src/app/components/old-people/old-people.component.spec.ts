import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldPeopleComponent } from './old-people.component';

describe('OldPeopleComponent', () => {
  let component: OldPeopleComponent;
  let fixture: ComponentFixture<OldPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

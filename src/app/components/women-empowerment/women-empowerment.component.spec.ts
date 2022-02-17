import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenEmpowermentComponent } from './women-empowerment.component';

describe('WomenEmpowermentComponent', () => {
  let component: WomenEmpowermentComponent;
  let fixture: ComponentFixture<WomenEmpowermentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenEmpowermentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenEmpowermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

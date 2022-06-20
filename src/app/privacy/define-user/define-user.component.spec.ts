import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineUserComponent } from './define-user.component';

describe('DefineUserComponent', () => {
  let component: DefineUserComponent;
  let fixture: ComponentFixture<DefineUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

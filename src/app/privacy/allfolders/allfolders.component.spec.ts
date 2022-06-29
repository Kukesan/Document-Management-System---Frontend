import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfoldersComponent } from './allfolders.component';

describe('AllfoldersComponent', () => {
  let component: AllfoldersComponent;
  let fixture: ComponentFixture<AllfoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfoldersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

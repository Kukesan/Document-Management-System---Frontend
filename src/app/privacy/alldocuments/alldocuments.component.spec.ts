import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldocumentsComponent } from './alldocuments.component';

describe('AlldocumentsComponent', () => {
  let component: AlldocumentsComponent;
  let fixture: ComponentFixture<AlldocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

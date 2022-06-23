import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOCRComponent } from './delete-ocr.component';

describe('DeleteOCRComponent', () => {
  let component: DeleteOCRComponent;
  let fixture: ComponentFixture<DeleteOCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOCRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

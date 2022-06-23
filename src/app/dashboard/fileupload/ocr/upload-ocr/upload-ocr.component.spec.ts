import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOCRComponent } from './upload-ocr.component';

describe('UploadOCRComponent', () => {
  let component: UploadOCRComponent;
  let fixture: ComponentFixture<UploadOCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadOCRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadOCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

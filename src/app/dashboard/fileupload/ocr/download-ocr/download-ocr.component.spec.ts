import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadOCRComponent } from './download-ocr.component';

describe('DownloadOCRComponent', () => {
  let component: DownloadOCRComponent;
  let fixture: ComponentFixture<DownloadOCRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadOCRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadOCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

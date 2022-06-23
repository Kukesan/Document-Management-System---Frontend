import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OcrfileService } from 'src/app/shared/services/ocrfile.service';

@Component({
  selector: 'app-upload-ocr',
  templateUrl: './upload-ocr.component.html',
  styleUrls: ['./upload-ocr.component.css']
})
export class UploadOCRComponent implements OnInit {

  progress: number;
  message: string;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private ocrfileService: OcrfileService ) { }

  ngOnInit() {
  }

  uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.ocrfileService.upload(formData)
      .subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress)
            this.progress = Math.round(100 * event.loaded / event.total);
          else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
          }
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }

}

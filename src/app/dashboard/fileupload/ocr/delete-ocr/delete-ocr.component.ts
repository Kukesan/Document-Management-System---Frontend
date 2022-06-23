import { HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { OcrfileService } from 'src/app/shared/services/ocrfile.service';

@Component({
  selector: 'app-delete-ocr',
  templateUrl: './delete-ocr.component.html',
  styleUrls: ['./delete-ocr.component.css']
})
export class DeleteOCRComponent implements OnInit {

  @Input() fileUrl: string;
  Id:string; 
  message: string;
  progress: number;

  constructor(private ocrfileService: OcrfileService) { }

  ngOnInit(): void {
  }
  delete = () => {
    this.ocrfileService.delete(this.fileUrl).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress){
        this.progress = Math.round((100 * event.loaded) / event.total);
      }else if (event.type === HttpEventType.Response) {
         this.message = 'delete success.';
        
      }
    });
  }


}

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/services/file.service';
import { OcrfileService } from 'src/app/shared/services/ocrfile.service';

@Component({
  selector: 'app-download-ocr',
  templateUrl: './download-ocr.component.html',
  styleUrls: ['./download-ocr.component.css']
})
export class DownloadOCRComponent implements OnInit {

  message: string;
  progress: number;
  @Input() fileUrl: string;
  Id:string; 
  
  constructor(private ocrfileService: OcrfileService) {}
  
    ngOnInit(): void {
 //     this.Id = "E4DCA92D-65B0-41C5-9D20-F07D9256B199";
    }

    download = () => {
      this.ocrfileService.download(this.fileUrl).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round((100 * event.loaded) / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Download success.';
          this.downloadFile(event);
          
        }
      });
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
    scan = () => {
      this.ocrfileService.scan(this.fileUrl).subscribe((event) => {
        // if (event.type === HttpEventType.UploadProgress){
        //   this.progress = Math.round((100 * event.loaded) / event.total);
        // }else if (event.type === HttpEventType.Response) {
        //    this.message = 'delete success.';
          
        }
      );
    }
    scandownload = () => {
      this.ocrfileService.scandownload().subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round((100 * event.loaded) / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Download success.';
          this.downloadFile(event);
          
        }
      });
    }      

  
    private downloadFile = (data: HttpResponse<Blob>) => {
      const downloadedFile = new Blob([data.body], { type: data.body.type });
      const a = document.createElement('a');
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);
      a.download = this.fileUrl;
      a.href = URL.createObjectURL(downloadedFile);
      a.target = '_blank';
      a.click();
      document.body.removeChild(a);
    }

}

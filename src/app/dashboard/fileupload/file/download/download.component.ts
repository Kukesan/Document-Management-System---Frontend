import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/services/file.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  message: string;
  progress: number;
  @Input() fileUrl: string;
  Id:string; 
  
  constructor(private fileService: FileService) {}
  
    ngOnInit(): void {
 //     this.Id = "E4DCA92D-65B0-41C5-9D20-F07D9256B199";
    }

    download = () => {
      this.fileService.download(this.fileUrl).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round((100 * event.loaded) / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Download success.';
          this.downloadFile(event);
          
        }
      });
    }
    delete = () => {
      this.fileService.delete(this.fileUrl).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress){
          this.progress = Math.round((100 * event.loaded) / event.total);
        }else if (event.type === HttpEventType.Response) {
           this.message = 'delete success.';
          
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

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/services/file.service';
import { FileUpload } from 'src/app/_interfaces/fileupload.model';

@Component({
  selector: 'app-recyclebin',
  templateUrl: './recyclebin.component.html',
  styleUrls: ['./recyclebin.component.css']
})
export class RecyclebinComponent implements OnInit {

  constructor(private fileService: FileService, private http:HttpClient) { }

  fileUploads: FileUpload[] = [];

  ngOnInit(): void {
    this.getReUsers();
  }

  delete(fileUpload) {
    console.log(fileUpload.id);
    if(confirm(`Are you sure you want to delete User ${fileUpload.id}`)) {
      this.fileService.deleteUser(fileUpload.id).subscribe(res => {
      
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        this.getReUsers();
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      
      })
    }
    
  }

  private getReUsers = () => {
    this.http.get('https://localhost:5001/api/FileUpload/GetReUsers/')
    .subscribe({ next: (res) =>
     this.fileUploads = res as FileUpload[],
        error: (err: HttpErrorResponse) => console.log(err)
      }
    ); 
  }

  restore (fileUpload)  {
    console.log('test1');
    this.fileService.restore(fileUpload.id).subscribe(() =>
    {
      this.getReUsers(); 
    });
     
 }

}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/services/file.service';
import { FileUpload } from 'src/app/_interfaces/fileupload.model';
import { UserToCreate } from 'src/app/_interfaces/userToCreate.model';

@Component({
  selector: 'app-alldocuments',
  templateUrl: './alldocuments.component.html',
  styleUrls: ['./alldocuments.component.css']
})
export class AlldocumentsComponent implements OnInit {

  constructor(private http: HttpClient, private fileService: FileService) { }

  isCreate: boolean;
  name: string;
  address: string;
  user: UserToCreate;
  status:boolean=true;
  folderId:number;
  createdDate:string;
  userId:string;

  photos: string[] = [];
  
  fileUploads: FileUpload[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers = () => {
    this.http.get('https://localhost:5001/api/FileUpload/all-admin')
    .subscribe({
      next: (res) => this.fileUploads = res as FileUpload[],
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
}

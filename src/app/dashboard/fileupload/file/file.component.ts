import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileService } from 'src/app/shared/services/file.service';
import { FileUpload } from 'src/app/_interfaces/fileupload.model';
import { UserToCreate } from 'src/app/_interfaces/userToCreate.model';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  isCreate: boolean;
  name: string;
  address: string;
  user: UserToCreate;
  fileUploads: FileUpload[] = [];
  response: {dbPath: ''};
  photos: string[] = [];
  hero: any;
  heroForm: FormGroup;
  fileUrl:string;
  enteredSearchValue:string='';
  element:boolean=false;
  userdata : FileUpload;
 

  constructor(private http: HttpClient, private fileService: FileService){}

  ngOnInit(){
    this.isCreate =true;
    this.getUsers();   
  }
  

  getPhotos = () => {
    this.fileService.getPhotos()
    .subscribe(data => this.photos = data['photos'])
  }

  onCreate = () => {
    this.user = {
      name: this.name,
      address: this.address,
      imgPath: this.response.dbPath
    }

    this.http.post('https://localhost:5001/api/FileUpload', this.user)
    .subscribe({
      next: _ => {
        this.getUsers();
        this.isCreate = true;
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
 
  private getUsers = () => {
    this.http.get('https://localhost:5001/api/FileUpload')
    .subscribe({
      next: (res) => this.fileUploads = res as FileUpload[],
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  returnToCreate = () => {
    this.isCreate = true;
    this.name = '';
    this.address = '';
    this.getPhotos();
  }

  uploadFinished = (event) => { 
    this.response = event; 
  }
  search = () => {
    console.log('test1');
    this.fileService.Index(this.name).subscribe((event : FileUpload) => {
     this.userdata = event;
     this.element=true;
     
  });
  }
  public createImgPath = (serverPath: string) => { 
    return `https://localhost:5001/${serverPath}`; 
  }

}

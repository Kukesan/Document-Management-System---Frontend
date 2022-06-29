import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileService } from 'src/app/shared/services/file.service';
import { FileUpload } from 'src/app/_interfaces/fileupload.model';
import { UserToCreate } from 'src/app/_interfaces/userToCreate.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  isCreate: boolean;
  name: string;
  address: string;
  user: UserToCreate;
  status:boolean=true;
  folderId:number;
  createdDate:string;
  userId:string;

  fileUploads: FileUpload[] = [];
  response: {dbPath: ''};
  photos: string[] = [];
  hero: any;
  heroForm: FormGroup; 
  fileUrl:string;
  enteredSearchValue:string='';
  element:boolean=false;
  userdata : FileUpload;
 

  constructor(private http: HttpClient, private fileService: FileService,public datepipe:DatePipe){}

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
      imgPath: this.response.dbPath,
      status:this.status,
      folderId:this.folderId,
      createdDate:this.datepipe.transform((new Date),'MM/dd/yyyy h:mm:ss'),
      userId:this.userId
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
    this.http.get('https://localhost:5001/api/FileUpload/all-user')
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

  change(fileUpload)  {
    console.log('test1');
    this.fileService.change(fileUpload.id).subscribe(() =>{
    this.getUsers(); 
    });
 }

}

import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OcrfileService } from 'src/app/shared/services/ocrfile.service';
import { FileUpload } from 'src/app/_interfaces/fileupload.model';
import { UserToCreate } from 'src/app/_interfaces/userToCreate.model';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']
})
export class OcrComponent implements OnInit {

  constructor(private http: HttpClient, private ocrfileService: OcrfileService,public datepipe:DatePipe){}

  isCreate: boolean;
  name: string;
  address: string;
  status:boolean=true;
  folderId:number;
  createdDate:string;
  
  user: UserToCreate;
  users: FileUpload[] = [];
  response: {dbPath: ''};
  photos: string[] = [];
  hero: any;
  heroForm: FormGroup;
  fileUrl:string;
  enteredSearchValue:string='';
  element:boolean=false;
  userdata : FileUpload;
 
  submitMsg:boolean=true;

  ngOnInit(){
    this.isCreate = true;
    this.getPhotos();
   
      
  }
  

  private getPhotos = () => {
    this.ocrfileService.getPhotos()
    .subscribe(data => this.photos = data['photos'])
  }

  onCreate = () => {
    this.user = {
      name: this.name,
      address: this.address,
      imgPath: this.response.dbPath,
      status:this.status,
      folderId:this.folderId,
      createdDate:this.datepipe.transform((new Date),'MM/dd/yyyy h:mm:ss')
    }

    this.http.post('https://localhost:5001/api/fileOcrUpload', this.user)
    .subscribe({
      next: _ => {
        this.getUsers();
        this.isCreate = false;
        this.submitMsg=false;
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
 


  private getUsers = () => {
    this.http.get('https://localhost:5001/api/fileOcrUpload')
    .subscribe({
      next: (res) => this.users = res as FileUpload[],
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
    this.ocrfileService.Index(this.name).subscribe((event : FileUpload) => {
     this.userdata = event;
     this.element=true;
     
 });
  }
  @Output() 
  searchTextChanged:EventEmitter<string> =new EventEmitter<string>();

  onSearchTextChanged()
  {
    this.searchTextChanged.emit(this.name)
  }
  searchtext:string ='';
  OnSearchTextEntered(searchValue:string)
  {
this.searchtext=searchValue;
console.log(this.searchtext);

  }
  public createImgPath = (serverPath: string) => { 
    return `https://localhost:5001/${serverPath}`; 
  }

}

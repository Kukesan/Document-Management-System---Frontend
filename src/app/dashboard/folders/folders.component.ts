import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/shared/services/file.service';
import { FolderService } from 'src/app/shared/services/folder.service';
import { FileUpload } from 'src/app/_interfaces/fileupload.model';
import { Folder } from 'src/app/_interfaces/folder.model';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  constructor(private http: HttpClient,private folderService: FolderService,private fileService: FileService ) { }

  form: any = {};
  folders : Folder[] = [];
  folder : Folder={
    folderId:0,
    name:'',
    comment:'', 
    createddate:''
  }

  fileUploads: FileUpload[] = [];
  photos: string[] = [];

  ngOnInit(): void {
    this.getAllFolders();
    this.getUsers(); 
  }

  submitMsg: boolean = false;
  updateMsg:boolean=false;
  addFolder(){
    if(this.folder.folderId===0){
      this.folderService.addFolder(this.folder)
      .subscribe(
        (response: any)=>{
          this.getAllFolders();
          this.folder.name=''; 
          this.submitMsg= true;
        }
      )
    }else{
      this.updateFolders(this.folder);
      this.updateMsg=true;
    }
  }
  getAllFolders(){
    this.folderService.getAllFolders()
    .subscribe(
      response =>{
        this.folders=response;
      }
    )
  }

  deleteFolder(folderId:number){
    this.folderService.deleteFolder(folderId)
    .subscribe(
      response=>{
        this.getAllFolders();
      }
    )
  }

  pop(folder: Folder){
    this.folder=folder;
  }

  
  updateFolders(folder:Folder){
    this.folderService.updateFolder(folder)
    .subscribe(
      response =>{
        this.getAllFolders();
      }
    )
  }
  // addFiles(folderId:number)
  // {
  //   this.folderService.addFiles(folderId)
  //   .subscribe(
  //     response=>{
      
  //     }
  //   )
  // }
  currentfolderId:number;
  
  private getUsers = () => {
    this.http.get('https://localhost:5001/api/FileUpload')
    .subscribe({
      next: (res) => this.fileUploads = res as FileUpload[],
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
  public createImgPath = (serverPath: string) => { 
    return `https://localhost:5001/${serverPath}`; 
  }
  getPhotos = () => {
    this.fileService.getPhotos() 
    .subscribe(data => this.photos = data['photos'])
  }

  
  isView:boolean=false;
  addfiles(){
    this.currentfolderId=this.folder.folderId;
  }

 
  // addToFolder(fileupload:FileUpload){
  //   console.log(this.currentfolderId);
  //   fileupload.folderId=this.currentfolderId;
  //   console.log(fileupload.folderId);
  //   this.fileService.updateFile(fileupload).subscribe()
  // }

  addToFolder(fileupload:FileUpload){
    console.log(this.currentfolderId);
    fileupload.folderId=this.currentfolderId;
    console.log(fileupload.folderId);
    this.fileService.updateFile(fileupload)
    .subscribe(
      response =>{
        this.getAllFolders();
      }
    )
  }

  specfiles:FileUpload[]=[];
  viewfile(folderId:number){
    this.isView=true;
    console.log(folderId);
    this.fileService.getSpecFiles(folderId)
    .subscribe(
      response =>{
        //this.specfiles=response;
        //this.fileUploads=response;
      }
    )
  }
}

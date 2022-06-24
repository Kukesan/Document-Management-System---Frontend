import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FolderService } from 'src/app/shared/services/folder.service';
import { Folder } from 'src/app/_interfaces/folder.model';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  constructor(private folderService: FolderService) { }

  form: any = {};
  folders : Folder[] = [];
  folder : Folder={
    folderId:0,
    name:'',
    comment:'', 
    createddate:''
  }

  ngOnInit(): void {
    this.getAllFolders();
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
}

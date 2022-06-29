import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/shared/services/folder.service';
import { Folder } from 'src/app/_interfaces/folder.model';

@Component({
  selector: 'app-allfolders',
  templateUrl: './allfolders.component.html',
  styleUrls: ['./allfolders.component.css']
})
export class AllfoldersComponent implements OnInit {

  constructor(private http: HttpClient,private folderService: FolderService,public datepipe:DatePipe) { }

  form: any = {};
  folders : Folder[] = [];
  folder : Folder={
    folderId:0,
    name:'',
    comment:'', 
    createdDate:this.datepipe.transform((new Date),'MM/dd/yyyy h:mm:ss'),
    userId:''
  }

  ngOnInit(): void {
    this.getAllFoldersAdmin();
  }

  submitMsg: boolean = false;
  updateMsg:boolean=false;
  addFolder(){
    if(this.folder.folderId===0){
      this.folderService.addFolder(this.folder)
      .subscribe(
        (response: any)=>{
          this.getAllFoldersAdmin();
          this.folder.name=''; 
          this.submitMsg= true;
          console.log(this.folder);
        }
      )
    }else{
      this.updateFolders(this.folder);
      this.updateMsg=true;
    }
  }
  getAllFoldersAdmin(){
    this.folderService.getAllFoldersAdmin()
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
        this.getAllFoldersAdmin();
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
        this.getAllFoldersAdmin();
      }
    )
  }

}

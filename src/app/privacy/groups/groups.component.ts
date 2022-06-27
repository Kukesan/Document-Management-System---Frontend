import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/shared/services/group.service';
import { UserinfomationsService } from 'src/app/shared/services/userinfomations.service';
import { Group } from 'src/app/_interfaces/group.model';
import { UserInformations } from 'src/app/_interfaces/userdetails.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private groupService: GroupService, private userInformationService: UserinfomationsService, private http: HttpClient) { }

  form: any = {};
  groups: Group[] = [];
  group: Group = {
    groupId: 0,
    name: '',
    comment: '',
    createddate: ''
  }

  userInformations: UserInformations[] = [];

  ngOnInit(): void {
    this.getAllGroups();
    this.getAllUsers();
  }

  submitMsg: boolean = false;
  updateMsg: boolean = false;
  addGroup() {
    if (this.group.groupId === 0) {
      this.groupService.addGroup(this.group)
        .subscribe(
          (response: any) => {
            this.getAllGroups();
            this.group.name = '';
            this.submitMsg = true;
          }
        )
    } else {
      this.updateGroups(this.group);
      this.updateMsg = true;
    }
  }
  getAllGroups() {
    this.groupService.getAllGroups()
      .subscribe(
        response => {
          this.groups = response;
        }
      )
  }

  deleteGroup(groupId: number) {
    this.groupService.deleteGroup(groupId)
      .subscribe(
        response => {
          this.getAllGroups();
        }
      )
  }

  pop(group: Group) {
    this.group = group;
  }


  updateGroups(group: Group) {
    this.groupService.updateGroup(group)
      .subscribe(
        response => {
          this.getAllGroups();
        }
      )
  }

  getAllUsers() {
    this.userInformationService.getAllUsers()
      .subscribe(
        response => {
          this.userInformations = response;
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
  currentgroupId: number;

  // private getUsers = () => {
  //   this.http.get('https://localhost:5001/api/userInformations')
  //   .subscribe({
  //     next: (res) => this.userInformations = res as UserInformations[],
  //     error: (err: HttpErrorResponse) => console.log(err)
  //   });
  // }
  // public createImgPath = (serverPath: string) => { 
  //   return `https://localhost:5001/${serverPath}`; 
  // }
  // getPhotos = () => {
  //   this.fileService.getPhotos() 
  //   .subscribe(data => this.photos = data['photos'])
  // }



  addUsers(group: Group) {
    this.currentgroupId = group.groupId;
    console.log(this.currentgroupId);
  }


  // addToFolder(fileupload:FileUpload){
  //   console.log(this.currentfolderId);
  //   fileupload.folderId=this.currentfolderId;
  //   console.log(fileupload.folderId);
  //   this.fileService.updateFile(fileupload).subscribe()
  // }

  addToGroup(userInformations: UserInformations) {
    console.log(this.currentgroupId);
    userInformations.groupId = this.currentgroupId;
    console.log(userInformations.groupId);
    this.userInformationService.updateUser(userInformations)
      .subscribe(
        response => {
          this.getAllGroups();
        }
      )
  }

  visibleName: string;
  isView: boolean = false;
  isViewGroupId: number;
  currentGroupName: string;

  viewGroup(group: Group) {
    this.isViewGroupId = group.groupId;
    this.isView = true;
    this.visibleName = this.currentGroupName;
    this.currentGroupName = group.name;
    console.log(this.currentGroupName);
    this.getAllUsers();
    // this.fileService.getSpecFiles(folderId)
    // .subscribe(
    //   response =>{
    //   }
    // )
  }

}

import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/shared/services/group.service';
import { GroupmessageService } from 'src/app/shared/services/groupmessage.service';
import { UserinfomationsService } from 'src/app/shared/services/userinfomations.service';
import { Group } from 'src/app/_interfaces/group.model';
import { GroupMessage } from 'src/app/_interfaces/groupmessage.model';
import { UserInformations } from 'src/app/_interfaces/userdetails.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private groupService: GroupService, private userInformationService: UserinfomationsService, private http: HttpClient, private groupmessageService: GroupmessageService,public datepipe:DatePipe) { }

  form: any = {};
  groups: Group[] = [];
  group: Group = {
    groupId: 0,
    name: '',
    comment: '',
    createdDate:this.datepipe.transform((new Date),'MM/dd/yyyy h:mm:ss')
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
  public isViewGroupId: number;
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
  groupmessages: GroupMessage[] = [];
  groupmessage: GroupMessage = {
    id: 0,
    message: '',
    groupId:0,
    createdDate:this.datepipe.transform((new Date),'MM/dd/yyyy h:mm:ss')
  }
  getAllGroupMessages() {
    this.groupmessageService.getAllGroupMessages()
      .subscribe(
        response => {
          this.groupmessages = response;
        }
      )
  }
  submitNotiMsg:boolean=false;
  addGroupMessage() {
    // let createdDate =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    // console.log(createdDate);
    this.groupmessageService.addGroupMessage(this.groupmessage)
      .subscribe(
        (response: any) => {
          // this.getAllIssues();
          //this.issue.description='';
           this.submitNotiMsg= true;
        }
      )
  }

  sendMessage(groupmessage: GroupMessage) {
    console.log(this.group.groupId);
    groupmessage.groupId = this.isViewGroupId;
    this.addGroupMessage();
  }
}

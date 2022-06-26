import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserApiService } from '../shared/services/user-api.service';
import { UserinfomationsService } from '../shared/services/userinfomations.service';
import { UserInformations } from '../_interfaces/userdetails.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  // constructor(private userinformationService :UserinfomationsService) { }

  // form: any = {};
  // userinformations : UserInformations[] = [];
  // userinformation : UserInformations={
  //   id:0,
  //   empId: '',
  //   firstName: '',
  //   lastName:'',
  //   address: '',
  //   city: '',
  //   jobPosition: '',
  //   telephoneNo: '',
  //   userAccepted: false,
  //   userEmail:''
  // }
 
  // ngOnInit(): void {
  //   this.getUser();
  // }
  
  // getUser(){
  //   this.userinformationService.getUser()
  //   .subscribe(
  //     response =>{
  //       this.userinformations=response;
  //     }
  //   )
  // }
  // approveUser(){
  //   this.userinformationService.approveUser(userinformation.userAccepted)
  //   .subscribe(
  //     response=>{

  //     }
  //   )
  // }

  // approveUser(userinformation : UserInformations){
  //   userinformation.userAccepted=true;
  //   this.userinformationService.approveUser(userinformation)
  //   .subscribe(
  //     response =>{
  //       console.log( userinformation.userAccepted);
  //       this.getUser();
  //     }
  //   )
  // }

  userList$!:Observable<any[]>;
  isUpdate:boolean=false;

  constructor(private service: UserApiService,private router:Router) { }

  ngOnInit(): void {
    this.userList$ = this.service.getUserList();
  }

  // Variables (properties)
  modalTitle:string = '';
  activateAddUserComponent:boolean = false;
  activateEditUserComponent:boolean = false;
  user:any;

  modalEdit(item:any) {
    console.log("test2");
    this.user = item;
    console.log(item);
    this.modalTitle = "Edit User";
    this.activateEditUserComponent = true;
    
    console.log("test3");
    //this.router.navigate(['/edit-user']);
  }

  modalClose() { 
    this.activateAddUserComponent = false;
    this.activateEditUserComponent = false;
    this.userList$ = this.service.getUserList();
    this.isUpdate=true;
  }
}

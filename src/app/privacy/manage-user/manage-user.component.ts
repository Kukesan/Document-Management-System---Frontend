import { Component, OnInit } from '@angular/core';
import { UserinfomationsService } from 'src/app/shared/services/userinfomations.service';
import { UserInformations } from 'src/app/_interfaces/userdetails.model';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  constructor(private userinformationService :UserinfomationsService) { }

  form: any = {};
  userinformations : UserInformations[] = [];
  userinformation : UserInformations={
    id:0,
    empId: '',
    firstName: '',
    lastName:'',
    address: '',
    city: '',
    jobPosition: '',
    telephoneNo: ''
  }
 
  ngOnInit(): void {
    this.getAllUsers();
  }
  
  getAllUsers(){
    this.userinformationService.getAllUsers()
    .subscribe(
      response =>{
        this.userinformations=response;
      }
    )
  }
}

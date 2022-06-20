import { Component, OnInit } from '@angular/core';
import { UserinfoService } from 'src/app/shared/services/userinfo.service';
import { UserForRegistrationDto } from 'src/app/_interfaces/user/userForRegistrationDto.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userinfoService : UserinfoService) { }

  userInfoes : UserForRegistrationDto[] = [];

  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(){
    this.userinfoService.getUser()
    .subscribe(
      response =>{
        console.log(response);
        this.userInfoes=response;
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../shared/services/email.service';
import { EmailDto } from '../_interfaces/email.model';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private emailService:EmailService,private router: Router) { }

  form: any = {};
  emaildtos : EmailDto[] = [];
  emaildto : EmailDto={
    to:'',
    subject:'',
    body:''
  }

  ngOnInit(): void {
  }

  sentMsg:boolean=false;
  addEmail(){
    // let createdDate =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    // console.log(createdDate);
      this.emailService.addEmail(this.emaildto)
      .subscribe(
        (response: any)=>{
          // this.getAllIssues();
           this.emaildto.subject='';
           this.sentMsg= true;
        }
      )
      
    }
}

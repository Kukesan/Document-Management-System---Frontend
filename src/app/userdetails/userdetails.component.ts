import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserinfomationsService } from '../shared/services/userinfomations.service';
import { UserInformations } from '../_interfaces/userdetails.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  form: FormGroup = new FormGroup({
    empId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    jobPosition: new FormControl(''),
    telephoneNo: new FormControl('')
  });
  submitted = false;

  constructor(private userinformationService: UserinfomationsService, private router: Router, private formBuilder: FormBuilder) { }

  // form2: any = {};
  userinformations: UserInformations[] = [];
  userinformation: UserInformations = {
    id: 0,
    empId: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    jobPosition: '',
    telephoneNo: '',
    userAccepted: false,
    userEmail: ''
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      empId: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
        ]
      ],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      jobPosition: ['', [Validators.required]],
      telephoneNo: ['', [Validators.required]]
    }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  addUser() {
    console.log("Working")
    this.submitted = true;
    if (this.form.invalid) {
      console.log("Error")
      return;
    }
    this.userinformationService.addUser(this.userinformation)
      .subscribe(
        (response: any) => {
          this.router.navigate(["/dashboard"]);
        }
      )
  }
}
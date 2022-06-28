import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailDto } from 'src/app/_interfaces/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  baseUrl = "https://localhost:5001/api/Email"

  constructor(private http:HttpClient) { }

  addEmail(emaildto:EmailDto):Observable<EmailDto>{
    parseInt(emaildto.to);
    return this.http.post<EmailDto>(this.baseUrl,emaildto);
  }
}

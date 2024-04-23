import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstname !:string;
  lastname !:string;
  email !:string;
  password !:string;
  birthdate !:string;

  constructor(private http: HttpClient) {}

  register(){
    let bodyData = {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "birthdate" : this.birthdate,
      "email" : this.email,
      "password" : this.password
    };

    this.http.post("", bodyData, {responseType: 'text'}).subscribe((resultData: any) => {
      alert("Registered succesfully!");
    });
  }
}

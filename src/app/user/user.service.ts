import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = new User();
  
  constructor(private http: HttpClient) { }
 
  userRegister(){
    let bodyData = {
      "firstname" : this.user.firstname,
      "lastname" : this.user.lastname,
      "birthdate" : this.user.birthdate,
      "email" : this.user.email,
      "password" : this.user.password
    };

    this.http.post("http://localhost:8080/api/save", bodyData, {responseType: 'text'}).subscribe((resultData: any) => {
      alert("Registered succesfully!");
    });
  }

}

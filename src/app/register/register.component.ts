import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = new User();

  constructor(private http: HttpClient) {}
  userService: UserService = new UserService(this.http);

  register(){
    // Calculate age based on birthdate
    const birthDate = new Date(this.user.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }


    if (age < 18) {
      alert("You must be 18 years or older to register.");
      return; 
    }


    let bodyData = {
      "firstName" : this.user.firstName,
      "lastName" : this.user.lastName,
      "birthDate" : this.user.birthDate,
      "email" : this.user.email,
      "password" : this.user.password
    };

    this.http.post("http://localhost:8080/api/save", bodyData, {responseType: 'text'}).subscribe((resultData: any) => {
      alert("Registered successfully!");
    });
  }
}

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
    let bodyData = {
      "firstname" : this.user.firstname,
      "lastname" : this.user.lastname,
      "birthdate" : this.user.birthdate,
      "email" : this.user.email,
      "password" : this.user.password
    };

    this.http.post("http://localhost:8080/api/save", bodyData, {responseType: 'text'}).subscribe((resultData: any) => {
      alert("Registered succesfully!");
      console.log("firstname: " + this.user.firstname +
        "\nlastname: " + this.user.lastname +
        "\nbirthday: " + this.user.birthdate +
        "\nemail: " + this.user.email +
        "\npassword: " + this.user.password
      );
    });
  }
}

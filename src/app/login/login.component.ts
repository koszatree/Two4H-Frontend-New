import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = new User();
  
    constructor(private router: Router, private http: HttpClient) {}

    Login() {
      let bodyData = {
        email: this.user.email,
        password: this.user.password
      };

      this.http.post("http://localhost:8080/api/login", bodyData).subscribe((resultData: any) => {
        if(resultData.status == false) {
          alert("Incorrect email or password!");
        }
        else {
          this.router.navigateByUrl("/home");
        }
      });
    }
}
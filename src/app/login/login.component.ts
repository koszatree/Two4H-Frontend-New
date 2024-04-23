import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import logo from '../../images/logo.png';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    email !:string;
    password !:string;
  
    constructor(private router: Router, private http: HttpClient) {}

    Login() {
      let bodyData = {
        email: this.email,
        password: this.password
      };

      this.http.post("", bodyData).subscribe((resultData: any) => {
        if(resultData.status == false) {
          alert("Incorrect email or password!");
        }
        else {
          this.router.navigateByUrl("/home");
        }
      });
    }
  }
//   export class Image {
//     logo: string = '../../images/logo.png';
// }
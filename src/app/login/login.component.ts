import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { TokenService } from '../utils/guards/token-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User = new User();

    constructor(private router: Router, private http: HttpClient, private tokenService: TokenService) {}

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
          if(resultData.message == "Admin"){
            this.router.navigateByUrl("/admin");
            this.tokenService.adminAuthTrue();

          }
          else if(resultData.message == "Customer"){
            this.router.navigateByUrl("/home");
          }
          else{
            this.router.navigateByUrl("/owner");
          }
        }
      });
    }
}

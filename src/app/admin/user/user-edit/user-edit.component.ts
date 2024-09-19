import {Component, OnInit} from '@angular/core';
import { User } from '../../../user/user';
import { UserService } from '../../../user/user.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {Userdto} from "../../../user/userdto";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private location: Location) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.userService.getUserById(id).subscribe(
      data =>
    {
      this.user.id = data.id;
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.birthDate = this.formatDate(data.birthDate);
      this.user.email = data.email;
      this.user.isCustomer = data.isCustomer;
      this.user.isActive = data.isActive;
    }
  ,
    error => {
      console.error('Error fetching user', error);
    }
  );
  }

  edit(){
    let bodyData = {
      "id" : this.user.id,
      "firstName" : this.user.firstName,
      "lastName" : this.user.lastName,
      "birthDate" : this.user.birthDate,
      "email" : this.user.email,
      "isCustomer" : this.user.isCustomer,
      "isActive" : this.user.isActive
    };

    this.userService.editUser(this.user.id, bodyData).subscribe( (response: any) => {
        alert("Updated successfully!");
        this.router.navigate(['admin/users-list']);
      },
        (error: any) => {
        alert("Failed to update user");
      }
    );
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  goBack(): void {
    this.location.back();
  }
}

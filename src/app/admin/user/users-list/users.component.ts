import { Component, OnInit } from '@angular/core';
import { User } from '../../../user/user';
import { UserService } from '../../../user/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  users!: User[];
  // userEditComponent!: UserEditComponent;
  // constructor(private userService: UserService) {}
  //
  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe((data: User[]) => {
  //     this.users = data;
  //   });
  // }
  //
  // userData(id : number): void {
  //   this.userEditComponent.editUser(id);
  // }
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  userData(id: number): void {
    this.router.navigate(['admin/edit-user', id]);
  }
}

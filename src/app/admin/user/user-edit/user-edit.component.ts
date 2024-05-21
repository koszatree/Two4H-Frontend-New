import { Component } from '@angular/core';
import { User } from '../../../user/user';
import { UserService } from '../../../user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  user = new User();
  constructor(private userService: UserService) {}

  edit(){
    this.userService.editUser(this.user);
  }
}

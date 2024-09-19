import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Userdto} from "./userdto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = new User();

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/api/userData");
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/api/userByIdData?id=${id}`);
  }

  getCustomers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/api/customersData");
  }

  getSellers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/api/sellersData");
  }

  editUser(id: number, user: Userdto): Observable<any>{
    return this.http.put(`http://localhost:8080/api/edit?id=${id}`, user, {responseType: 'text'})
  }
}

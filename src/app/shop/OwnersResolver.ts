import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Userdto} from "../user/userdto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class OwnersResolver implements Resolve<Userdto[]> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Userdto[]> {
    return this.http.get<Userdto[]>('http://localhost:8080/api/customersData');
  }
}

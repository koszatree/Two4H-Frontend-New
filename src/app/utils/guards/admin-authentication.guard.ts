import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, } from '@angular/router';
import { TokenService } from './token-service';
import { LoginComponent } from '../../login/login.component';


export const adminAuthenticationGuard: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    return inject(TokenService).adminAuth()
    ? true : inject(Router).createUrlTree(['']);
};
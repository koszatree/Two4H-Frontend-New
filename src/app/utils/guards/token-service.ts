import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TokenService {
    adminAuth = signal(false);
    adminAuthTrue(){
        this.adminAuth.set(true);
    }    
    adminAuthFalse(){
        this.adminAuth.set(false);
    }

    customerAuth = signal(false);
    customerAuthTrue(){
        this.customerAuth.set(true);
    }    
    customerAuthFalse(){
        this.customerAuth.set(false);
    }

    sellerAuth = signal(false);
    sellerAuthTrue(){
        this.sellerAuth.set(true);
    }    
    sellerAuthFalse(){
        this.sellerAuth.set(false);
    }
}

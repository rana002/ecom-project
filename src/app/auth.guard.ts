import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { SellerService } from "./services/seller.service";
import { BehaviorSubject } from "rxjs";
  
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private SellerService: SellerService) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | BehaviorSubject<boolean> {
        // var isAuthenticated = this.authService.getAuthStatus();
        // if (!isAuthenticated) {
        //     this.router.navigate(['/login']);
        // }
        return this.SellerService.isSellerLoggedIn;
    }
}
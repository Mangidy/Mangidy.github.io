import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}
connected:any;


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
 
    
      if (!this.auth.isLoggedInClient()) {
        this.router.navigate(['/login']);
      }
      return this.auth.isLoggedInClient();
}
}
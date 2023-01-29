import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AtelierGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
 
 
      if (!this.auth.isLoggedInAdmin('atelier')) {
       
        this.router.navigate(['/adminlogin']);
      }
      else if(this.auth.isLoggedInAdmin('atelier')!=null){
    
      
      return this.auth.isLoggedInAdmin('atelier');
      }
      else{
        this.router.navigate(['/home']);
      }
}
}
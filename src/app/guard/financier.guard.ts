import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FinancierGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
 
      if (!this.auth.isLoggedInAdmin('financier')) {
       
        this.router.navigate(['/adminlogin']);
      }
      else if(this.auth.isLoggedInAdmin('financier')!=null){
    
      
      return this.auth.isLoggedInAdmin('financier');
      }
      else{
        this.router.navigate(['/home']);
      }
}
}
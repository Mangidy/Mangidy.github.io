import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-financier-header',
  templateUrl: './financier-header.component.html',
  styleUrls: ['./financier-header.component.css']
})
export class FinancierHeaderComponent {
  constructor(private auth:AuthService,private router:Router){}
  logout(): void{
   this.auth.logoutTokenAdmin('financier');
   this.auth.logoutAdmin().subscribe((val => val));
  }


takeHome():void{

    this.router.navigate(['/financier/paying']);

}
}

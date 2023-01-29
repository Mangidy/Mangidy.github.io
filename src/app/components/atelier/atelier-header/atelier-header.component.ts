import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-atelier-header',
  templateUrl: './atelier-header.component.html',
  styleUrls: ['./atelier-header.component.css'],
})
export class AtelierHeaderComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout(): void {
    this.auth.logoutTokenAdmin('financier');
    this.auth.logoutAdmin().subscribe((val) => val);
  }

  takeHome(): void {
  
      this.router.navigate(['atelier/reception']);

  }
}

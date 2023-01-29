import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  loader: boolean;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router,private titleService: Title) {
    this.titleService.setTitle("Connexion administrateur");
    this.loader = false;
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loader = true;
      this.auth.removeAllToken();
      this.auth
        .logAdmin({
          username: this.loginForm.value.username,
          password: this.loginForm.value.password,
        })
        .subscribe((val) => {
          this.loader = false;
          if (val.message == 'LOGIN SUCCESSFULLY') {
            Swal.fire('Validé', 'Vous ête connecté(e)', 'success');
            this.auth.getAdmin().subscribe((val) => {
              this.auth.setTokenAdmin(
                'abcdefghijklmnopqrstuvwxyz',
                val.admin.roleAdmin.toString().toLowerCase()
              );
              this.router.navigate([
                val.admin.roleAdmin.toString().toLowerCase(),
              ]);
            });
          } else {
            Swal.fire('Erreur', 'Username or password incorrect', 'error');
          }
        });
    }
  }
}

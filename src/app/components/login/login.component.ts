import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loader: boolean;
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService, private router: Router,private titleService: Title) {
    this.loader = false;
    this.titleService.setTitle("Connexion");
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loader = true;
      this.auth.removeAllToken();
      this.auth
        .logClient({
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        })
        .subscribe((val) => {
          this.loader = false;
          if (val.message == 'LOGIN SUCCESSFULLY') {
            Swal.fire('Validé', 'Vous ête connecté(e)', 'success');
            this.router.navigate(['/client/home']);
          } else {
            Swal.fire('Erreur', 'Email ou mot de passe incorrect', 'error');
          }
        });
    }
  }
}

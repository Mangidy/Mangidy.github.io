import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent {
  loader: boolean;
  depositForm = new FormGroup({
    numero: new FormControl('', [Validators.required]),
    marque: new FormControl('', [Validators.required]),
    modele: new FormControl('', [Validators.required]),
    annee: new FormControl('', [Validators.required]),
  });
  get numero() {
    return this.depositForm.get('numero');
  }
  get marque() {
    return this.depositForm.get('marque');
  }
  get modele() {
    return this.depositForm.get('modele');
  }
  get annee() {
    return this.depositForm.get('annee');
  }
  constructor(private auth: AuthService,private titleService: Title) {
    this.titleService.setTitle("Deposition");
    this.loader = false;
  }
  onSubmit(): void {
    if (this.depositForm.valid) {
      this.loader = true;
        this.auth
          .addCarClient({
            numero: this.depositForm.value.numero,
            marque: this.depositForm.value.marque,
            modele: this.depositForm.value.modele,
            annee: this.depositForm.value.annee,
          })
          .subscribe((val) => {
            this.loader = false;
            if ((val.message = 'NEW CAR ADDED'&&val.detailled!='CAR ALREADY ADDED')) {
              this.depositForm.reset();
              Swal.fire(
                'Sucess',
                'Votre voiture a été deposée | Vous pouvez le voir dans votre liste de voiture',
                'success'
              );
            } else {
              Swal.fire('erreur', 'Voiture deja ajouter', 'error');
            }
          })

    } else {
      Swal.fire('erreur', 'Détaille manquante', 'error');
    }
  }
}

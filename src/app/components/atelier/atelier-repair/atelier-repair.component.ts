import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-atelier-repair',
  templateUrl: './atelier-repair.component.html',
  styleUrls: ['./atelier-repair.component.css'],
})
export class AtelierRepairComponent {
  loader: boolean;
  repairForm = new FormGroup({
    numero: new FormControl(''),
    params: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
  });
  get params() {
    return this.repairForm.get('params');
  }
  get value() {
    return this.repairForm.get('value');
  }
  data: any;

  constructor(private auth: AuthService,private titleService: Title) {
    this.titleService.setTitle("Facture");
    this.loader = true;
  }
  ngOnInit() {
    this.auth.getAllCarReception().subscribe((val) => {
      this.data = val;
      this.loader = false;
    });
  }
  onSubmit(): void {
    if (this.repairForm.valid) {
      this.loader = true;
      var newKey = this.repairForm?.value?.params?.toString();
      var info = {
        [newKey as string]: this.repairForm.value.value?.toString(),
      };

        this.auth
          .addCarFacture(
            this.repairForm.value.numero,
            this.repairForm.value.params,
            this.repairForm.value.value
          )
          .subscribe((val) => {
            this.loader = false;
            if (val.message == 'FACTURE FOR CAR ADDED') {
              this.repairForm.reset();

              Swal.fire(
                'Success',
                'Facture ajouter pour la voiture',
                'success'
              );
            } else {
              Swal.fire('erreur', val.detailled, 'error');
            }
          })

    } else {
      Swal.fire('erreur', 'Detaille manquante', 'error');
    }
  }
}

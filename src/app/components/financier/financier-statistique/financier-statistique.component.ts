import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-financier-statistique',
  templateUrl: './financier-statistique.component.html',
  styleUrls: ['./financier-statistique.component.css'],
})
export class FinancierStatistiqueComponent {
  loader: boolean;
  statJour: any;
  statMonth: any;
  statReparation: any;
  statBenef: any;
  moyenne: any;
  get value() {
    return this.statForm.get('value');
  }
  statForm = new FormGroup({
    param: new FormControl(''),
    value: new FormControl('', [Validators.required]),
  });
  constructor(private auth: AuthService,private titleService: Title) {
    this.titleService.setTitle("Statistique");
    this.loader = true;
  }
  ngOnInit() {
    this.auth.getStatJour().subscribe((val) => {
      this.statJour = val;
      this.auth.getStatMonth().subscribe((val) => {
        this.statMonth = val;
        this.auth.getStatReparation().subscribe((val) => {
          var total = 0;
          for (var i = 0; i < val.length; i++) {
            total += val[i].TempsReparation.jour * 24;
            this.statReparation = total / val.length;
          }
          this.loader = false;  
        });      
      });
    });
  }

  objectKeys = Object.keys;
  public voirBenef() {
    this.loader = true;
    if (this.statForm.value.param == '' || this.statForm.value.value == '') {
      this.loader = false;
      Swal.fire('Erreur', 'Veuillez remplir les valeurs', 'error');
    } else {
      this.auth
        .getStatBenefice(this.statForm.value.param, this.statForm.value.value)
        .subscribe((val) => {
          this.loader = false;
          this.statBenef = val;
        });
    }
  }
}

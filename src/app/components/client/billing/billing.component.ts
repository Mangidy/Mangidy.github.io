import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent {
  data: any;
  loader: boolean;
  constructor(private auth: AuthService,private titleService: Title) {
    this.titleService.setTitle("Facture");
    this.loader = true;
  }
  ngOnInit() {
    this.auth.factureClient().subscribe((val) => {
      this.data = val;
      this.loader = false;
    });
  }
  objectKeys = Object.keys;
  public payUp(idVoiture: any) {
    this.loader = true;
    this.auth.validateFactureClient(idVoiture).subscribe((val) => {
      if (val.message == 'VALIDATION FACTURE DONE') {
        Swal.fire('Success', 'Payement effectuer avec success', 'success');
        this.auth.reload('client/billing');
        this.loader = false;
      } else {
        Swal.fire('erreur', val.detailled, 'error');
        this.loader = false;
      }
    });
  }
}

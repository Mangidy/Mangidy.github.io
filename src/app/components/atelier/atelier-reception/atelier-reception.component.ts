import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-atelier-reception',
  templateUrl: './atelier-reception.component.html',
  styleUrls: ['./atelier-reception.component.css'],
})
export class AtelierReceptionComponent {
  loader: boolean;
  data: any;
  constructor(private auth: AuthService,private titleService: Title) {
    this.loader = true;
  }
  ngOnInit() {
    this.auth.getAllCar().subscribe((val) => {
      this.data = val;
      this.loader = false;
    });
  }
  objectKeys = Object.keys;
  public addRepair(numero: any) {
    this.loader = true;
    this.auth.addCarReception(numero).subscribe((val) => {
      this.loader = false;
      if (val.message == 'CAR RECEPTIONNED') {
        Swal.fire('Success', 'Voiture bien recu', 'success');
        this.auth.reload('atelier/reception');
      } else {
        Swal.fire('erreur', val.detailled, 'error');
      }
    });
  }
}

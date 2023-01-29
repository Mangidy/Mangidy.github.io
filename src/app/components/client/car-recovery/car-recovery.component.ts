import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-car-recovery',
  templateUrl: './car-recovery.component.html',
  styleUrls: ['./car-recovery.component.css'],
})
export class CarRecoveryComponent {
  data: any;
  loader: boolean;
  constructor(private auth: AuthService,private titleService: Title) {
    this.titleService.setTitle("Reparation");
    this.loader = true;
  }
  ngOnInit() {
    this.auth.factureClient().subscribe((val) => {
      this.data = val;
      this.loader = false;
    });
  }
  objectKeys = Object.keys;
  public recover(idVoiture: any) {
  }
}

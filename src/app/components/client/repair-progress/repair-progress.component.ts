import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-repair-progress',
  templateUrl: './repair-progress.component.html',
  styleUrls: ['./repair-progress.component.css'],
})
export class RepairProgressComponent {
  data: any;
  loader: boolean;
  constructor(private auth: AuthService,private titleService: Title) {
    this.loader = true;
  }
  ngOnInit() {
    this.titleService.setTitle("Liste des voitures");
    this.auth.carClient().subscribe((val) => {
      this.data = val;
      this.loader = false;
    });
  }
  objectKeys = Object.keys;
  checkSortie(value: any): boolean {
    if (value == true) {
      return true;
    } else {
      return false;
    }
  }
  public cancel(_id: any) {
    this.loader = true;
    this.auth.cancelCarClient(_id).subscribe((val) => {
      this.loader = false;
      if ((val.message = 'DELETE SUCCESSFULLY')) {
        Swal.fire('Success', 'Voiture retire', 'success');
        this.auth.reload('client/progress');
      } else {
        Swal.fire('erreur', val.detailled, 'error');
      }
    });
  }
}

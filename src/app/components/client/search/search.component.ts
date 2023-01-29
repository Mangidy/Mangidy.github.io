import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  loader: boolean;
  data: any;

  constructor(private auth: AuthService, private route: ActivatedRoute,private titleService: Title) {
    this.titleService.setTitle("Recherche");
    this.loader = true;
  }
  ngOnInit() {
    this.auth
      .clientCarSearch(this.route.snapshot.params['msg'])
      .subscribe((val) => {
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
    this.auth.cancelCarClient(_id).subscribe((val) => {
      if ((val.message = 'DELETE SUCCESSFULLY')) {
        Swal.fire('Success', 'Voiture retire', 'success');
        this.auth.reload('client/progress');
      } else {
        Swal.fire('erreur', val.detailled, 'error');
      }
    });
  }
}

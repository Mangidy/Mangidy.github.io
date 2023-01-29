import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-repair-history',
  templateUrl: './repair-history.component.html',
  styleUrls: ['./repair-history.component.css']
})
export class RepairHistoryComponent {
  data:any;
  constructor(private auth:AuthService,private titleService: Title){ this.titleService.setTitle("Historique");}
  ngOnInit() {
    
  this.auth.factureClient().subscribe((val) =>{ this.data=val; });

  }
  objectKeys = Object.keys;
 
   
  
}

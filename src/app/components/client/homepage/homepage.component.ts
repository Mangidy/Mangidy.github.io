import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  data:any;
  constructor(private auth:AuthService,private titleService: Title){ this.titleService.setTitle("Acceuil");}
  ngOnInit() {
    
  this.auth.getClient().subscribe((val) =>{ this.data=val; });

  }
  objectKeys = Object.keys;
 
   
}

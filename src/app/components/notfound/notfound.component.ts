import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {

constructor(private router:Router,private auth:AuthService,private titleService: Title){ this.titleService.setTitle("Page Introuvable");}
takeHome(){
if(localStorage.getItem('tokenClient')!=null)
  {
    this.takeHomeClient();
  }
 else if(localStorage.getItem('tokenatelier')!=null)
  {
    this.takeHomeAdmin();
  }
  else if(localStorage.getItem('tokenfinancier')!=null)
  {
    this.takeHomeAdmin();
  }
  else{
    this.router.navigate(['login']);
  }
}
takeHomeClient():void{
  if(this.auth.getClient().subscribe(val=>val!='USER NOT CONNECTED')){
    this.router.navigate(['client/home']);
  }
}
takeHomeAdmin():void{
  this.auth.getAdmin().subscribe( val => 
       
    this.router.navigate([val.admin.roleAdmin.toString().toLowerCase() ]))
  }
 
 
}




import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  get search(){
    return this.searchForm.get('search');
    }
  searchForm = new FormGroup({
    search:new FormControl('')
  });
  searcher:any;
  goSearch(){
    this.router.navigate(['/client/search/'+this.searchForm.value.search]);
    this.auth.reload('/client/search/'+this.searchForm.value.search);
  }
  constructor(private auth:AuthService,private router:Router){}
  logout(){
    this.auth.logoutTokenClient();
    this.auth.logoutClient().subscribe((val => val));
  }

  takeHome():void{
  
      this.router.navigate(['client/home']);

 
  }
}

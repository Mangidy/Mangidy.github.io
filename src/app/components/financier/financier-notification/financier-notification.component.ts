import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-financier-notification',
  templateUrl: './financier-notification.component.html',
  styleUrls: ['./financier-notification.component.css'],
})
export class FinancierNotificationComponent {
  loader: boolean;
  data: any;
  constructor(private auth: AuthService,private titleService: Title) {
    this.titleService.setTitle("Notification");
    this.loader = true;
  }
  ngOnInit() {
    this.auth.adminNotificationClient().subscribe((val) => {
      this.data = val;
      this.loader = false;
      console.log(val);
    });
  }
  objectKeys = Object.keys;
}

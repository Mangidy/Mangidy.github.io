import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-atelier-notification',
  templateUrl: './atelier-notification.component.html',
  styleUrls: ['./atelier-notification.component.css'],
})
export class AtelierNotificationComponent {
  data: any;
  loader: boolean;
  constructor(private auth: AuthService,private titleService: Title) {
    this.titleService.setTitle("Notification");
    this.loader = true;
  }
  ngOnInit() {
    this.auth.adminNotificationClient().subscribe((val) => {
      this.data = val;
      this.loader = false;
    });
  }
  objectKeys = Object.keys;
}

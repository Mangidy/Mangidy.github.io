import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-client-notification',
  templateUrl: './client-notification.component.html',
  styleUrls: ['./client-notification.component.css'],
})
export class ClientNotificationComponent {
  data: any;
  loader: boolean;
  constructor(private auth: AuthService,private titleService: Title) {
    this.titleService.setTitle("Notification");
    this.loader = true;
  }
  ngOnInit() {
    this.auth.notificationClient().subscribe((val) => {
      this.data = val;
      this.loader = false;
    });
  }
  objectKeys = Object.keys;
}

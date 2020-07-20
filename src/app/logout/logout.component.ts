import { DefaultAuthService } from './../services/default-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private defaultAuthService : DefaultAuthService) { }

  ngOnInit(): void {
    this.defaultAuthService.logoutUser()
  }

}

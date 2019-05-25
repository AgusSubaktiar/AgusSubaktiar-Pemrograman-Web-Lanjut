import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbarUserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  a(){
    this.authService.logout();
  }
}

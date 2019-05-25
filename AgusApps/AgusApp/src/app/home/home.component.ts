import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  export class HomeComponent{
    invalidLogin: boolean;
  
  constructor(
    private router: Router,
    private authService: AuthService) { }

  signIn(credentials){
    this.authService.login(credentials)
    .subscribe(result => {
      if (result)
      this.router.navigate(['/friend']);
      else
      this.invalidLogin = true;
    })
  }
}
// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';

// @Injectable()
// export class AuthService {
//   constructor(private http: Http) {
//   }

//   login(credentials) { 
//    return this.http.post('/api/authenticate', 
//       JSON.stringify(credentials));
//   }

//   logout() { 
//   }

//   isLoggedIn() { 
//     return false;
//   }
// }

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http ) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(response => {
        let result = response.json();
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  logout() { 
    localStorage.removeItem('token');
  }

  isLoggedIn() { 
    // return tokenNotExpired();
    return false;
  }

  currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return 0;
    else return 1
    // return new JwtHelper().decodeToken(token);
  }

}
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: false, autoClose: true }
    }
  ]
})
export class AppComponent implements OnInit {
jwtHelper = new JwtHelperService();
title = 'DatingApp-SPA';
   constructor(private authService: AuthService){}

  ngOnInit(){
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token){
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (user){
      this.authService.currentUser = user;
      this.authService.changeMemberPhoto(user.photoUrl);
    }
  }
}

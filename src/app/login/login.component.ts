import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLogin: Subscription;
  message:string;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

   public login(event, username: string, password: string) {
     let userLogin = this.authenticationService.authenticate(username,password)
     .subscribe(
     (response: Response) => {
       console.log('Server Response: '+ response);
       let data = response.json();

       if (data.authenticated) {
         this.message='User authenticated! '
         console.log('User authenticated! ');
         console.log(data);
       }
       else {
         console.log('User Not authenticated! '+ data);
         this.message='User Not authenticated! '
       }
     });
   }
}

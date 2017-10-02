import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class AuthenticationService {
  baseURL: string = 'http://localhost:8080/openmrs/ws/rest/v1/';

  constructor(private http: Http) { }

  public authenticate(username: string, password: string) {

    let credentials = {
      username: username,
      password: password
    };

    let request = this.getSession(credentials);

    request
      .subscribe(
      (response: Response) => {
        console.log('Server Response: '+ response);
        let data = response.json();

        if (data.authenticated) {
          console.log('User authenticated!');
        }
        else {
          console.log('User Not authenticated!');
        }
      });

    return request;
  }


  public getUrl(): string {

    return this.baseURL + 'session';
  }

  public getSession(credentials: any = null) {

    let headers = new Headers();

    if (credentials && credentials.username) {
      let base64 = btoa(credentials.username + ':' + credentials.password);
      console.log('Base64 Results'+ base64);
      headers.append('Authorization', 'Basic ' + base64);
    }

    let url = this.getUrl();

    return this.http.get(url, {
      headers: headers
    });
  }


}

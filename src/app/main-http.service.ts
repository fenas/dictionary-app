import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainHttpService {
  baseUrl = 'https://od-api.oxforddictionaries.com/api/v2';
  appKey = '2e40afe53c085594f31193bee648ed12'; // app key for
  appId = '1808f678';

  httpHeader = { // api http header
    headers: new HttpHeaders({
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      app_id: 'c2e7b1fe',
      app_key: 'c36dcd311d964bfd7041f090522ec733'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }


  getDetails() {

    this.http.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en/ace`, this.httpHeader).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

}

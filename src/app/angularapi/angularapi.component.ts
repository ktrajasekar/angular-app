import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// Refer - https://www.techiediaries.com/angular-http-client/

@Component({
  selector: 'app-angularapi',
  templateUrl: './angularapi.component.html',
  styleUrls: ['./angularapi.component.css']
})
export class AngularapiComponent implements OnInit {
  users: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }

}

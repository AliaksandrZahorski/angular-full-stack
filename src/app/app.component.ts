import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages = this.http.get<any[]>('http://localhost:4201');

  handleCreate = () => {
    this.http.post<any>('http://localhost:4201/users', {username: "Alex"})
    .subscribe(next => console.log('new user: ', next.body))
  }

  constructor(private http: HttpClient) {}
}

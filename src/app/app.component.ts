import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  age: number;
  found: boolean = false;
  profiles: any[] = [];
  constructor(private http: HttpClient) { }

  onNameKeyUp(event: any) {
    this.name = event.target.value;
    this.found = false;
  }
//  this.http.get(`http://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)

 //http://jsonplaceholder.typicode.com/posts
  getProfile() {
    this.http.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
    .subscribe(
      (data: any[]) => {
        console.log(data)
        if (data.length) {
          this.name = data[0].name;
          this.age = data[0].age;
          this.found = true;
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
}

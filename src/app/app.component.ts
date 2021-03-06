import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private http:HttpClient)
  {

  }
  onCreatePost(postData:{title:string,content:string})
  {
    this.http.post('https://sportshop80.firebaseio.com/posts.json',postData);
  }

}

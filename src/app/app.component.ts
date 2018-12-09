import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: "AIzaSyA6UU7aEcZesMK7jJdmc8eYkuREJv7EtRY",
      authDomain: "activite-blog.firebaseapp.com",
      databaseURL: "https://activite-blog.firebaseio.com",
      projectId: "activite-blog",
      storageBucket: "activite-blog.appspot.com",
      messagingSenderId: "108836997487"
    };
    firebase.initializeApp(config);
  }
}

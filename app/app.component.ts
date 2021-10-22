import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName = '';
  lastName = '';
  gender = '';
  address = '';
  password = '';
  Last = new FormControl('');
  Name = new FormControl('');
  id = new FormControl('');
  Company = new FormControl('');
  title = 'Templates';
}

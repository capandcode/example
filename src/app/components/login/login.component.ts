import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  selectdb?: string;
  username?: string;
  password?: string;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('ss')
    if (this.username == 'admin' && this.password == 'admin') {
      this.route.navigate(['admin']);
    }
  }
  clearFields() {}
}

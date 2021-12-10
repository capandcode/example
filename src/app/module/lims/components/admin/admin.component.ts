import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  labs: { name: string; value: string }[] = [
    { name: 'chennai', value: 'chennai' },
    { name: 'UK', value: 'UK' },
  ];
  logopath: string = './assets/logo/dedaluslogo.png';
  constructor() { }

  ngOnInit(): void {
  }

}
